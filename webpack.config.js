var webpack = require('webpack'),
    path = require('path');
//

const APP = path.join(__dirname, '/src/app'),
    BUILD = path.join(__dirname, '/build'),
    NODE_MODULES = path.join(__dirname, '/node_modules');

var config = {
    context: APP,
    resolveLoader: {
        root: NODE_MODULES
    },
    entry: {
        app: ['./js/core/bootstrap.js'],
        vendor: [
            'angular',
            'angular-ui-router',
            'moment',
            "fullcalendar",
            "lodash",
            "moment",
            "oclazyload",
            'fullcalendar',
            'bootstrap-webpack',
            'font-awesome-webpack',
            './styles/custom.css',
            './styles/maps/jquery-jvectormap-2.0.3.css',
            './styles/icheck/flat/green.css',
            './styles/floatexamples.css',
            './styles/animate.css',
            './styles/calendar/fullcalendar.css',
            './styles/calendar/fullcalendar.print.css'
        ]
    },
    output: {
        path: BUILD,
        filename: 'app.bundle.js',
        chunkFilename: "[name].bundle.js"
    },
    module: {
        preLoaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'jshint-loader',
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'jscs-loader'
        }],
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'ng-annotate!babel'
        }, {
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.html$/,
            loader: 'html'
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass'
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/font-woff&name=./fonts/[name].[ext]'
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/octet-stream&name=./fonts/[name].[ext]'
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file?name=./fonts/[name].[ext]'
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=image/svg+xml&name=./images/[name].[ext]'
        }, {
            test: /\.(jpe?g|png|gif)$/i,
            loader: 'file?hash=sha512&digest=hex&name=./images/[name].[ext]'
        }],
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor.bundle.js",
            minChunks: Infinity
        })
    ],
    jshint: {
        node: true,
        globals: {
          alert: false
        }
    }
}

module.exports = config;
