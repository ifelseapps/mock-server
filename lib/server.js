const express = require('express');
const fs = require('fs');
const { resolve } = require('path');

module.exports.init = function ({ code = 200, body, json: jsonPath, path = '/', timeout = 0 }) {
  const server = express();
  server.use(path, onRequest)
  function onRequest(req, res) {
    setTimeout(() => {
      console.log(`URL=${req.url}`);
      res.setHeader('Content-Type', 'application/json');

      if (!jsonPath) {
        res.status(code).end(JSON.stringify(JSON.parse(body)));
        return;
      }

      res.status(code);
      fs.createReadStream(resolve(jsonPath)).pipe(res);
    }, timeout);
  }

  return server;
};
