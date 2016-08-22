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
    owner['importer'] = $('#booking :selected').text();
    owner['exporter'] = $('#exporter_person').val();
    owner['exporter_phone'] = $('#exporter_phone').val();
    owner['exporter_email'] = $('#exporter_email').val();

    var cargo = {};
    cargo['description'] = $('#description').val();


    cargo['city'] = $('#city :selected').text();
    cargo['destination'] = $('#destination :selected').text();
    cargo['arrival_date'] = dateToTimestamp($('#arrival_date').val());
    cargo['duration'] = $('#duration').val();
    cargo['person_num'] = $('#person_num').val();

    cargo['payment'] = parseInt($('#payment').text());
    cargo['penalty'] = parseInt($('#penalty').text());
    cargo['credit'] = Session.get('credit');
    cargo['export'] = Session.get('export');
    cargo['invoice'] = Session.get('invoice');
    cargo['status'] = false;

var shipmentContract = web3.eth.contract([{"constant":false,"inputs":[],"name":"arrival","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_phone","type":"bytes32"},{"name":"_email","type":"bytes32"}],"name":"agreement","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"ship","outputs":[{"name":"active","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"releasePayment","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"cargo","outputs":[{"name":"description","type":"string"},{"name":"city","type":"bytes32"},{"name":"destination","type":"bytes32"},{"name":"startdate","type":"uint256"},{"name":"person_num","type":"uint256"},{"name":"duration","type":"uint256"},{"name":"deadline","type":"uint256"},{"name":"payment","type":"uint256"},{"name":"penalty","type":"uint256"},{"name":"hash","type":"string"}],"type":"function"},{"constant":false,"inputs":[],"name":"escrow","outputs":[],"type":"function"},{"inputs":[{"name":"_name","type":"bytes32"},{"name":"_city","type":"bytes32"},{"name":"_description","type":"string"},{"name":"_destination","type":"bytes32"},{"name":"_deadline","type":"uint256"},{"name":"_duration","type":"uint256"},{"name":"_person_num","type":"uint256"},{"name":"_penalty","type":"uint256"},{"name":"_hash","type":"string"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"s","type":"string"},{"indexed":false,"name":"owner","type":"bytes32"},{"indexed":false,"name":"purchaser","type":"bytes32"}],"name":"newAgreement","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"s","type":"string"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"paymentReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"s","type":"string"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"delayedShipment","type":"event"}]);

    var shipment = shipmentContract.new(
        owner['importer'],
        cargo['city'],
        cargo['description'],
        cargo['destination'],
        cargo['deadline'],
        cargo['duration'],
        cargo['person_num'],
        cargo['penalty'],
        cargo['export'],
       {
         from: web3.eth.accounts[4],
	 data: '606060405236156100565760e060020a600035046311e99c228114610058578063287a4f361461010c578063b6bef7b314610210578063d116c8c41461021c578063e128558814610237578063e2fdcc1714610261575b005b610056600854420362015180600080828410610106575050600a546040805183850492830260208201819052828252603d828401527f54686520736869706d656e74206861732061727269766564206c6174652e204460608301527f656c61792070656e616c74792077696c6c20626520636861726765642e000000608083015291517f466c6f5989ed64798720e39fd0813b34bb24294653b40bc42ac8bfb8db64c5cf9181900360a00190a15b50505050565b610056600435602435604435600d839055600e829055600f819055601080543460095573ffffffffffffffffffffffffffffffffffffffff1916331774ff00000000000000000000000000000000000000001916905542600555600c805460ff191660019081179091555460408051602081019290925281810185905260608083526022908301527f4e65772041677265656d656e74206265747765656e2074776f2050617274696560808301527f732100000000000000000000000000000000000000000000000000000000000060a0830152517f82a287cc340a4ddb1ff18684ea9d7da14c18bc3c30d22a24103bde9fbc90024f9181900360c00190a1505050565b61027c600c5460ff1681565b6100565b60105460a060020a900460ff16156103d957610002565b610290600354600454600554600654600754600854600954600a5460029796959493929190600b8a565b61005660105460ff60a060020a909104161561049b57610002565b604080519115158252519081900360200190f35b60408051602081018b9052908101899052606081018890526080810187905260a0810186905260c0810185905260e081018490526101008181018490526101408083528c546002600182161590930260001901169190910490820181905281906101208201906101608301908e90801561034b5780601f106103205761010080835404028352916020019161034b565b820191906000526020600020905b81548152906001019060200180831161032e57829003601f168201915b5050838103825284546002600019600183161561010002019091160480825260209190910190859080156103c05780601f10610395576101008083540402835291602001916103c0565b820191906000526020600020905b8154815290600101906020018083116103a357829003601f168201915b50509c5050505050505050505050505060405180910390f35b6000805460095460405173ffffffffffffffffffffffffffffffffffffffff909216929182818181858883f150506010805474ff0000000000000000000000000000000000000000191660a060020a17905550506009546040805160208101929092528082526011828201527f5061796d656e742072656c6561736564210000000000000000000000000000006060830152517faf2f17dc93b2d9d775171b489ab37c1c082fc7d4da39f7a21abfe05d609994f092509081900360800190a15b565b600554426203f480909101106104995761049961022056',
         gas: 3000000
       }, function(e, contract){
        console.log(contract);
        if (typeof contract.address != 'undefined') {
          cargo['address'] = contract.address;
          Session.set('contract', contract);
          console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);

          Meteor.call('new_cargo', owner, cargo, function(error, success) {
            if (success) {
              $('#home_submit').replaceWith('<button name ="' + success + '"id="go_cargo" class="btn btn-success btn-lg">支付页面</button>');
            }
          })
        }
     })

  },
  'click #credit': function() {
    Session.set('credit', 'QmcZFrafRsXHis1HagrACpv7xythYoQ46XMVpX7BHVFdV1');
    Session.set('export', 'QmdhVBpGngKEmGua9d3UoSaABTXtaTF7VJaZzojNeGTonJ');
    Session.set('invoice', 'QmPHFEqmxC3tDjYJDANiAmZ55dQyWz9RBptBPtKs8i7YyE');
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
