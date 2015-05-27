AccountRows = new Mongo.Collection('accountRows');

Meteor.methods({

  // create account row
  accountRowInsert: function(attributes) {
    // validate fields type
    check(Meteor.userId(), String);
    check(attributes, {
      time: String,
      title: String,
      value: String,
      tags: String
    });

    // adding user id
    var user = Meteor.user();
    var accountRow = _.extend(attributes, {
      userId: user._id
    });

    // create account row in database
    var accountRowId = AccountRows.insert(accountRow);

    return {
      _id: accountRowId
    };
  }
});
