var accountRowsData = function() {
    return AccountRows.find();
};

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