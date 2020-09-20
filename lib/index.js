const { getArguments } = require('./arguments');
const server = require('./server');
const config = require('./config');
const { code, body, path, json, timeout } = getArguments();

const _server = server.init({ code, body, json, path, timeout });
_server.listen(config.port, () => console.log(`Start server on port: ${config.port}`));
