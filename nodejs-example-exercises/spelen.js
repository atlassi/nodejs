//Part I : File I/O Practice: Country Information App

const fs = require('fs');


// let parser = function (file) {


	

// 	fs.readFile(file, function (err, data) { 
//     	if (err) {
// 		throw err; 
// 		}
		
// 		let parsed = JSON.parse(data);
// 		for (var i = 0; i < parsed.length; i++) {
// 			if (input == parsed[i].name) {
// 				console.log(parsed[i].name);
// 				console.log(parsed[i].topLevelDomain);
// 			} 			
// 		}
// 	});


// }
pars("countries.json", function(parsedData){
		for (i = 0; i < parsedData.length; i++) {
				console.log(parsedData[i])
		}

})

