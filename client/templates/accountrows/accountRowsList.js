var accountRowsData = [
    {
        title: 'Introducing Telescope',
        url: 'http://sachagreif.com/introducing-telescope/'
    },
    {
        title: 'Meteor',
        url: 'http://meteor.com'
    },
    {
        title: 'The Meteor Book',
        url: 'http://themeteorbook.com'
    }
];

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