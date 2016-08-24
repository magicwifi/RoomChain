var mqtt    = Npm.require('mqtt');
var client  = mqtt.connect('mqtt://42.123.86.187');


Meteor.methods({
  new_cargo: function(owner_data, cargo_data) {
    return cargo.insert({owner: owner_data, cargo: cargo_data});
  },
  paid: function(cargo_id) {
    cargo.update({_id: cargo_id}, {$set: {'cargo.status': true}});
    return cargo.update({_id: cargo_id}, {$set: {'cargo.paid': true}})
  }, 
  refund: function(cargo_id) {
    return cargo.update({_id: cargo_id}, {$set: {'cargo.status': false}});
  },
  lock: function(){
   client.publish('lock', 'augustctl lock');
  }, 
  unlock: function(){
   client.publish('lock', 'augustctl unlock');
  }
})
