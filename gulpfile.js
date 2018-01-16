var gulp = require('gulp'),
	merge_streams = require('merge-stream'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	livereload = require('gulp-livereload'),
	filter = require('gulp-filter');

/**
 * Copy assets to dedicated directories inside nws_template
 */
gulp.task('install-assets', function () {
	// Bootstrap SCSS files
	var sass = gulp
		.src([
				'node_modules/bootstrap-sass/assets/stylesheets/**/*.scss',
				'!node_modules/bootstrap-sass/assets/stylesheets/_bootstrap-*.scss'
			],
			{base: 'node_modules/bootstrap-sass/assets/stylesheets/'})
		.pipe(gulp.dest('Sass/vendor'));

	// Bootstrap Fonts
	var fonts = gulp.src(
		'node_modules/bootstrap-sass/assets/fonts/**/*',
		{base: 'node_modules/bootstrap-sass/assets/fonts'})
		.pipe(gulp.dest('web/assets/Fonts/vendor'));

	// JavaScripts
	var js = gulp.src([
		'node_modules/jquery/dist/jquery.js',
		'node_modules/bootstrap-sass/assets/javascripts/bootstrap.js',
		'node_modules/enquire.js/dist/enquire.min.js'
	]).pipe(gulp.dest('web/assets/Javascripts/vendor'));

	return merge_streams(sass, fonts, js);
});

/**
 * Sass compilation for development
 *
 * Will compile sass into css with sourcemaps and livereload
 *
 * @link https://github.com/dlmanning/gulp-sass
 * @link https://github.com/floridoo/gulp-sourcemaps
 * @link https://github.com/vohof/gulp-livereload
 */
gulp.task('sass:dev', function () {
	return gulp.src('Sass/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(
			sass({
				outputStyle: 'expanded',
				precision: 8,
				indentType: 'tab',
				indentWidth: 1
			}).on('error', sass.logError)
		)
		.pipe(sourcemaps.write('sourcemaps'))
		.pipe(gulp.dest('web/assets/Stylesheets'))
		// make sure livereload will only reload the css and not the entire page when passing .map files in
		.pipe(filter('**/*.css'))
		.pipe(livereload());
});

/**
 * Common development task (default)
 *
 * This will run sass:dev before watching the sass files for changes
 *
 * @link https://github.com/vohof/gulp-livereload
 */
gulp.task('dev', ['sass:dev'], function () {
	livereload.listen();
	gulp.watch('Sass/**/*.scss', ['sass:dev']);
	gulp.watch([
		'web/**/*.html',
		'web/**/*.php',
		'web/assets/Javascripts/**/*',
		'web/assets/Images/**/*'
	], function (event) {
		livereload.changed(event.path);
	});
});

gulp.task('setup', ['install-assets', 'sass:dev']);
gulp.task('default', ['dev']);
