// gulpプラグインの読みこみ
var gulp = require('gulp');
//Sass書き出し
var sass = require('gulp-sass');
//icon font
var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');

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

gulp.task('iconfont', function(){
  gulp.src(['icons/*.svg'])
    .pipe(iconfont({
      fontName: 'icon',
      fixedWidth: true,
      startCodepoint: 0xF001
    }))
    .on('codepoints', function(codepoints, options) {
      codepoints = codepoints.map(function(glyph) {
        return {
          name: glyph.name,
          codepoint: glyph.codepoint.toString(16) // convert decimal to hex.
        };
      });

    // CSS templating, e.g.
      gulp.src('css/icon.css')
        .pipe(consolidate('mustache', {
          glyphs: codepoints,
          fontName: 'torio_icon',
          fontPath: 'fonts/',
          timeStamp: Date.now()
      }))
      .pipe(gulp.dest('css/'))
  })

  .pipe(gulp.dest('fonts/'));
});

gulp.task('default', ['iconfont']);
