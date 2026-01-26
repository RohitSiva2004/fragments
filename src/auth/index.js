// src/auth/index.js

// Choose which auth method to use based on environment variables
// Can't use both at the same time

if (
  process.env.AWS_COGNITO_POOL_ID &&
  process.env.AWS_COGNITO_CLIENT_ID &&
  process.env.HTPASSWD_FILE
) {
  throw new Error(
    'env contains configuration for both AWS Cognito and HTTP Basic Auth. Only one is allowed.'
  );
}

// Use Cognito if those env vars are set (for production)
if (process.env.AWS_COGNITO_POOL_ID && process.env.AWS_COGNITO_CLIENT_ID) {
  module.exports = require('./cognito');
}
// Use Basic Auth if HTPASSWD_FILE is set and not in production (for testing)
else if (process.env.HTPASSWD_FILE && process.env.NODE_ENV !== 'production') {
  module.exports = require('./basic-auth');
}
// No auth config found
else {
  throw new Error('missing env vars: no authorization configuration found');
}
