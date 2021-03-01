const gulp = require('gulp')
const cssmin = require('gulp-cssmin')
const autoPrefixer = require('gulp-autoprefixer')
const uglify = require('gulp-uglify')
const htmlmin = require('gulp-htmlmin')
const cssHandler = () => {
  return gulp.src('./src/css/*.css').pipe(autoprefixer()).pipe(cssmin()).pipe(gulp.dest('./dist/css'))
}
const jsHandler = () => {
  return gulp.src('./src/js/*.js').pipe(uglify()).pipe(gulp.dest('./dist/js'))
}
const htmlHandler = () => {
  return gulp.src('./src/pages/*.html').pipe(htmlmin({
    removeAttributeQuotes: true,//移除属性上的双引号
    removeComments: true,//移除注释
    collapseWhitespace: true,//移除所有空格,会变成一行代码
    minifyCSS: true,//把页面里面style标签里面的css样式也去空格
    minifyJS: true,//把页面里面script标签里面的js代码也去空格
    collapseBooleanAttributes: true//把值为布尔值的属性简写
  })).pipe(gulp.dest('./dist/pages'))
}
module.exports.cssHandler = cssHandler
module.exports.jsHandler = jsHandler
module.exports.htmlHandler = htmlHandler
