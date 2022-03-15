// npm install gulp

// cnpm install -D  gulp-imagemin@7.1.0

// cnpm install -D   imagemin-pngquant

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const imageminPngquant = require('imagemin-pngquant');
// 有损压缩
exports.default = () => (
    gulp.src(['./png/*.png'])
        .pipe(imagemin([
            imageminPngquant({
                quality: [0.5, 0.6]
            })
        ]))
        .pipe(gulp.dest('dist/compress/images'))
);