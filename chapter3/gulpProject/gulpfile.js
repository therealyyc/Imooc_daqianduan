const gulp = require('gulp')
const del = require('del')
const browserSync = require('browser-sync').create()
const reload = browserSync.reload
const { src, dest, series, watch } = require('gulp')

const plugins = require('gulp-load-plugins')()

const js = (cb) => {
  src('js/*.js')
    .pipe(plugins.uglify())
    .pipe(dest('./dist/js'))
    .pipe(reload({
      stream: true
    }))
  cb()
}

const test = () => {
  console.log('hello')
}

const style = (cb) => {
  src('./css/*.scss')
    .pipe(plugins.sass({ outputStyle: 'compressed' }))
    .pipe(plugins.autoprefixer({
      cascade: false,
      remove: false
    }))
    .pipe(gulp.dest('./dist/css'))
    .pipe(reload({
      stream: true
    }))
  cb()
}

const watcher = () => {
  watch('js/*.js', js)//指定监听文件 与任务
  watch('css/*.scss', style)
}

const server = (cb) => {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
  cb()
}

const clean = (cb) => {
  del('./dist')
  cb()
}

exports.scripts = js
exports.clean = clean
exports.style = style


exports.default = series([
  clean,
  js,
  style,
  server,
  watcher
])