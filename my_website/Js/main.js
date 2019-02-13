
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
// generates random color for mouseover and makes sure the 255 is a rounded number
			var random = Math.round(Math.random() * 255);
// generates the random color
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
// if clicked message comes that informs reader that it was clicked.
		alert('Hey, you clicked me!');
	};

	$('table').on('click', clickme);
};

function jsAjax(){
  // Step 1: Create the request
  var ajaxRequest = new XMLHttpRequest();

  //Step 2: Create an event handler to send received data to a callback function
  ajaxRequest.onreadystatechange = function(){
      if (ajaxRequest.readyState == 4){
          callback(ajaxRequest.response);
      };
  };

  //jQuery.get() method...Example 2.5 line 3
  $.get("data/MegaCities.geojson", callback, "json");
};

//define callback function
function callback(response){
  //tasks using the data go here
  console.log(response);
};

function initialize(){
//define a variable to hold the data
    var mydata;

//basic jQuery ajax method
    $.ajax("data/MegaCities.geojson", {
        dataType: "json",
        success: function(response){
            mydata = response;
            console.log(json.stringify(mydata);
        }};
$("mydiv").load("data/MegaCities.geojson")

function debugCallback(response){

	$("#mydiv").append('GeoJSON data: ' + JSON.stringify(mydata));
};
//defining function
function debugAjax(){
	//bringing variable mydata
	var mydata;
	//calling jquery through ajax to bring geojson data
  //checking dataType
	$.ajax("data/MegaCities.geojson", {
		dataType: "json",
		success: function(response){

			mydata = response;
		//checking data
			console.log(mydata);
		}
	});
		// chekcing data again
			console.log(mydata);

	$("#mydiv").append('<br>GeoJSON data:<br>' + JSON.stringify(mydata));
};

//$("mydiv").append('GeoJSON data: ' + JSON.stringify(mydata));
window.onload = jsAjax();

//call the initialize function when the document has loaded
$(document).ready(initialize);
