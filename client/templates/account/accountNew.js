// create an account
Template.accountNewEdit.events({
    'submit form': function(e) {
        e.preventDefault();

        var account = {
          "bank": $(e.target).find('[name=bank]').val(),
          "name": $(e.target).find('[name=name]').val()
        };

        account._id = Accounts.insert(account);
        Router.go('accountsList', account);
    }
});
