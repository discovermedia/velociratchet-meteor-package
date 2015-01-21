// Namespace for package
Velociratchet = {};

// Events for layout template
// Add the following to your Meteor app:
// Template.myLayoutTemplateName.events(Velociratchet.events);
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
    },
    'click .toggle': function( event ){
        var toggle = $(event.target);
        if( toggle.hasClass( 'active' ) ){
            toggle.removeClass( 'active' );
        }else{
            toggle.addClass( 'active' );
        }
    },
    'click .toggle-handle': function( event ){
        var toggle = $(event.target).parent();
        if( toggle.hasClass( 'active' ) ){
            toggle.removeClass( 'active' );
        }else{
            toggle.addClass( 'active' );
        }
    }

};

// Helpers for layout template
// Add the following to your Meteor app:
// Template.myLayoutTemplateName.helpers(Velociratchet.helpers);
Velociratchet.helpers = {
    transition: function () {
        return function (from, to, element) {
            return Velociratchet.transition || 'fade';
        }
    }
};

// Spacebar helpers
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
