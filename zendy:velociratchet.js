// Namespace for package
Velociratchet = {};
Velociratchet.events = {
    'click': function () {
        Velociratchet.transition = null;
    },
    'click .icon-right-nav': function () {
        Session.set('previousPage', Router.current().route.getName());
        Velociratchet.transition = 'right-to-left';
    },
    'click .navigate-right': function () {
        Session.set('previousPage', Router.current().route.getName());
        Velociratchet.transition = 'right-to-left';
    },
    'click .icon-left-nav': function () {
        Session.set('previousPage', Router.current().route.getName());
        Velociratchet.transition = 'left-to-right';
    },
    'click .navigate-left': function () {
        Session.set('previousPage', Router.current().route.getName());
        Velociratchet.transition = 'left-to-right';
    }

};

Velociratchet.helpers = {
    transition: function () {
        return function (from, to, element) {
            return Velociratchet.transition || 'fade';
        }
    }
};

if( Meteor.isClient ) {

    UI.registerHelper('getPreviousPage', function () {
        return Session.get('previousPage');
    });
    UI.registerHelper('isActive', function (args) {
        return args.hash.menu === args.hash.active ? 'active' : '';
    });
    UI.registerHelper('getCurrentRoute', function () {
        return Router.current().route.getName();
    });

}