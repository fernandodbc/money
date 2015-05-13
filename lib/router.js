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

Router.route('/account', {
  name: 'accountsList'
});

Router.route('/account/new-edit', {
    name: 'accountNewEdit'
});

Router.route('/account-row/:_id', {
    name: 'accountRowsList',
    //data: function(){ return Accounts.findByOne(this.params._id); }
});

Router.route('/account-row/new-edit', {
    name: 'accountRowNewEdit'
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
    'accountsList',
    'accountNewEdit',
    'accountRowsList',
    'accountRowNewEdit'
  ]
});
