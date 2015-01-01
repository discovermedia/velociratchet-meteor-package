Package.describe({
  name: 'zendy:velociratchet',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
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

