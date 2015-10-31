var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	compass     = require('gulp-compass'),
	plumber     = require('gulp-plumber'),
	jade        = require('gulp-jade');


var
	paths = {
		jade : {
			location    : 'app/markups/**/*.jade',
			compiled    : 'app/markups/_pages/*.jade',
			destination : 'app/.'
		},

		scss : {
			location    : 'app/styles/**/*.scss',
			entryPoint  : 'app/css/main.css'
		},

		compass : {
			configFile  : 'config.rb',
			cssFolder   : 'app/css',
			scssFolder  : 'app/styles',
			imgFolder   : 'app/img'
		},

		browserSync : {
			baseDir : './',
			watchPaths : ['*.html', 'css/*.css', 'js/*.js']
		}
	}

	/* --------- jade --------- */

gulp.task('jade', function() {
	gulp.src(paths.jade.compiled)
		.pipe(plumber())
		.pipe(jade({
			pretty: '\t',
		}))
		.pipe(gulp.dest(paths.jade.destination));
});

/* --------- scss-compass --------- */

gulp.task('compass', function() {
	gulp.src(paths.scss.location)
		.pipe(plumber())
		.pipe(compass({
			config_file: paths.compass.configFile,
			css: paths.compass.cssFolder,
			sass: paths.compass.scssFolder,
			image: paths.compass.imgFolder
		}));
});



gulp.task('server', function() {
  browserSync({
  	port:9000,
  	server:{
  		baseDir:"app"
  	}
  });
});


gulp.task('watch',function () {
	gulp.watch(paths.jade.location, ['jade']);
	gulp.watch(paths.scss.location, ['compass']);
	gulp.watch([
		'app/*.html',
		'app/js/*.js',
		'app/css/**/*.css'
		]).on('change',browserSync.reload);
});


gulp.task('default',['jade','compass','server','watch']);
