Accounts = new Mongo.Collection('accounts');

Accounts.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); },
});

Meteor.methods({

  // create account
  accountInsert: function(attributes) {
    // validate fields type
    check(Meteor.userId(), String);
    check(attributes, {
      bank: String,
      name: String
    });

    // adding user id
    var user = Meteor.user();
    var account = _.extend(attributes, {
      userId: user._id
    });

    // create account in database
    var accountId = Accounts.insert(account);

    return {
      _id: accountId
    };
  }
});
