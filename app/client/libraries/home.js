function dateToTimestamp(date) {
  var split_date = date.split('-');
  var year = parseInt(split_date[0]);
  var month = parseInt(split_date[1]);
  var day = parseInt(split_date[2]);

  var timestamp =  (year - 1970) * 31557600 + (month - 1) * 2629800 + (day - 1) * 86400 - (12 * 60 * 60);
  return timestamp;
}

Template.home.rendered = function() {
  $('input:checkbox').bootstrapSwitch({
    onText: 'Yes',
    offText: 'No'
  });

  var data2 = [
    {text: '北京', id: 'BJ'},
    {text: '南京', id: 'NK'},
    {text: '成都', id: 'CD'},
    {text: '厦门', id: 'XM'},
    {text: '上海', id: 'SH'},
  ]
  $(".select2_dropdown").select2({
    data: data2,
    width: 200
  });

  var data3 = [
    {text: '朝阳区', id: 'CY3'},
    {text: '东城区', id: 'DC3'},
    {text: '西城区', id: 'XC3'},
    {text: '海淀区', id: 'HD3'},
    {text: '丰台区', id: 'FT3'},
  ]
  $(".select3_dropdown").select2({
    data: data3,
    width: 200
  });


  var data4 = [
    {text: '国贸CBD简约风格', id: 'CBD4'},
    {text: '三里屯高层出租', id: 'SLT4'},
    {text: '三元桥使馆区风景房', id: 'SYQ4'},
    {text: '南锣鼓巷花园小区', id: 'NLGX4'},
    {text: '故宫附近四合院', id: 'GG4'},
  ]
  $(".select4_dropdown").select2({
    data: data4,
    width: 200
  });

}

Template.home.helpers({
 calculatedResult: function() {
    return Session.get('calculatedResult');
  }
});





Template.home.events({
  'click #cargo_submit': function () {
    var owner = {};
    owner['importer'] = $('#importer_person').val();
    owner['exporter'] = $('#exporter_person').val();
    owner['exporter_phone'] = $('#exporter_phone').val();
    owner['exporter_email'] = $('#exporter_email').val();

    var cargo = {};
    cargo['name_goods'] = $('#name_goods').val();
    cargo['description'] = $('#description').val();
    cargo['hs_code'] = $('#hs_code').val();

    var truckload = $('#less-than-truckload:checked').val();
    if (truckload) {
      cargo['truckload'] = true;
    }
    else {
      cargo['truckload'] = false;
    }
    cargo['quantity'] = parseInt($('#quantity').val());
    cargo['weight'] = parseInt($('#weight').val());

    cargo['origin'] = $('#origin :selected').text();
    cargo['destination'] = $('#destination :selected').text();
    cargo['arrival_date'] = dateToTimestamp($('#arrival_date').val());
    cargo['vessel'] = $('#vessel_name').val();
    cargo['voyage'] = $('#voyage_number').val();
    cargo['booking'] = $('#booking_ref').val();

    cargo['payment'] = parseInt($('#payment').val());
    cargo['penalty'] = parseInt($('#penalty').val());
    cargo['credit'] = Session.get('credit');
    cargo['export'] = Session.get('export');
    cargo['invoice'] = Session.get('invoice');
    cargo['status'] = false;

var shipmentContract = web3.eth.contract([{"constant":false,"inputs":[],"name":"arrival","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_phone","type":"bytes32"},{"name":"_email","type":"bytes32"}],"name":"agreement","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"ship","outputs":[{"name":"vessel","type":"bytes32"},{"name":"voyage","type":"bytes32"},{"name":"booking","type":"bytes32"},{"name":"active","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"releasePayment","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"cargo","outputs":[{"name":"name","type":"bytes32"},{"name":"description","type":"string"},{"name":"hscode","type":"bytes32"},{"name":"quantity","type":"uint256"},{"name":"weight","type":"uint256"},{"name":"origin","type":"bytes32"},{"name":"destination","type":"bytes32"},{"name":"startdate","type":"uint256"},{"name":"deadline","type":"uint256"},{"name":"payment","type":"uint256"},{"name":"penalty","type":"uint256"},{"name":"hash","type":"string"}],"type":"function"},{"constant":false,"inputs":[],"name":"escrow","outputs":[],"type":"function"},{"inputs":[{"name":"_name","type":"bytes32"},{"name":"cargoname","type":"bytes32"},{"name":"_description","type":"string"},{"name":"_hscode","type":"bytes32"},{"name":"_quantity","type":"uint256"},{"name":"_weight","type":"uint256"},{"name":"_origin","type":"bytes32"},{"name":"_destination","type":"bytes32"},{"name":"_deadline","type":"uint256"},{"name":"_penalty","type":"uint256"},{"name":"_hash","type":"string"},{"name":"_vessel","type":"bytes32"},{"name":"_voyage","type":"bytes32"},{"name":"_booking","type":"bytes32"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"s","type":"string"},{"indexed":false,"name":"owner","type":"bytes32"},{"indexed":false,"name":"purchaser","type":"bytes32"}],"name":"newAgreement","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"s","type":"string"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"paymentReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"s","type":"string"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"delayedShipment","type":"event"}]);

    var shipment = shipmentContract.new(
        owner['importer'],
        cargo['name_goods'],
        cargo['description'],
        cargo['hs_code'],
        cargo['quantity'],
        cargo['weight'],
        cargo['origin'],
        cargo['destination'],
        cargo['deadline'],
        cargo['penalty'],
        cargo['export'],
        cargo['vessel'],
        cargo['voyage'],
        cargo['booking'],
       {
         from: web3.eth.accounts[4],
	data:'606060405236156100565760e060020a600035046311e99c228114610058578063287a4f361461010c578063b6bef7b314610210578063d116c8c414610225578063e128558814610240578063e2fdcc1714610271575b005b610056600a54420362015180600080828410610106575050600c546040805183850492830260208201819052828252603d828401527f54686520736869706d656e74206861732061727269766564206c6174652e204460608301527f656c61792070656e616c74792077696c6c20626520636861726765642e000000608083015291517f466c6f5989ed64798720e39fd0813b34bb24294653b40bc42ac8bfb8db64c5cf9181900360a00190a15b50505050565b6100566004356024356044356012839055601382905560148190556015805434600b5573ffffffffffffffffffffffffffffffffffffffff1916331774ff000000000000000000000000000000000000000019169055426009556011805460ff191660019081179091555460408051602081019290925281810185905260608083526022908301527f4e65772041677265656d656e74206265747765656e2074776f2050617274696560808301527f732100000000000000000000000000000000000000000000000000000000000060a0830152517f82a287cc340a4ddb1ff18684ea9d7da14c18bc3c30d22a24103bde9fbc90024f9181900360c00190a1505050565b61028c600e54600f5460105460115460ff1684565b6100565b60155460a060020a900460ff161561040d57610002565b6102b4600254600454600554600654600754600854600954600a54600b54600c546003989796959493929190600d8c565b61005660155460ff60a060020a90910416156104cf57610002565b6040805194855260208501939093528383019190915215156060830152519081900360800190f35b604080518d81529081018b9052606081018a90526080810189905260a0810188905260c0810187905260e0810186905261010081810186905261012082018590526101408201849052610180602083018181528e54600260018216159094026000190116929092049083018190526101608301906101a08401908f90801561037d5780601f106103525761010080835404028352916020019161037d565b820191906000526020600020905b81548152906001019060200180831161036057829003601f168201915b5050838103825284546002600019600183161561010002019091160480825260209190910190859080156103f25780601f106103c7576101008083540402835291602001916103f2565b820191906000526020600020905b8154815290600101906020018083116103d557829003601f168201915b50509e50505050505050505050505050505060405180910390f35b60008054600b5460405173ffffffffffffffffffffffffffffffffffffffff909216929182818181858883f150506015805474ff0000000000000000000000000000000000000000191660a060020a1790555050600b546040805160208101929092528082526011828201527f5061796d656e742072656c6561736564210000000000000000000000000000006060830152517faf2f17dc93b2d9d775171b489ab37c1c082fc7d4da39f7a21abfe05d609994f092509081900360800190a15b565b600954426203f480909101106104cd576104cd61022956',
         gas: 3000000
       }, function(e, contract){
        console.log(contract);
        if (typeof contract.address != 'undefined') {
          cargo['address'] = contract.address;
          Session.set('contract', contract);
          console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);

          Meteor.call('new_cargo', owner, cargo, function(error, success) {
            if (success) {
              $('#home_submit').replaceWith('<button name ="' + success + '"id="go_cargo" class="btn btn-success btn-lg">Go To</button>');
            }
          })
        }
     })

  },
  'click #credit': function() {
    Session.set('credit', 'QmdmYXuxEZRH41Uj9FFHpgBTTwc9FBybjr6aW7zDDvC7TT');
    Session.set('export', 'QmSQw2oEoyd4Ytkijqy3BzvK7kChWM9wkmkAA3SBQmkYZV');
    Session.set('invoice', 'QmeG11u8UJTAYE12XDcoWum48epZy2vHQCW67cp7bdBry3');
    console.log("Documents uploaded!");
  },
  'click #go_cargo': function() {
    var route = '/buyer/' + $('#go_cargo').attr('name');
    Router.go(route);
  },
  'click .document_item': function(event) {
    var id = '#' + event.target.id;
    $(id).addClass('selected');
  },

    'input #duration': function(event, template) {
      // Do whatever you want with numberPressed
      // like set a Session value that is reflected in the DOM via a helper
      var calculatedResult = event.currentTarget.value * 100;
      Session.set('calculatedResult', calculatedResult);
	console.log(calculatedResult);
  }


});
