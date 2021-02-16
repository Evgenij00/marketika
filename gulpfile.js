const gulp = require('gulp');
const sass = require('gulp-sass');
const browser = require('browser-sync').create(); //создание браузера

function style() {
    return gulp.src('./scss/**/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('./css'))
            .pipe(browser.stream());  //пушим изменения таким образом
}

function watch() {
    browser.init({ //здесь необходимо проинициализировать браузер
        server: {
            baseDir: './'
        }
    })
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browser.reload)
}

exports.style = style;
exports.watch = watch;