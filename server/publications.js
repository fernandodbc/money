// Defining what we want to publish to the client

Meteor.publish('accountRows', function() {
    return AccountRows.find();
});

Meteor.publish('accounts', function() {
    return Accounts.find();
});
