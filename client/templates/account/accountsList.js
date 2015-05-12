
// return all the rows of the database
var accountsData = function() {
    return Accounts.find();
};

// and send data to the template named : accountRowsList
Template.accountsList.helpers({
    accounts: accountsData
});
