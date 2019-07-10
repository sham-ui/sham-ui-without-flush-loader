const webpack = require( 'webpack' );

const plugins = [
    new webpack.NoEmitOnErrorsPlugin()
];

module.exports = {
    entry: {
        index: './src/without-flush-loader.sfc'
    },
    output: {
        path: __dirname,
        filename: '[name].js',
        publicPath: '/',
        library: [ 'sham-ui-without-flush-loader', 'sham-ui-without-flush-loader/[name]' ],
        libraryTarget: 'commonjs2'
    },
    externals: [
        'sham-ui',
        'sham-ui-dynamic-component'
    ],
    plugins: plugins,
    module: {
        rules: [ {
            test: /(\.js)$/,
            loader: 'babel-loader',
            exclude: /(node_modules)/,
            include: __dirname
        }, {
            test: /\.sht/,
            loader: 'sham-ui-templates-loader?{}'
        }, {
            test: /\.sfc$/,
            use: [
                { loader: 'babel-loader' },
                {
                    loader: 'sham-ui-templates-loader?hot',
                    options: {
                        asModule: false,
                        asSingleFileComponent: true
                    }
                }
            ]
        } ]
    }
};
