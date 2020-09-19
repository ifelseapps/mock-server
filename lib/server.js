const express = require('express');
const fs = require('fs');
const { resolve } = require('path');

module.exports.init = function (code, body, jsonPath, path = '/') {
  const server = express();
  server.use(path, onRequest)
  function onRequest(req, res) {
    console.log(`URL=${req.url}`)
    res.setHeader('Content-Type', 'application/json');

    if (!jsonPath) {
      res.status(code).end(JSON.stringify(JSON.parse(body)));
      return;
    }

    res.status(code);
    fs.createReadStream(resolve(__dirname, '../', jsonPath)).pipe(res);
  }

  return server;
};
