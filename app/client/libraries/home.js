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

  var data = [
    {text: 'Afghanistan', id: 'AF'},
    {text: 'Åland Islands', id: 'AX'},
    {text: 'Albania', id: 'AL'},
    {text: 'Algeria', id: 'DZ'},
    {text: 'American Samoa', id: 'AS'},
    {text: 'AndorrA', id: 'AD'},
    {text: 'Angola', id: 'AO'},
    {text: 'Anguilla', id: 'AI'},
    {text: 'Antarctica', id: 'AQ'},
    {text: 'Antigua and Barbuda', id: 'AG'},
    {text: 'Argentina', id: 'AR'},
    {text: 'Armenia', id: 'AM'},
    {text: 'Aruba', id: 'AW'},
    {text: 'Australia', id: 'AU'},
    {text: 'Austria', id: 'AT'},
    {text: 'Azerbaijan', id: 'AZ'},
    {text: 'Bahamas', id: 'BS'},
    {text: 'Bahrain', id: 'BH'},
    {text: 'Bangladesh', id: 'BD'},
    {text: 'Barbados', id: 'BB'},
    {text: 'Belarus', id: 'BY'},
    {text: 'Belgium', id: 'BE'},
    {text: 'Belize', id: 'BZ'},
    {text: 'Benin', id: 'BJ'},
    {text: 'Bermuda', id: 'BM'},
    {text: 'Bhutan', id: 'BT'},
    {text: 'Bolivia', id: 'BO'},
    {text: 'Bosnia and Herzegovina', id: 'BA'},
    {text: 'Botswana', id: 'BW'},
    {text: 'Bouvet Island', id: 'BV'},
    {text: 'Brazil', id: 'BR'},
    {text: 'British Indian Ocean Territory', id: 'IO'},
    {text: 'Brunei Darussalam', id: 'BN'},
    {text: 'Bulgaria', id: 'BG'},
    {text: 'Burkina Faso', id: 'BF'},
    {text: 'Burundi', id: 'BI'},
    {text: 'Cambodia', id: 'KH'},
    {text: 'Cameroon', id: 'CM'},
    {text: 'Canada', id: 'CA'},
    {text: 'Cape Verde', id: 'CV'},
    {text: 'Cayman Islands', id: 'KY'},
    {text: 'Central African Republic', id: 'CF'},
    {text: 'Chad', id: 'TD'},
    {text: 'Chile', id: 'CL'},
    {text: 'China', id: 'CN'},
    {text: 'Christmas Island', id: 'CX'},
    {text: 'Cocos (Keeling) Islands', id: 'CC'},
    {text: 'Colombia', id: 'CO'},
    {text: 'Comoros', id: 'KM'},
    {text: 'Congo', id: 'CG'},
    {text: 'Congo, The Democratic Republic of the', id: 'CD'},
    {text: 'Cook Islands', id: 'CK'},
    {text: 'Costa Rica', id: 'CR'},
    {text: 'Cote D\'Ivoire', id: 'CI'},
    {text: 'Croatia', id: 'HR'},
    {text: 'Cuba', id: 'CU'},
    {text: 'Cyprus', id: 'CY'},
    {text: 'Czech Republic', id: 'CZ'},
    {text: 'Denmark', id: 'DK'},
    {text: 'Djibouti', id: 'DJ'},
    {text: 'Dominica', id: 'DM'},
    {text: 'Dominican Republic', id: 'DO'},
    {text: 'Ecuador', id: 'EC'},
    {text: 'Egypt', id: 'EG'},
    {text: 'El Salvador', id: 'SV'},
    {text: 'Equatorial Guinea', id: 'GQ'},
    {text: 'Eritrea', id: 'ER'},
    {text: 'Estonia', id: 'EE'},
    {text: 'Ethiopia', id: 'ET'},
    {text: 'Falkland Islands (Malvinas)', id: 'FK'},
    {text: 'Faroe Islands', id: 'FO'},
    {text: 'Fiji', id: 'FJ'},
    {text: 'Finland', id: 'FI'},
    {text: 'France', id: 'FR'},
    {text: 'French Guiana', id: 'GF'},
    {text: 'French Polynesia', id: 'PF'},
    {text: 'French Southern Territories', id: 'TF'},
    {text: 'Gabon', id: 'GA'},
    {text: 'Gambia', id: 'GM'},
    {text: 'Georgia', id: 'GE'},
    {text: 'Germany', id: 'DE'},
    {text: 'Ghana', id: 'GH'},
    {text: 'Gibraltar', id: 'GI'},
    {text: 'Greece', id: 'GR'},
    {text: 'Greenland', id: 'GL'},
    {text: 'Grenada', id: 'GD'},
    {text: 'Guadeloupe', id: 'GP'},
    {text: 'Guam', id: 'GU'},
    {text: 'Guatemala', id: 'GT'},
    {text: 'Guernsey', id: 'GG'},
    {text: 'Guinea', id: 'GN'},
    {text: 'Guinea-Bissau', id: 'GW'},
    {text: 'Guyana', id: 'GY'},
    {text: 'Haiti', id: 'HT'},
    {text: 'Heard Island and Mcdonald Islands', id: 'HM'},
    {text: 'Holy See (Vatican City State)', id: 'VA'},
    {text: 'Honduras', id: 'HN'},
    {text: 'Hong Kong', id: 'HK'},
    {text: 'Hungary', id: 'HU'},
    {text: 'Iceland', id: 'IS'},
    {text: 'India', id: 'IN'},
    {text: 'Indonesia', id: 'ID'},
    {text: 'Iran, Islamic Republic Of', id: 'IR'},
    {text: 'Iraq', id: 'IQ'},
    {text: 'Ireland', id: 'IE'},
    {text: 'Isle of Man', id: 'IM'},
    {text: 'Israel', id: 'IL'},
    {text: 'Italy', id: 'IT'},
    {text: 'Jamaica', id: 'JM'},
    {text: 'Japan', id: 'JP'},
    {text: 'Jersey', id: 'JE'},
    {text: 'Jordan', id: 'JO'},
    {text: 'Kazakhstan', id: 'KZ'},
    {text: 'Kenya', id: 'KE'},
    {text: 'Kiribati', id: 'KI'},
    {text: 'Korea, Democratic People\'S Republic of', id: 'KP'},
    {text: 'Korea, Republic of', id: 'KR'},
    {text: 'Kuwait', id: 'KW'},
    {text: 'Kyrgyzstan', id: 'KG'},
    {text: 'Lao People\'S Democratic Republic', id: 'LA'},
    {text: 'Latvia', id: 'LV'},
    {text: 'Lebanon', id: 'LB'},
    {text: 'Lesotho', id: 'LS'},
    {text: 'Liberia', id: 'LR'},
    {text: 'Libyan Arab Jamahiriya', id: 'LY'},
    {text: 'Liechtenstein', id: 'LI'},
    {text: 'Lithuania', id: 'LT'},
    {text: 'Luxembourg', id: 'LU'},
    {text: 'Macao', id: 'MO'},
    {text: 'Macedonia, The Former Yugoslav Republic of', id: 'MK'},
    {text: 'Madagascar', id: 'MG'},
    {text: 'Malawi', id: 'MW'},
    {text: 'Malaysia', id: 'MY'},
    {text: 'Maldives', id: 'MV'},
    {text: 'Mali', id: 'ML'},
    {text: 'Malta', id: 'MT'},
    {text: 'Marshall Islands', id: 'MH'},
    {text: 'Martinique', id: 'MQ'},
    {text: 'Mauritania', id: 'MR'},
    {text: 'Mauritius', id: 'MU'},
    {text: 'Mayotte', id: 'YT'},
    {text: 'Mexico', id: 'MX'},
    {text: 'Micronesia, Federated States of', id: 'FM'},
    {text: 'Moldova, Republic of', id: 'MD'},
    {text: 'Monaco', id: 'MC'},
    {text: 'Mongolia', id: 'MN'},
    {text: 'Montserrat', id: 'MS'},
    {text: 'Morocco', id: 'MA'},
    {text: 'Mozambique', id: 'MZ'},
    {text: 'Myanmar', id: 'MM'},
    {text: 'Namibia', id: 'NA'},
    {text: 'Nauru', id: 'NR'},
    {text: 'Nepal', id: 'NP'},
    {text: 'Netherlands', id: 'NL'},
    {text: 'Netherlands Antilles', id: 'AN'},
    {text: 'New Caledonia', id: 'NC'},
    {text: 'New Zealand', id: 'NZ'},
    {text: 'Nicaragua', id: 'NI'},
    {text: 'Niger', id: 'NE'},
    {text: 'Nigeria', id: 'NG'},
    {text: 'Niue', id: 'NU'},
    {text: 'Norfolk Island', id: 'NF'},
    {text: 'Northern Mariana Islands', id: 'MP'},
    {text: 'Norway', id: 'NO'},
    {text: 'Oman', id: 'OM'},
    {text: 'Pakistan', id: 'PK'},
    {text: 'Palau', id: 'PW'},
    {text: 'Palestinian Territory, Occupied', id: 'PS'},
    {text: 'Panama', id: 'PA'},
    {text: 'Papua New Guinea', id: 'PG'},
    {text: 'Paraguay', id: 'PY'},
    {text: 'Peru', id: 'PE'},
    {text: 'Philippines', id: 'PH'},
    {text: 'Pitcairn', id: 'PN'},
    {text: 'Poland', id: 'PL'},
    {text: 'Portugal', id: 'PT'},
    {text: 'Puerto Rico', id: 'PR'},
    {text: 'Qatar', id: 'QA'},
    {text: 'Reunion', id: 'RE'},
    {text: 'Romania', id: 'RO'},
    {text: 'Russian Federation', id: 'RU'},
    {text: 'RWANDA', id: 'RW'},
    {text: 'Saint Helena', id: 'SH'},
    {text: 'Saint Kitts and Nevis', id: 'KN'},
    {text: 'Saint Lucia', id: 'LC'},
    {text: 'Saint Pierre and Miquelon', id: 'PM'},
    {text: 'Saint Vincent and the Grenadines', id: 'VC'},
    {text: 'Samoa', id: 'WS'},
    {text: 'San Marino', id: 'SM'},
    {text: 'Sao Tome and Principe', id: 'ST'},
    {text: 'Saudi Arabia', id: 'SA'},
    {text: 'Senegal', id: 'SN'},
    {text: 'Serbia and Montenegro', id: 'CS'},
    {text: 'Seychelles', id: 'SC'},
    {text: 'Sierra Leone', id: 'SL'},
    {text: 'Singapore', id: 'SG'},
    {text: 'Slovakia', id: 'SK'},
    {text: 'Slovenia', id: 'SI'},
    {text: 'Solomon Islands', id: 'SB'},
    {text: 'Somalia', id: 'SO'},
    {text: 'South Africa', id: 'ZA'},
    {text: 'South Georgia and the South Sandwich Islands', id: 'GS'},
    {text: 'Spain', id: 'ES'},
    {text: 'Sri Lanka', id: 'LK'},
    {text: 'Sudan', id: 'SD'},
    {text: 'Suritext', id: 'SR'},
    {text: 'Svalbard and Jan Mayen', id: 'SJ'},
    {text: 'Swaziland', id: 'SZ'},
    {text: 'Sweden', id: 'SE'},
    {text: 'Switzerland', id: 'CH'},
    {text: 'Syrian Arab Republic', id: 'SY'},
    {text: 'Taiwan, Province of China', id: 'TW'},
    {text: 'Tajikistan', id: 'TJ'},
    {text: 'Tanzania, United Republic of', id: 'TZ'},
    {text: 'Thailand', id: 'TH'},
    {text: 'Timor-Leste', id: 'TL'},
    {text: 'Togo', id: 'TG'},
    {text: 'Tokelau', id: 'TK'},
    {text: 'Tonga', id: 'TO'},
    {text: 'Trinidad and Tobago', id: 'TT'},
    {text: 'Tunisia', id: 'TN'},
    {text: 'Turkey', id: 'TR'},
    {text: 'Turkmenistan', id: 'TM'},
    {text: 'Turks and Caicos Islands', id: 'TC'},
    {text: 'Tuvalu', id: 'TV'},
    {text: 'Uganda', id: 'UG'},
    {text: 'Ukraine', id: 'UA'},
    {text: 'United Arab Emirates', id: 'AE'},
    {text: 'United Kingdom', id: 'GB'},
    {text: 'United States', id: 'US'},
    {text: 'United States Minor Outlying Islands', id: 'UM'},
    {text: 'Uruguay', id: 'UY'},
    {text: 'Uzbekistan', id: 'UZ'},
    {text: 'Vanuatu', id: 'VU'},
    {text: 'Venezuela', id: 'VE'},
    {text: 'Viet Nam', id: 'VN'},
    {text: 'Virgin Islands, British', id: 'VG'},
    {text: 'Virgin Islands, U.S.', id: 'VI'},
    {text: 'Wallis and Futuna', id: 'WF'},
    {text: 'Western Sahara', id: 'EH'},
    {text: 'Yemen', id: 'YE'},
    {text: 'Zambia', id: 'ZM'},
    {text: 'Zimbabwe', id: 'ZW'}
  ]
  $(".select2_dropdown").select2({
    data: data,
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
