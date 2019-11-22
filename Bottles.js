
var numberOfBottles = 99;
while (numberOfBottles >=0 && numberOfBottles<100) {


	if (numberOfBottles === 1) {
	console.log("1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.");


	numberOfBottles--;
	}

	
	else if (numberOfBottles == 0) {
    console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");


	numberOfBottles--;

	console.log("The End")
	}


	else {
		console.log (numberOfBottles + " bottles of beer on the wall, " + numberOfBottles + " bottles of beer. Take one down and pass it around, " + (numberOfBottles-1) + " bottles of beer on the wall.");   
		}

	numberOfBottles--;
}
