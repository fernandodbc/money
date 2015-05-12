// We want to receive on the client de accountRows publication for the 'Compte Courant Boursorama account
Meteor.subscribe('accountRows');
Meteor.subscribe('accounts');

Meteor.startup(function(){
  Tracker.autorun(function(){
    console.log(Accounts.find().count() + ' accounts');
  });
});
