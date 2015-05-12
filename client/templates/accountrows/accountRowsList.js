
// return all the rows of the database
var accountRowsData = function() {
    return AccountRows.find();
};

// and send data to the template named : accountRowsList
Template.accountRowsList.helpers({
    accountRows: accountRowsData
});

// create an account row
Template.accountRowsList.events({
    'click .submit-row': function(e) {
        e.preventDefault();
        inputs = $(e.target).parents('tr').find('input');

        var accountRow = {};

        inputs.each(function(index) {
          accountRow[$(this).prop('name')] = $(this).val();
        });

        // update
        if (typeof accountRow['_id'] != 'undefined') {

        // insert
        } else {
          AccountRows.insert(accountRow);
        }

        Router.go('accountRowsList', accountRow);
    }
});
