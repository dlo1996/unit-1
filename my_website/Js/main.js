
function initialize(){
    cities();
};

//function to create a table with cities and their populations
function cities(){
//define an array of objects for cities and population
    var cityPop = [
        {
            city: 'Madison',
            population: 233209
        },
        {
            city: 'Milwaukee',
            population: 594833
        },
        {
            city: 'Green Bay',
            population: 104057
        },
        {
            city: 'Superior',
            population: 27244
        },
        {
            city: 'Chicago',
            population: 2716000
        },

    ];

//append the table element to the div
    $("#mydiv").append("<table>");

//append a header row to the table
    $("table").append("<tr>");

//add the "City" and "Population" columns to the header row
    $("tr").append("<th>City</th><th>Population</th>");

//loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
//assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
//add the row's html string to the table
        $("table").append(rowHtml);
    };
//get the div id
    var theid = $('#mydiv').attr('id');

//theid is 'mydiv'; add it as text to the div
    $('#mydiv').append(theid);

//add the class 'foo' to the div
    $('#mydiv').attr('class', 'foo');

//Check your work with the Inspector!
//change the text color
    $('#mydiv').css('color', 'red');

//change the text size and alignment
    $('#mydiv').css({
    'font-size': '2em',
    'text-align': 'left'
    });
//iterate over each script element and add each one's source url as text to the div
    $('script').each(function(){
       var thesource = $(this).attr('src');
       $('#mydiv').append(thesource);
     });
//click listener with anonymous handler function
         $('table').on('click', function(){
             alert('Madison Rocks! Go Badgers!');
         });

 //alias method for the click event listener
         $('table').click(function(){
             alert('Visit Superior and see the big lake!');
         });

//named handler function for removable listener
         function clickme(){
             alert('Yeah Green Bay! Go Packers!');
         };

//add the event listener
         $('table').on('click', clickme);

//remove the event listener
         $('table').off('click', clickme);
};
// debugportion
function addColumns(cityPop){

    $('tr').each(function(i){

    	if (i == 0){

    		$(this).append('<th>City Size</th>');
    	} else {

    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citysize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};

    		$(this).append('<td>' + citySize + '</td>');
    	};
    });
};

function addEvents(){
//creating a function which generates random color when mouse goes over table
	$('table').mouseover(function(){
    console.log('test')
		var color = "rgb(";

		for (var i=0; i<3; i++){
// generates random color for mouseover
			var random = Math.round(Math.random() * 255);

			color += random;

			if (i<2){
				color += ",";

			} else {
				color += ")";
			}
		};

		$(this).css('color', color);
	});

	function clickme(){

		alert('Hey, you clicked me!');
	};

	$('table').on('click', clickme);
};


//call the initialize function when the document has loaded
$(document).ready(initialize);
