const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// configuração do webpack
module.exports = {
    entry: './src/index.jsx', // ponto de entrada da aplicação
    output: {
        path: __dirname + '/public', // saida
        filename: './app.js' // nome do arquivo de saida
    },
    devServer: {
        port: 8080, // porta de siada
        contentBase: './public', // pasta que será lida
    },
    resolve: {
        extensions: ['', '.js', '.jsx'], // extensoes que precisamos interpretar
        alias: {
            modules: __dirname + '/node_modules',
            jquery: 'modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',
            bootstrap: 'modules/admin-lte/bootstrap/js/bootstrap.js'
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new ExtractTextPlugin('app.css')
    ],
    module: {
        loaders: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
            loader: 'file'
        }]
    }
}