const { reload } = require('browser-sync');
let gulp = require('gulp') ;
let sass = require('gulp-sass');
let browserSync = require('browser-sync').create();

gulp.task('sass' , function(){
    return gulp.src('./public/scss/**/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('./public/css/style'))
    .pipe(browserSync.stream())
});

gulp.task('browser-Sync', function() {
    //setting up a server that serves files from  public
    browserSync.init({
      server: {
        baseDir: 'public'
      },
    })
    //compiles sass to css
    gulp.watch('./public/scss/**/*.scss', gulp.series(['sass'])).on('change' , browserSync.reload);

   // reloads the html page if any change is detected in css
    gulp.watch('public/index.html').on('change',browserSync.reload);
    gulp.watch('public/Js/**/*').on('change', browserSync.reload)

})

