const { name } = require('./package.json');
module.exports = {
    webpack: config => {
        config.output.library = `${name}-[name]`;
        config.output.libraryTarget = 'umd';
        config.output.jsonpFunction = `webpackJsonp_${name}`;
        config.output.globalObject = 'window';
        config.output.publicPath = 'http://localhost:2000/';
        return config;
    },
    devServer: configFunction => {
        return function (proxy, allowedHost) {
            const config = configFunction(proxy, allowedHost);
            config.headers = {
                'Access-Control-Allow-Origin' : '*'
            }
            config.historyApiFallback = true;
            config.hot = false;
            config.watchContentBase = false;
            config.liveReload = false;
            return config;
        }

    }
}