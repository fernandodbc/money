
// return all the rows of the database
var accountRowsData = function() {
    return AccountRows.find();
};

// and send data to the template named : accountRowsList
Template.accountRowsList.helpers({
    accountRows: accountRowsData,
    bank: { 
        name : "Boursorama",
        account: {
            number : "02343534534",
            name : "Livret A"
        }
    }
});