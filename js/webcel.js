var names = ["Sanja Simic", "Mihael Jackson", "Sofija Simic", "Suzana Kostic", "Jo Smith", "Tanja Peric", "Dusan Jovanovic", "Petar Petrovic", "Jozef Antic", "Ivana Mihic"];
var ages = [50, 34, 30, 24, 50, 28, 56, 14, 53, 45];

function avg(){
	var sum = 0;
	for(var i=0; i<ages.length; i++){
		sum = sum + ages[i];
	}
	
	var el = document.getElementById("avg");
	el.innerHTML = "Prosek godina je " +(sum/ages.length).toFixed(1) +"!";
}

function mini(){
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

function sortTable(col) {
  	var table, rows, switching, i, x, y, shouldSwitch;
  	table = document.getElementById("tbl");
  	switching = true;
  	/* Make a loop that will continue until no switching has been done: */
  	while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");
    /* Loop through all table rows (except the first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare, one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[col];
      y = rows[i + 1].getElementsByTagName("TD")[col];
      // Check if the two rows should switch place:
      
      if (isNaN(x.innerHTML)) {
      	if(x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        	// If so, mark as a switch and break the loop:
        	shouldSwitch = true;
       		break;
      	}
      } else {
      		if (Number(x.innerHTML) > Number(y.innerHTML)) {
        		// If so, mark as a switch and break the loop:
        		shouldSwitch = true;
        		break;
      		}
    	}
    }

    if (shouldSwitch) {
      /* If a switch has been marked, make the switch and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function add() {
	var newName = document.getElementById("name").value;
	var newAge = Number(document.getElementById("age").value);
	names.push(newName);
	ages.push(newAge);
	main();
	document.getElementById("avg").innerHTML="";
	document.getElementById("min").innerHTML="";
	document.getElementById("max").innerHTML="";
}


function main() {	
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