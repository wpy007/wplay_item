var gulp = require('gulp');
var webserver = require('gulp-webserver');
var sass = require('gulp-sass');




//自动打开浏览器
gulp.task('webserver', function() {
	//  如果使用了directory,列表是当前的wplay_item，所以要把gulp.src设置为./，而不是./build
    gulp.src('./')
    .pipe(webserver({
      // 自动刷新
      livereload: true,
      directoryListing: false,
      open: true,
      //  设置为true，就是打开列表，不然默认index.html文件
      directoryListing: true
    }));
});

//同步html，css，js，fonts文件或文件夹中的内容
gulp.task('copy-index', function () {
	return gulp.src('./src/*.html')
	.pipe(gulp.dest('./build'))
})

gulp.task('cssTask', function () {
	return gulp.src('./src/css/sass/*.*')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./build/css'));
})
gulp.task('fontsTask', function () {
	return gulp.src('./src/fonts/*.*')
	.pipe(gulp.dest('./build/fonts'));
})
gulp.task('jsTask', function () {
	return gulp.src('./src/js/*.*')
	.pipe(gulp.dest('./build/js'));
})
gulp.task('htmlTemplateTask', function () {
	return gulp.src('./src/template/*.*')
	.pipe(gulp.dest('./build/template'));
})


//监听
gulp.task('watch', function () {
	gulp.watch('./src/*.html', ['copy-index']);
	gulp.watch('./src/css/*/*.*', ['cssTask']);
	gulp.watch('./src/js/*.*', ['jsTask']);
	// gulp.watch('./src/template/*.*', ['htmlTemplateTask']);
})




//设置默认任务
gulp.task('default', ['webserver', 'watch']);