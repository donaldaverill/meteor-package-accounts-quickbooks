Package.describe({
  summary: 'Login service for Quickbooks accounts',
  version: '1.0.1',
  summary: 'Login Services for Quickbooks',
  name: 'fourquet:accounts-quickbooks',
  git: 'https://github.com/fourquet/meteor-package-accounts-quickbooks.git',
  documentation: 'README.md',
  licensse: 'LICENSE',
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.use('underscore', [
    'server',
  ]);
  api.use([
    'ecmascript@0.1.6',
    'accounts-base',
  ], [
    'client',
    'server',
  ]);
  api.imply('accounts-base', [
    'client',
    'server',
  ]);
  api.use('accounts-oauth', [
    'client',
    'server',
  ]);
  api.use('fourquet:quickbooks', [
    'client',
    'server',
  ]);
  api.use('http', [
    'client',
    'server',
  ]);

  api.addFiles('accounts-quickbooks.js');
});

Package.onTest(function(api) {
  api.use([
    'ecmascript@0.1.6',
  ], [
    'client',
    'server',
  ]);
  api.use('tinytest', [
    'client',
    'server',
  ]);
  api.use('fourquet:accounts-quickbooks', [
    'client',
    'server',
  ]);
  api.addFiles('accounts-quickbooks-tests.js', [
    'client',
    'server',
  ]);
});
