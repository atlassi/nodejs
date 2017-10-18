var fs = require('fs');

// Exercise #2
fs.readFile('app.js', function (err, data) { 
    if (err) {
		throw err; 
	}

	var content = data.toString();
	console.log(content)
	fs.writeFile("app-duplicate.txt", content, function(err) {
    if(err) {
	throw err; }
		});

	});




