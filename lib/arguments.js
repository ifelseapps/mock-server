const { ArgumentParser } = require('argparse');
const package = require('../package.json');

const argParser = new ArgumentParser();
argParser.add_argument('-v', '--version', { action: 'version', version: package.version });
argParser.add_argument('-c', '--code', { help: 'Response code' });
argParser.add_argument('-b', '--body', { help: 'Response body' });
argParser.add_argument('-p', '--path', { help: 'Path' });
argParser.add_argument('-j', '--json', { help: 'Json file' });

module.exports.getArguments = () => argParser.parse_args();
