// ## Globals
var gulp         = require('gulp');
var fs           = require('fs');
var GulpSSH      = require('gulp-ssh');
var sshPass      = require('./auth.js');
var gutil = require( 'gulp-util' );
var ftp = require( 'vinyl-ftp' );
var rename = require("gulp-rename");

var deployGlobs = [
  '!auth.js',
  '!node_modules',
  '!node_modules/**',
  '!bower_components',
  '!bower_components/**',
  '!.git',
  '!.git/**',
  '!./wp-content/uploads/**',
  '!./wp-content/themes/simulacrum-sage/auth.js',
  '!./wp-content/themes/simulacrum-sage/node_modules',
  '!./wp-content/themes/simulacrum-sage/node_modules/**',
  '!./wp-content/themes/simulacrum-sage/bower_components',
  '!./wp-content/themes/simulacrum-sage/bower_components/**',
  '!./wp-content/themes/simulacrum-sage/.git',
  '!./wp-content/themes/simulacrum-sage/.git/**',
  '.htaccess',
  '**'
];

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

  return gulp.src( deployGlobs, { base: '.', buffer: false } )
    .pipe( conn.newer( '/' ) )
    .pipe( conn.dest( '/' ) );
} );

gulp.task('local', function(){
  return gulp.src("./wp-config-local.php")
    .pipe(rename("./wp-config.php"))
    .pipe(gulp.dest("./"));
});