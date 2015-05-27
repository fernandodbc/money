// defining the name of the layout template
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});

// defining routes
Router.route('/', {
  name: 'home'
});

Router.route('/accounts', {
  name: 'accountList'
});

Router.route('/account/new', {
    name: 'accountNew'
});

Router.route('/account/:_id/edit', {
  name: 'accountEdit',
  data: function() { return Accounts.findOne(this.params._id); }
  }
);

Router.route('/account/:_id/rows', {
    name: 'accountRowsList',
    data: function(){ return AccountRows.find({"accountId" : this.params._id}); }
});

// protect routes for logged in user only
var requireLogin = function() {
  if (!Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}

// list of protected routes
Router.onBeforeAction(requireLogin, {
  only: [
    'accountList',
    'accountNewEdit',
    'accountRowsList'
  ]
});
