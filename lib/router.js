// defining the name of the layout template
Router.configure({
    layoutTemplate: 'layout'
});

// defining routes
Router.route('/', {name: 'accountRowsList'});