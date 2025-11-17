const functions = require('firebase-functions');
const { handler } = require('./build/handler.js');

exports.ssr = functions.https.onRequest(handler);
