const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// Compilação do SASS
function compileSass() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
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
        .pipe(gulp.dest('dist/js'));
}

// Tarefa de compilação do SASS
gulp.task('sass', compileSass);

// Tarefa de compressão de imagens
gulp.task('images', compressImages);

// Tarefa de compressão de JavaScript
gulp.task('js', compressJS);

// Tarefa padrão (executa todas as tarefas)
gulp.task('default', gulp.parallel('sass', 'images', 'js'));

exports.watch = function (){
    gulp.watch('./src/styles/style.scss')
};
