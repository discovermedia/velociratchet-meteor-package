Package.describe({
  name: 'chasemb:velociratchet',
  summary: 'Ratchet UI with native-looking page transitions for Meteor mobile apps.',
  version: '2.0.0',
  git: 'https://github.com/zendylabs/velociratchet-meteor-package.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.use(['iron:router@1.0.7', 'percolate:momentum-iron-router@0.7.0', 'percolate:momentum@0.7.2', 'spacebars', 'templating'], 'client');
  api.addFiles('zendy-velociratchet.js');
  api.export('Velociratchet');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('zendy:velociratchet');
});
