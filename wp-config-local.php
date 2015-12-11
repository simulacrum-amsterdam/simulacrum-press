<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

/** Addition for roots*/
define('WP_ENV', 'development');

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'simulacrum');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', '127.0.0.1:8889');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'R+`%gsuas@fV6U^K6aB{-WMr%|x.@gxYc 6FoHzY%GJNe0XWW:Xf+!/pF:ntwzP|');
define('SECURE_AUTH_KEY',  'g +m^2q&2;fSRzn)%59_&^QhH$J?kPn7s{I+B3`>gKQ#F]C9`(+_?}WzOj8QwcGM');
define('LOGGED_IN_KEY',    'v(w32E<&y(+ioT0*:qgNb,V^*i)(5o1<P-SD4mcq*5OiNrjVe-ta77Aa*U!t B8+');
define('NONCE_KEY',        '!q1u,{7Dg# 6Qv*t.9x7s.,aE|3-HPW`ig-T-Er7DZf0n%w()n.maJ$A,4+h*#x:');
define('AUTH_SALT',        '2X1Im? eL2D|2gH_5=e`-Wi:A@PVogfZ/?b>-[3&+o8380b(Pj{v?h)0E-)_iDZ#');
define('SECURE_AUTH_SALT', ',P$J9N!IuV<G#b:=g-?kMv4@x-`##^7pOMe#+F?hX7|:>eb0E*y0~+|#L`xXbFe ');
define('LOGGED_IN_SALT',   'km,b TzWl{<-J&Y0ELx`4}-]O+u+KsW>HqSt<uj#)zSbo#+8rQ81]i~!#h.G9E)G');
define('NONCE_SALT',       '|tUF8EoW7p2WGeR`wTU3P>`#,Y2|B[ev-9-OSv% g#t>Qn/[l+.0SgVt]bOFNN4R');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
