contract Shipment {
  // Metainformation owner of Cargo
  struct Seller {
    address account;
    bytes32 name;
  }

  // Basic information of shipper
  struct Buyer {
    bytes32 name;
    bytes32 phone;
    bytes32 email;
    address account;
    bool paid;
  }

  // Details of Cargo, including destination and payment
  struct Cargo {
    string description;
    bytes32 city;
    bytes32 destination;
    uint startdate;
    uint person_num;
    uint duration;
    uint deadline;
    uint payment;
    uint penalty;
    string hash;
  }

  struct Shipping {
    bool active;
  }

  Seller seller;
  Cargo public cargo;
  Shipping public ship;
  Buyer buyer;

  // Events, used to keep track of progress
  event newAgreement(string s, bytes32 owner, bytes32 purchaser);
  event paymentReleased(string s, uint amount);
  event delayedShipment(string s, uint amount);

  function Shipment(bytes32 _name,
                    bytes32 _city,
                    string _description,
                    bytes32 _destination,
		    uint _deadline,
                    uint _duration,
                    uint _person_num,
                    uint _penalty,
                    string _hash) {
    seller.account = msg.sender;
    seller.name = _name;

    cargo.city = _city;
    cargo.description = _description;
    cargo.destination = _destination;
    cargo.duration = _duration;
    cargo.deadline = _deadline;
    cargo.person_num = _person_num;
    cargo.penalty = _penalty;
    cargo.hash = _hash;

    ship.active = false;
  }

  function agreement(bytes32 _name, bytes32 _phone, bytes32 _email) {

    buyer.name = _name;
    buyer.phone = _phone;
    buyer.email = _email;
    buyer.account = msg.sender;
    cargo.payment = msg.value;
    buyer.paid = false;

    cargo.startdate = block.timestamp;
    ship.active = true;

    newAgreement("New Agreement between two Parties!", seller.name, buyer.name);
  }

  function escrow() {
    if (buyer.paid) {
      throw;
    }
    if (cargo.startdate + (60 * 60 * 72) >= block.timestamp) {
      releasePayment();
    }
  }

  function releasePayment() {
    if (buyer.paid) {
      throw;
    }
    seller.account.send(cargo.payment);
    buyer.paid = true;
    paymentReleased("Payment released!", cargo.payment);
  }

  function arrival() {
    uint delay = block.timestamp - cargo.deadline;
    uint day = 60 * 60 * 24;
    uint totaldelay = 0;

    if (delay >= day) {
      totaldelay = delay / day;
      uint penalty = totaldelay * cargo.penalty;
      delayedShipment("The shipment has arrived late. Delay penalty will be charged.", penalty);
    }
  }
}
