const { getArguments } = require('./arguments');
const server = require('./server');
const config = require('./config');
const { code, body, path, json } = getArguments();

const _server = server.init(code, body, json, path);
_server.listen(config.port, () => console.log(`Start server on port: ${config.port}`));
