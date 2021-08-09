const gulp = require('gulp');
const webpack = require('webpack-stream');
const cleanCSS = require('gulp-clean-css');
const del = require('del');

let isDev = false;

let jsConfig = {
    watch: isDev,
    output: {
        filename: 'scripts.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    mode: isDev ? 'development' : 'production',
    devtool: isDev ? 'eval-cheap-module-source-map' : 'none'
};

function styles() {
    return gulp.src('./src/css/**/*.css')
        .pipe(cleanCSS({ level: 2 }))
        .pipe(gulp.dest('./build/css'));
}

function scripts() {
    return gulp.src('./src/js/scripts.js')
        .pipe(webpack(jsConfig))
        .pipe(gulp.dest('./build/js'));
}

function html() {
    return gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./build'));
}

function clean() {
    return del(['build/*']);
}

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('html', html);
gulp.task('clean', clean);

let build = gulp.series(clean,
    gulp.parallel(styles, scripts, html)
);

gulp.task('build', build);