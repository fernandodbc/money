// create an account
Template.accountNew.events({
    'submit form': function(e) {
        e.preventDefault();

        var account = {
          "bank": $(e.target).find('[name=bank]').val(),
          "name": $(e.target).find('[name=name]').val()
        };

        Meteor.call('accountInsert', account, function(error, result){
          if (error) {
            alert(error.reason);
          }
          Router.go('accountList');
        });
    }
});
