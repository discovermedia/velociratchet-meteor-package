Package.describe({
  name: 'zendy:velociratchet',
  summary: 'Ratchet UI with native-looking page transitions for Meteor mobile apps.',
  version: '1.1.0',
  git: 'https://github.com/zendylabs/velociratchet-meteor-package.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.use(['iron:router@1.0.6', 'axw:ratchet@0.1.2', 'percolate:momentum-iron-router@0.7.0', 'spacebars', 'templating'], 'client');
  api.addFiles('zendy-velociratchet.js');
  api.export('Velociratchet')
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('zendy:velociratchet');
  api.addFiles('zendy-velociratchet-tests.js');
});

