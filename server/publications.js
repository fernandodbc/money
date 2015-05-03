// Defining what we want to publish to the client

Meteor.publish('accountRows', function(account) {
    return AccountRows.find({account: account});
});