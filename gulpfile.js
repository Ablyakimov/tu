const {src, dest, watch, parallel} = require('gulp'),
    gulpPug = require('gulp-pug'),
    gulpSass = require('gulp-sass'),
    gulpBrowserSync = require('browser-sync').create(),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps')


function browserSync() {
    gulpBrowserSync.init({
        server: {
            baseDir: "app/"
        }
    })
}

function scss(){
    return src('app/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(gulpSass({outputStyle: 'compressed'}).on('error', gulpSass.logError))
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 10 version']
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(dest('app/css'))
    .pipe(gulpBrowserSync.stream())
}


function pug(){
    return src('app/*.pug')
    .pipe(gulpPug())
    .pipe(dest('app'))
    .pipe(gulpBrowserSync.stream())
}

     
function watching(){
    watch(['app/scss/**/*.scss'], scss)
    watch(['app/*.pug'], pug)
    watch(['app/js/**/*.js']).on('change', gulpBrowserSync.reload)
    watch(['app/img/**']).on('change', gulpBrowserSync.reload)

}

exports.default = parallel(browserSync, watching)