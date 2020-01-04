const functions = require('firebase-functions');

exports.bigben = functions.https.onRequest((req, res) => {
    const hours = (new Date().getHours() % 12);
    res.status(200).send(`<!doctype html>
    <head>
      <title>Time</title>
    </head>
    <body>
      ${hours}
    </body>
  </html>`);
});