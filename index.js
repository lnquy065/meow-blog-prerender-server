const express = require('express');
const secure = require('express-force-https');
const prerender = require('prerender-node');

// Load from env vars
const port = process.env.PORT || 3000;
const indexHtml = process.env.INDEX_HTML || "index.html";
const prerenderToken = process.env.PRERENDER_TOKEN || "OYGKlItadAWI1LuHMUAa";

const app = express();

// Use secure middleware to redurect to https
app.use(secure);

// Use prerender io middleware
app.use(prerender.set('prerenderToken', prerenderToken));

// Serve index.html on every url.
app.get('*', (req, res) => {
  res.send(indexHtml);
});

app.listen(port);