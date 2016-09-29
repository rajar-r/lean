

basic webpack config
------------------------------------------------------------------

module.exports = {
    devtool:'source-map',
    entry: {
        main: [
            //'./script1.js',
            //'./script2.js'
            './src/main.js'
        ]
    },
    output: {
        filename:'./public/[name].js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader:'babel'
            }
        ]
    }

}

------------------------------------------------------------------