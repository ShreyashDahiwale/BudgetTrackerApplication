import fs from 'fs';
import path from 'path';
let _config = null;
let configBuffer = null;


export default function createConfig (callback) {
  configBuffer = fs.readFileSync(path.resolve(__dirname, 'data', 'config.json'), 'utf-8');
  if (!configBuffer) {
    console.log(constants.FILE404);
    process.exit(1);
  }
  else {
        _config = JSON.parse(configBuffer);
        global.gConfig = _config;
        callback(null);
  }
}