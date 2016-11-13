var webpack = require('webpack');
var path = require('path');

module.exports = {

	entry: [
    './src/index'
   ],
   resolve: {
    extensions: ['', '.js']
   },
	output: {
		path: path.join(__dirname, '/dist'),
      publicPath: '/',
      filename: 'bundle.js',
	},
	module: {
		loaders: [
		{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
				
            query: {
               presets: ['es2015', 'react']
            }
         },
         { 
         	test: /\.css$/, 
         	loader: "style-loader!css-loader" 
         }
		]
	}

}
console.log('det her er config');
