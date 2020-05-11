const path = require('path');

module.exports = function configureWebpack(config) {
    // Resolve modules from the `./src` directory to make imports compatible with the paths configuration in tsconfig.json
    config.resolve.modules.push(path.resolve(__dirname, '../src'));
};
