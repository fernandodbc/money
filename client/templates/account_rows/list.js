
// return all the rows of the database
var accountRowsData = function() {
    var user = Meteor.user();
    return AccountRows.find({userId: user._id}, {sort: {time:-1}});
};

// and send data to the template named : accountRowsList
Template.accountRowsList.helpers({
    accountRows: accountRowsData
});

// create an account row
Template.accountRowsList.events({
    'click .add-row': function(e) {
        e.preventDefault();
        var newRow = $('#new-row').clone(true);
        newRow.removeProp('id').show();
        $('#new-row').after(newRow.addClass('account-row'));
    },

    'click .edit-row': function(e) {
        e.preventDefault();
        var inputs = $(e.target).parents('tr').find('input');
        var accountRow = {};

        inputs.each(function(index) {
          accountRow[$(this).prop('name')] = $(this).val();
        });

        // update
        if (typeof accountRow['_id'] != 'undefined') {

        // insert
        } else {
          Meteor.call('accountRowInsert', accountRow, function(error, result) {
            if (error) {
              alert(error.reason);
            } else {
              alert('ligne enregistrée');
            }
          });
        }
    }
});
