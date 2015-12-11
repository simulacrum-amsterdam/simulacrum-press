// ## Globals
var gulp         = require('gulp');
var fs           = require('fs');
var GulpSSH      = require('gulp-ssh');
var sshPass      = require('./auth.js');
var gutil = require( 'gulp-util' );
var ftp = require( 'vinyl-ftp' );
var rename = require("gulp-rename");

// Deployment over ssh -> staging
var SSHConfig = {
  host: '95.85.1.182',
  port: 22,
  username: 'root',
  password: sshPass.sshPassword
}

var gulpSSH = new GulpSSH({
  ignoreErrors: false,
  sshConfig: SSHConfig
})

gulp.task('deploy-staging-all', function () {
  console.log(SSHConfig.password);
  return gulp
    .src(['.', '!**/node_modules/**', '!**/bower_components/**', '!**/.git/**', '!**/wp-content/**'])
    .pipe(gulpSSH.dest('/var/www/html/'))
})

// Deployment over ftp -> production

gulp.task( 'deploy-production-all', function () {
  gulp.src("./wp-config-remote.php")
    .pipe(rename("./wp-config.php"))
    .pipe(gulp.dest("./"));

  var conn = ftp.create( {
    host:     'ftp.simulacrum.nl',
    user:     sshPass.ftpUser,
    password: sshPass.ftpPassword,
    parallel: 1,
    log:      gutil.log
  } );

  var globs = [
    '!auth.js',
    '!node_modules',
    '!node_modules/**',
    '!bower_components',
    '!bower_components/**',
    '!.git',
    '!.git/**',
    '!./wp-content/themes/simulacrum-sage/auth.js',
    '!./wp-content/themes/simulacrum-sage/node_modules',
    '!./wp-content/themes/simulacrum-sage/node_modules/**',
    '!./wp-content/themes/simulacrum-sage/bower_components',
    '!./wp-content/themes/simulacrum-sage/bower_components/**',
    '!./wp-content/themes/simulacrum-sage/.git',
    '!./wp-content/themes/simulacrum-sage/.git/**',
    '**'
  ];

  return gulp.src( globs, { base: '.', buffer: false } )
    .pipe( conn.newer( '/test/' ) )
    .pipe( conn.dest( '/test/' ) );

  // gulp.src("./wp-config-local.php")
  //   .pipe(rename("./wp-config.php"))
  //   .pipe(gulp.dest("./"));
} );

gulp.task('local', function(){
  return gulp.src("./wp-config-local.php")
    .pipe(rename("./wp-config.php"))
    .pipe(gulp.dest("./"));
});