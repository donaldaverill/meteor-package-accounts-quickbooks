if (Meteor.isServer) {
  Tinytest.add('Accounts.quickbooks - defined on server', (test) => {
    test.notEqual(Accounts.quickbooks, undefined, 'Expected ' +
      'Accounts.quickbooks to be defined on the server.');
  });
}

if (Meteor.isClient) {
  Tinytest.add('Accounts.quickbooks - defined on client', (test) => {
    test.notEqual(Accounts.quickbooks, undefined, 'Expected ' +
      'Accounts.quickbooks to be defined on the client.');
  });
}
