"use strict";

//引入
var gulp = require('gulp');

var cssMin = require('gulp-cssmin');

var babel = require('gulp-babel');

var uglify = require('gulp-uglify');

var htmlMin = require('gulp-htmlmin'); //创建压缩任务(css)


function css() {
  return gulp.src('./html/dist/**').pipe(cssMin()).pipe(gulp.dest('./dist/html/dist'));
} //创建压缩任务(css1)


function css1() {
  return gulp.src('./css/**').pipe(cssMin()).pipe(gulp.dest('./dist/css'));
} //创建压缩任务(js)


function js() {
  return gulp.src('./js/**').pipe(babel({
    //把ES6转为ES5
    presets: ["env"]
  })) //压缩js
  .pipe(uglify()).pipe(gulp.dest('./dist/js'));
} //创建压缩任务(js1)


function js1() {
  return gulp.src('./js/index.js').pipe(babel({
    //把ES6转为ES5
    presets: ["env"]
  })) //压缩js
  .pipe(uglify()).pipe(gulp.dest('./dist/js'));
} // 创建压缩任务(HTML)


function html() {
  return gulp.src('./html/**').pipe(htmlMin({
    collapseWhitespace: true,
    // 表示去除空格
    removeEmptyAttributes: true,
    // 移出空的属性
    minifyCSS: true,
    // 压缩 style 标签
    minifyJS: true // 压缩 script 标签

  })).pipe(gulp.dest('./dist/html'));
} //复制图片任务


function img() {
  return gulp.src('./img/**').pipe(gulp.dest('./dist/img'));
} //复制json任务


function json() {
  return gulp.src('./js/index.json').pipe(gulp.dest('./dist/js'));
} //复制swiper任务


function swiper() {
  return gulp.src('./swiper/**').pipe(gulp.dest('./dist/swiper'));
} //复制validation任务


function validation() {
  return gulp.src('./validation/**').pipe(gulp.dest('./dist/validation'));
} //复制jquery任务


function jquery() {
  return gulp.src('./jquery/**').pipe(gulp.dest('./dist/jquery'));
} //复制api任务


function api() {
  return gulp.src('./api/**').pipe(gulp.dest('./dist/api'));
} //用exports把函数导出
//exports.导出名称=函数名  执行：命令行写 gulp 导出名称


exports.css = css;
exports.css1 = css1;
exports.js = js;
exports.html = html;
exports.img = img;
exports.json = json;
exports.swiper = swiper;
exports.validation = validation;
exports.jquery = jquery;
exports.api = api;
exports.js1 = js1;