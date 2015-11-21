var gulp = require('gulp');
var webpack = require('webpack');
var config = require('../../webpack.config');
var gutil = require('gulp-util');
var ProgressBar = require('progress');

gulp.task('dev-assets', function (callback) {
	//Webpack development configuration
	var myDevConfig = Object.create(config);
	myDevConfig.output.filename = '[name].bundle.js';
	myDevConfig.debug = true;
	myDevConfig.devtool = 'inline-source-map';
	myDevConfig.plugins = [
      new webpack.ProgressPlugin(function (percentage) {
      	var bar = new ProgressBar('Compiling |:bar| :percent', {
      		complete: '\u001b[42m \u001b[0m',
      		incomplete: ' ',
      		width: 100,
      		total: 100
      	});
      	var value = percentage * 100;
      	bar.tick(value);
      })
	];
	// Run webpack
	webpack(myDevConfig, function (err, stats) {
		//Log webpack errors to the console
		if (err) {
			throw new gutil.PluginError("Error:", err);
			gutil.log("[Stats:]", stats.toString({
				colors: true
			}));
		}
		callback();
	});
});
