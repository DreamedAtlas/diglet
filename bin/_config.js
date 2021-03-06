'use strict';

const config = require('rc')('diglet', {
  Hostname: 'diglet.me',
  ProxyPort: 443,
  RedirectPort: 80,
  TunnelPort: 8443,
  ServerPrivateKey: '',
  ServerSSLCertificate: '',
  Whitelist: false
});

module.exports = config;
