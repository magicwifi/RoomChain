
Template.dispute.events({
  'click #back_room': function() {
    Meteor.call('refund', this._id);

var shipmentContract = web3.eth.contract([{"constant":false,"inputs":[],"name":"arrival","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_phone","type":"bytes32"},{"name":"_email","type":"bytes32"}],"name":"agreement","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"ship","outputs":[{"name":"active","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"releasePayment","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"cargo","outputs":[{"name":"description","type":"string"},{"name":"city","type":"bytes32"},{"name":"destination","type":"bytes32"},{"name":"startdate","type":"uint256"},{"name":"person_num","type":"uint256"},{"name":"duration","type":"uint256"},{"name":"deadline","type":"uint256"},{"name":"payment","type":"uint256"},{"name":"penalty","type":"uint256"},{"name":"hash","type":"string"}],"type":"function"},{"constant":false,"inputs":[],"name":"escrow","outputs":[],"type":"function"},{"inputs":[{"name":"_name","type":"bytes32"},{"name":"_city","type":"bytes32"},{"name":"_description","type":"string"},{"name":"_destination","type":"bytes32"},{"name":"_deadline","type":"uint256"},{"name":"_duration","type":"uint256"},{"name":"_person_num","type":"uint256"},{"name":"_penalty","type":"uint256"},{"name":"_hash","type":"string"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"s","type":"string"},{"indexed":false,"name":"owner","type":"bytes32"},{"indexed":false,"name":"purchaser","type":"bytes32"}],"name":"newAgreement","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"s","type":"string"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"paymentReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"s","type":"string"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"delayedShipment","type":"event"}]);
	var contract = shipmentContract.at(this.cargo.address);

    var filter = contract.paymentReleased({}, {fromBlock: 'latest', toBlock: 'latest'}, function(error, result) {
      if (!error) {
        console.log(result);
      }
    });

    contract.releasePayment({from: web3.eth.accounts[3], gas: 500000}, function(error, success) {
      if(!error) {
        console.log("Successfully sent transaction.", success);
        $('#back_room').html('<button  class="btn btn-lg btn-success shipment_button">退房成功</button>')
      }
    })

}
})
