const gulp = require('gulp');
var browserSync = require('browser-sync') 



gulp.task('s', function() {
    browserSync({
        port:8000,
        server: {
    		baseDir: "www",
		},
        open: false,
        files: ["*/**.js"],
        ghostMode: false
    });
});