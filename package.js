Package.describe({
  name: 'zendy:velociratchet',
  summary: 'Velociratchet is a Meteor mobile app prototyping tool built on Ratchet, Velocity, Momentum, and Iron Router.',
  version: '1.0.0',
  git: 'https://github.com/zendylabs/velociratchet-meteor-package.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.use(['iron:router', 'axw:ratchet', 'percolate:momentum-iron-router', 'spacebars', 'templating'], 'client');
  api.addFiles('zendy:velociratchet.js');
  api.export('Velociratchet')
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('zendy:velociratchet');
  api.addFiles('zendy:velociratchet-tests.js');
});

