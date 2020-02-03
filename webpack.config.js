var path = require("path");
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {

    mode: "production", // development
    entry: [
        "../Day16/src/Class/classDemo.js",
        "../Day16/src/Class/main.js"

    ],
    output: {
        publicPath: "./dist/",
        path: path.join(__dirname, "./dist/"),
        //filename: "[name].build.js",
        filename: "build.js",
        library: 'appGlobal'
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: "ts-loader" },
            //{test:/\.css?$/,loaders: ['style-loader', 'css-loader']}
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                            publicPath: '../ES6/dist/',
                            hmr: process.env.NODE_ENV === 'development'
                            //minimize:true
                        },
                    },
                    'css-loader',
                ]
            }
        ]
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
        new OptimizeCSSAssetsPlugin({})
    ]
};
