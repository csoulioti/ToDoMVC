var path = require('path');
var aliases = require('./ToDoList/aliases');

module.exports = {
    context: path.join(__dirname, 'Scripts', 'build'),
    entry: {
        // These are the entry points for the individual bundles that will be created
        // The result is one bundle per entry point
        // The final bundle tries to resolve all dependencies by starting from the root object returned by the resolved object in the referenced file
        server: ['./server'],
        client: './client'
    },
    output: {
        path: path.join(__dirname, 'Scripts', 'build'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
          // Transform JSX in .jsx files
          {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              loader: 'babel-loader'
          }
        ],
    },
    resolve: {
        // Declares the root folder used for aliases
        root: path.resolve(__dirname, './ToDoList'),
        alias: aliases,
        // Allow require('./blah') to require blah.jsx
        extensions: ['', '.js', '.jsx']
    },
    externals: {
        // Use external version of React (from CDN for client-side, or bundled with ReactJS.NET for server-side)
        // react: 'React',
        jquery: 'jQuery'
    }
};
