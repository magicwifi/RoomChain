// var interval;
//
// function checkAddress(cargo_id, address) {
//   interval = Meteor.setInterval(function() {
//     var balance = web3.eth.getBalance(address);
//     var balance_wei = balance.toString(10);
//     var balance_eth = web3.fromWei(balance_wei, "ether");
//   }, 16000, address)
// }




Template.cargo.helpers({
  timestampToDate: function(timestamp) {
    // if(this.cargo) {
    //   if (this.cargo.paid !== true) {
    //     console.log("fdsa");
    //     checkAddress(this._id, this.cargo.address);
    //   }
    // }
    var date = new Date(timestamp * 1000);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    return year.toString() + '-' + month.toString() + '-' + day.toString();
  }
})

Template.cargo.events({
  'click #pay_seller': function() {
    Meteor.call('paid', this._id);


var shipmentContract = web3.eth.contract([{"constant":false,"inputs":[],"name":"arrival","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_phone","type":"bytes32"},{"name":"_email","type":"bytes32"}],"name":"agreement","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"ship","outputs":[{"name":"active","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"releasePayment","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"cargo","outputs":[{"name":"description","type":"string"},{"name":"city","type":"bytes32"},{"name":"destination","type":"bytes32"},{"name":"startdate","type":"uint256"},{"name":"person_num","type":"uint256"},{"name":"duration","type":"uint256"},{"name":"deadline","type":"uint256"},{"name":"payment","type":"uint256"},{"name":"penalty","type":"uint256"},{"name":"hash","type":"string"}],"type":"function"},{"constant":false,"inputs":[],"name":"escrow","outputs":[],"type":"function"},{"inputs":[{"name":"_name","type":"bytes32"},{"name":"_city","type":"bytes32"},{"name":"_description","type":"string"},{"name":"_destination","type":"bytes32"},{"name":"_deadline","type":"uint256"},{"name":"_duration","type":"uint256"},{"name":"_person_num","type":"uint256"},{"name":"_penalty","type":"uint256"},{"name":"_hash","type":"string"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"s","type":"string"},{"indexed":false,"name":"owner","type":"bytes32"},{"indexed":false,"name":"purchaser","type":"bytes32"}],"name":"newAgreement","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"s","type":"string"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"paymentReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"s","type":"string"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"delayedShipment","type":"event"}]);

    var contract = shipmentContract.at(this.cargo.address);
    var cargoinfo = this;

    var filter = contract.newAgreement({}, {fromBlock: 'latest', toBlock: 'latest'}, function(error, result) {
      if (!error) {
        console.log(result);
      }
    });
    contract.agreement(cargoinfo.owner.exporter, cargoinfo.owner.exporter_phone, cargoinfo.owner.exporter_email, {from: web3.eth.accounts[3], value: web3.toWei(cargoinfo.cargo.payment, 'ether'), gas: 500000}, function(error, success) {
      if(!error) {
        console.log("Successfully sent transaction.");
      }
    })
  },
  'click #releasePayment': function() {
    var route = '/dispute/' + this._id;
    Router.go(route);
  },
  'click #cargo_shipped': function() {
    $('#shipment').html('<div class="cargo_header shipment_header"><h2>门锁权限已经开通</h2><img src="/cargo.jpg" /><div class="col-xs-12 dispute_buttons"><div class="col-xs-6"><button  id="unlockdoor" class="btn btn-lg btn-warning shipment_button">开启房门</button></div><div id="lockdoor" class="col-xs-6"><button class="btn btn-lg btn-danger shipment_button">关闭房门</button></div></div></div>');
  },
  'click #repay': function() {
    var route = '/';
    Router.go(route);
  },
  'click #unlockdoor': function(){
    Meteor.call('unlock');
   },
  'click #lockdoor': function(){
    Meteor.call('lock');
	}


})
