var gulp = require('gulp');
var webpack = require('webpack');
var config = require('../../webpack.config');
var gutil = require('gulp-util');

gulp.task('dev-assets', function (callback) {
	//Webpack development configuration
	var myDevConfig = Object.create(config);
	myDevConfig.output.filename = '[name].bundle.js';
	myDevConfig.debug = true;
	myDevConfig.devtool = 'inline-source-map';
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
