//Using node's native package 'path'
//the path package is able to combine file path's
//https://nodejs.org/api/path.html
const path = require('path');

//Import html-webpack-plugin after npm install html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// const json = require('./file.json');

//constant with our paths
//note, this paths object is vanilla javascript and does not
//have to do with webpack or node. The only part that uses node
//is the paths module and paths.resolve function
const paths = {
    //path.resolve takes any number of paths and puts them
    //together to create an absolute path.
    DIST: path.resolve(__dirname, 'dist'),
    SRC: path.resolve(__dirname, 'src'),
    JS: path.resolve(__dirname, 'src/js'),
};

//Webpack configuration and the start of webpack stuff
module.exports = {
    entry: path.join(paths.JS, 'app.js'),
    output: {
        path: paths.DIST,
        filename: 'app.bundle.js'
    },


    //TEll webpack to use html plugin
    //index.html is used as a template in which it'll inject bundled app
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(paths.SRC, 'index.html'),
        }),
        new ExtractTextPlugin('style.bundle.css'), //css will be extracted to this bundle file
    ],

    //Loaders configuration
    //telling webpack to use 'babel-loader' for .js and .jsx files
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, //regex to find js or jsx files
                exclude: /node_modules/, //don't worry about files in node_modules
                use: [
                    'babel-loader', //if any files match regex use babel-loader
                ],
            },
            {
                //Files will get handled by css loader and then passed to the
                //extract text plugin which will write it to the file we 
                //defined above
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    use: 'css-loader',
                }),
            },
            {
                test: /\.scss$/,
                loaders: ExtractTextPlugin.extract({
                  use: ['css-loader', 'sass-loader']
                }),
            },
            {
                test:/\.(png|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
        ],
    },

    //Enabling importing JS files without specifying their extensions
    //This let's us write:
    //import MyComponent from './my-component';
    //
    //Instead of:
    //import MyComponent from './my-component.jsx';
    resolve:{
        extensions: ['.js', '.jsx'],
    },

    //Dev server configuration
    //Now is uses our "src" folder as the starting point
    //Removed now that we are using html-webpack-plugin
    // devServer:{
    //     contentBase: paths.SRC,
    // },
};