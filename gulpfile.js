const gulp = require('gulp')
const connect = require('gulp-connect')
const ip = require('ip')

const host = ip.address()

gulp.task('webserver', () => {
  connect.server({
    livereload: true,
    host,
    port: 9528
  })
})

gulp.task('default', ['webserver'])
