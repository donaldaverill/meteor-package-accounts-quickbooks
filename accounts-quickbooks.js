if (!Accounts.quickbooks) {
  Accounts.quickbooks = {};
}

Accounts.oauth.registerService('quickbooks');

if (Meteor.isClient) {
  Meteor.loginWithQuickbooks = function(opts, cb) {
    let callback;
    let options;
    if (!cb && typeof opts === 'function') {
      callback = opts;
      options = null;
    } else {
      callback = cb;
      options = opts;
    }
    const credentialRequestCompleteCallback =
      Accounts.oauth.credentialRequestCompleteHandler(callback);
    QuickBooks.requestCredential(options, credentialRequestCompleteCallback);
  };
}
