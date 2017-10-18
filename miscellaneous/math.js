let product = function (x,y) {
	let math = x * y;
	console.log(math);
	return math;
}


let sum = function (x,y) {
	let math = x + y;
	console.log(math);
	return math;
}


var difference = function (a, b) { 
	return Math.abs(a - b); 
}


product();

sum(2,2);
difference(2,2);


module.exports = {
	product: product,
	sum: sum,
	difference: difference

}



