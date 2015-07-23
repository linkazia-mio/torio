// gulpプラグインの読みこみ
var gulp = require('gulp');
//Sass書き出し
var sass = require('gulp-sass');

//scss監視
gulp.task('watch', function() {
    gulp.watch('_scss/*.scss', ['sass']);
});

gulp.task('sass', function(){
    //scssディレクトリの指定
    gulp.src('_scss/*.scss')
    //コンパイル実行
    .pipe(sass({style : 'expanded'})) //出力形式の種類　#nested, compact, compressed, expanded.
    //出力先の指定
    .pipe(gulp.dest('css/'));
});
