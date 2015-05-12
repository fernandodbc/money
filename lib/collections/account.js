Accounts = new Mongo.Collection('accounts');

// allowing to insert accounts
Accounts.allow({
  insert: function(userId, doc) {
    // only logged in users
    return !! userId;
  }
});
