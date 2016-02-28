var exec = require( 'child_process' ).exec;
var fs = require( 'fs' );
var chalk = require( 'chalk' );
var repeat = require('repeat-string');

module.exports = function () {
	var files = fs.readdirSync( process.cwd() );
	files.forEach( function ( f ) {
		if ( fs.statSync( f ).isDirectory() ) {
			exec( 'git status', {cwd: f}, function ( error, stdout, stderr ) {

				console.log( chalk.gray( repeat('-', 60) ) );
				console.log( chalk.green( f ) );

				if ( error ) {
					console.error( error );
					return;
				}

				if ( stderr ) {
					console.error( stderr );
					return;
				}

				console.log( stdout );
				return;
			} );
		}
	} );
};
