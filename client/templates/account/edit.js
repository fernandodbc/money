// create an account
Template.accountEdit.events({
    'submit form': function(e) {
        e.preventDefault();

        var currentAccountId = this._id;

        var account = {
          "bank": $(e.target).find('[name=bank]').val(),
          "name": $(e.target).find('[name=name]').val()
        }

        Accounts.update(currentAccountId, {$set: account}, function(error) {
          if (error) {
            // affiche l'erreur à l'utilisateur
            alert(error.reason);
          } else {
            Router.go('accountList');
          }
        });
    },
  'click .delete': function(e) {
    e.preventDefault();
    if (confirm("Supprimer ce compte ?")) {
      var currentAccountId = this._id;
      console.log(currentAccountId);
      Accounts.remove(currentAccountId);
      Router.go('accountList');
    }
  }
});
