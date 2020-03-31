const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const babel  = require('gulp-babel');

gulp.task('styles', ()=> {
	return gulp.src('scss/**/*.scss')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(concat('styles.min.css'))
		.pipe(gulp.dest('.'))
});

gulp.task('scripts', ()=> {
	function createErrorHandler(name) {
		return function (err) {
			console.error('Error from ' + name + ' in scripts task', err.toString());
		};
	}
	return gulp.src(['js/*.js'])
		.pipe(babel({presets: ['env']}))
		.on('error', createErrorHandler('babel'))
		.pipe(uglify())
		.on('error', createErrorHandler('uglify'))
		.pipe(concat('scripts.min.js'))
		.on('error', createErrorHandler('concat'))
		.pipe(gulp.dest('.'));
});

gulp.task('watch', ()=> {
	gulp.watch('scss/**/*.scss', ['styles']);
	gulp.watch('js/**/*.js', ['scripts']);
});

gulp.task('default', ['watch', 'scripts', 'styles']);
