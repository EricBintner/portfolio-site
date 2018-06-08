var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var hbsAll = require('gulp-handlebars-all');
var handlebars = require('handlebars');
var rename = require('gulp-rename');
//var waypoints = require('waypoints');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require("gulp-uglify");
//var path = require('path');
//var autoprefixer = require('gulp-autoprefixer');
//var htmlmin = require('gulp-html-minifier');
//const imagemin = require('gulp-imagemin');
//var reporter = require('gulp-less-reporter');

var webserver   = require('gulp-webserver');
var watch = require('gulp-watch');


//handlebars.registerPartial('header',   '{{header}}'),
//handlebars.registerPartial('details',  '{{details}}'),
//handlebars.registerPartial('info',     '{{info}}'),
//handlebars.registerPartial('prefooter','{{prefooter}}'),
//handlebars.registerPartial('footer',   '{{footer}}')


gulp.task('default', function () {

    options = {
        partialsDirectory : ['./templates/partials/**']
    }

    return gulp.src('templates/index.hbs')
        .pipe(gulpHandlebars( options))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('../'));
});

gulp.task('hbsToHTML', function() {
   gulp.src('templates/*.hbs')
  .pipe(hbsAll('html', {
    context: {foo: 'bar'},
 
    partials: ['templates/partials/*.hbs'],
 
  }))
  .pipe(rename('index.html'))
  //.pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('./build/'));
});

// /*gulp.task('less', function () {
//   return gulp.src('./less/**/*.less')
//     .pipe(less({
//       paths: [ path.join(__dirname, 'less', 'includes') ]
//     }))
//     .pipe(gulp.dest('./css'));
// });*/


 
// task
gulp.task('minify-js', function () {
    gulp.src('./javascript/custom/*.js') // path to your files
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});



var input = './sass/*.scss';
var output = './build/css';

gulp.task('sass', function () {
  return gulp
    // Find all `.scss` files from the `stylesheets/` folder
    .src(input)
    // Run Sass on those files
    .pipe(sass())
    // Write the resulting CSS in the output folder
    .pipe(gulp.dest(output));
});


// gulp.task('prefix', function () {
//   return gulp.src('css/main.css')
//     .pipe(autoprefixer({
//       browsers: ['last 2 versions'],
//       cascade: false
//     }))
//     .pipe(gulp.dest('./css'));
// });

// gulp.task('reporter', function() {
//   gulp.src('less/main.less').
//     pipe(less()).on('error', reporter);
// });

// gulp.task('image', () =>
//   gulp.src('templates/partials/**/*.png')
//     .pipe(imagemin())
//     .pipe(gulp.dest('img'))
// );

gulp.task('server', function() {
    gulp.src('./build/')
        .pipe(webserver({
            port: 3000,
            directoryListing: false,
            open: true
        }));
});

gulp.task('default', ['hbsToHTML', 'minify-js', /*'less', 'prefix', 'reporter', 'image',*/ 'sass', 'server']);

gulp.task('watch', [ 'default', 'hbsToHTML', 'sass'], function () {
  console.log('hello world');
  gulp.watch('templates/partials/*.hbs', ['default']);
  gulp.watch('templates/*.hbs', ['hbsToHTML']);
  gulp.watch('./sass/*.scss', ['sass']);
});
