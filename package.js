Package.describe({
    name: 'zendy:velociratchet',
    summary: 'Ratchet UI with native-looking page transitions for Meteor mobile apps.',
    version: '1.2',
    git: 'https://github.com/zendylabs/velociratchet-meteor-package.git'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0.2.1');
    api.use(['iron:router','percolate:momentum-iron-router', 'percolate:momentum', 'spacebars', 'templating'], 'client');
    api.addFiles('zendy-velociratchet.js');
    api.addFiles('css/ratchet.css','client');
    api.addFiles('fonts/ratchicons.eot','client');
    api.addFiles('fonts/ratchicons.svg','client');
    api.addFiles('fonts/ratchicons.ttf','client');
    api.addFiles('fonts/ratchicons.woff','client');
    api.export('Velociratchet')
});

Package.onTest(function(api) {
    api.use('tinytest');
    api.use('zendy:velociratchet');
});

