var exec = require('child_process').exec,
	fs =  require('fs');

module.exports = function() {
	var files = fs.readdirSync(process.cwd());
	files.forEach(function(f) {
		if(fs.statSync(f).isDirectory()) {
			exec('git status', { cwd: f }, function (error, stdout, stderr) {
				console.log(f);

				if(error) {
					console.error(error);
					return;
				}

				if(stderr) {
					console.error(stderr);
					return;
				}

				console.log(stdout);
				return;
			});
		}
	});
};
