Package.describe({
  name: 'khanghoang:oauth2-provider',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('khanghoang:oauth2-provider.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('khanghoang:oauth2-provider');
  api.addFiles('khanghoang:oauth2-provider-tests.js');
});
