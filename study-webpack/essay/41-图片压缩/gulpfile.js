// npm install gulp

// cnpm install -D  gulp-imagemin@7.1.0

// cnpm install -D   imagemin-pngquant

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const imageminPngquant = require('imagemin-pngquant');
// var tiny = require('gulp-tinypng-nokey');
// 有损压缩
exports.default = () => (
    gulp.src(['./src/**/*.png'])
    // gulp.src('./src/assets/img/accident-hover.png')
        .pipe(imagemin([
            imageminPngquant({
                quality: [0.5, 0.6]
            })
        ]))
        .pipe(gulp.dest('dist/compress/images'))
);
// 默认输出
// function defaultTask(cb) {
//     // place code for your default task here
//     cb();
//   }
  
// exports.default = defaultTask


// // 无损压缩
// gulp.task('i1', async() => {
//     await gulp.src('./src/assets/img/**/*.png')
//     .pipe(imagemin([
//         imagemin.gifsicle({interlaced: true}),
//         imagemin.mozjpeg({quality: 75, progressive: true}),
//         imagemin.optipng({
//             optimizationLevel: 5,
//         }),
//         imagemin.svgo({
//             plugins: [
//                 {removeViewBox: true},
//                 {cleanupIDs: false}
//             ]
//         })
//     ]))
//     .pipe(gulp.dest('dist/compress/images'))
// })

// // 有损压缩 上限是500个图片
// gulp.task('i4',async() =>  {
//     await gulp.src('./src/assets/img/**/*.png')
//         .pipe(tiny())
//         .pipe(gulp.dest('compress/images'))
// });