var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var divPlanets = document.getElementById('planets');

planets.forEach(function(item){
	//add each planet to div id "planets"
	divPlanets.innerHTML += item + " ";

});

// planets.forEach(function(i){
// 	i.toUpperCase();
// });




var el = document.getElementById("planets");

// Use the map method to create a new array where the first letter of each planet is capitalized

var newPlanets = planets.map(function(item){
	return item.slice(0, 1).toUpperCase() + item.slice(1);
})
console.log("newPlanets - map - 1st letter capitalized", newPlanets);




// Use the filter method to create a new array that contains planets with the letter 'e'

var newPlanets2 = planets.filter(function(word){
	for(var i = 0; i < word.length; i++){
		if(word.charAt(i) === 'e'){
			return word;
		}
	}
})
console.log("newPlanets2 - filter - contains'e'", newPlanets2);




// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var newWords = words.reduce(function(a, b){
					return a + " " + b;
				});
console.log("newWords - reduce - sentence", newWords);






