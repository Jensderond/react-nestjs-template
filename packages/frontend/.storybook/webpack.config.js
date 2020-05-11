const configureWebpack = require('../config/webpack');

module.exports = ({ config, mode }) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        loader: require.resolve('babel-loader'),
    });
    config.resolve.extensions.push('.ts', '.tsx');

    configureWebpack(config);

    return config;
};
