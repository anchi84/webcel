var names = ["Sanja Simic", "Mihael Jackson", "Sanja Simic", "Suzana Kostic", "Jo Smith", "Tanja Peric", "Dusan Jovanovic", "Petar Petrovic", "Jozef Antic", "Ivana Mihic"];
var ages = [50, 34, 30, 24, 50, 28, 56, 14, 53, 45];

function avg(){
	main();
	var sum = 0;
	for(var i=0; i<ages.length; i++){
		sum = sum + ages[i];
	}
	
	var el = document.getElementById("avg");
	el.innerHTML = "Prosek godina je " +sum/ages.length +".";
}

function mini(){
	main();
	var min = ages[0];
	var person;
	for(var i=1; i<ages.length; i++){
		if(ages[i] < min){
		   min = ages[i];
		   person = names[i];
		 }
	}
	var el = document.getElementById("min");
	el.innerHTML = "Najmanje godina " +min +" ima " +person +".";
}

function maxi(){
	main();
	var max = ages[0];
	var person;
	for(var i=1; i<ages.length; i++){
		if(ages[i] > max){
		   max = ages[i];
		   person = names[i];
		 }
	}
	var el = document.getElementById("max");
	el.innerHTML = "Najvise godina " +max +" ima " +person +".";
}

function sort(){
	
}

function add() {
	var newName = document.getElementById("name").value;
	var newAge = Number(document.getElementById("age").value);
	//debugger;
	names.push(newName);
	ages.push(newAge);
	main();
}


function main() { // function definition
    /*var exampleArray = [34, 12, 3, 2, 78]; // define array literal
    for(var arrayIndex = 0; arrayIndex < exampleArray.length; arrayIndex = arrayIndex + 1){ // iterate over array; notice that index of the first element in the array is zero
        var arrayElement = exampleArray[arrayIndex]; // get array element at the position of the current index
        console.log(arrayElement); // print array element value to the console
    }*/
	
var index = 1;
var rows = "<tr><th>ID</th><th>Name</th><th>Age</th></tr> ";
for(var i=0; i<names.length; i++) {
	var name = names[i];
	var age = ages[i];
	var row = "<tr><td>" +index +"</td><td>" +name +"</td><td>" +age +"</td></tr>";
	rows = rows + row;
	index++;
	
}
	
var el = document.getElementById("tbl");
el.innerHTML = rows;

}
main(); // function call