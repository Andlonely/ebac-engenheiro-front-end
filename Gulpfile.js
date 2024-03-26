const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

// Compilação do SASS
function compileSass() {
    return gulp.src('src/styles/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ 
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write("./maps"))
        .pipe(gulp.dest('dist/css'));
}

// Compressão de imagens
function compressImages() {
    return gulp.src('src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
}

// Compressão de código JavaScript
function compressJS() {
    return gulp.src('src/js/**/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('dist/js'));
}


exports.default = function (){
    gulp.watch('./src/styles/*.scss', {ignoreInitial: false}, gulp.series(compileSass));
    gulp.watch('./src/js/*.js', {ignoreInitial: false}, gulp.series(compressJS));
    gulp.watch('./src/img/*', {ignoreInitial: false}, gulp.series(compressImages));
};
