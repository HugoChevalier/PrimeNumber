var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('hello', function() {
    console.log('Hello Zell');
});


gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
    })
})