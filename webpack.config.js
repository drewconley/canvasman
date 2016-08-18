module.exports = {
    entry: "./src/app.js",
    output: {
        path: __dirname+'/www/bundles',
        filename: "bundle.js"
    },
    module: {
        loaders: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules)/,
                    loader: 'babel?presets[]=es2015'
                }
        ]
    }
};