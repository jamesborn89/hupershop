let gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin'),
    webp = require('gulp-webp'),
    webpHTML = require('gulp-webp-html'),
    webpcss = require("gulp-webp-css");

var tinypng = require('gulp-tinypng-compress');

gulp.task('tinypng', function () {
    return gulp.src('app/img/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'vgMpGcTzpxwB7LmLZ6KzfSsMzDZhJJqL'
        }))
        .pipe(gulp.dest('app/images'));
});

gulp.task('image', () =>
    gulp.src('app/img/*.{jpg,png,svg,gif,ico,webp}')
        .pipe(webp())
        .pipe(gulp.dest('app/images'))
);

gulp.task('sass', function () {
    return gulp.src('app/scss/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(rename({ suffix: ".min" }))
        .pipe(webpcss())
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 8 versions']
        }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('style', function () {
    return gulp.src([
        'node_modules/magnific-popup/dist/magnific-popup.css',
        'node_modules/wow.js/css/libs/animate.css',
        'node_modules/swiper/swiper-bundle.min.css',
        'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.css',
        'node_modules/jquery-form-styler/dist/jquery.formstyler.css',
        'node_modules/jquery-form-styler/dist/jquery.formstyler.theme.css',
        'node_modules/animate.css/animate.css'
    ])
        .pipe(cssmin())
        .pipe(concat('libs.min.css'))
        .pipe(gulp.dest('app/css'))
});

gulp.task('script', function () {
    return gulp.src([
        'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
        'node_modules/wow.js/dist/wow.js',
        'node_modules/swiper/swiper-bundle.min.js',
        'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js',
        'node_modules/jquery-form-styler/dist/jquery.formstyler.min.js',
        'node_modules/parallax-js/dist/parallax.min.js'
    ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'))
});

gulp.task('html', function () {
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('webppicture', function () {
    gulp.src('app/*.html')
        .pipe(webpHTML())
        .pipe(gulp.dest('./app/'))
});

gulp.task('js', function () {
    return gulp.src('app/js/*.js')
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});

gulp.task('watch', function () {
    gulp.watch('app/scss/*.scss', gulp.parallel('sass'))
    gulp.watch('app/*html', gulp.parallel('html'))
    gulp.watch('app/js/*.js', gulp.parallel('js'))
});

gulp.task('default', gulp.parallel('webppicture','tinypng', 'style', 'script', 'sass', 'watch', 'browser-sync'))