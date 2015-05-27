// return all the rows of the database
var accountListData = function() {
    var user = Meteor.user();
    return Accounts.find({userId: user._id}, {sort: {bank:1, name:1}});
};

// and send data to the template named : accountRowsList
Template.accountList.helpers({
    accounts: accountListData
});
