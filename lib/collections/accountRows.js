AccountRows = new Mongo.Collection('accountRows');

// allowing to insert accounts rows
AccountRows.allow({
  insert: function(userId, doc) {
    // only logged in users
    return !! userId;
  }
});
