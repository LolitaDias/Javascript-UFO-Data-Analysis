//Using the UFO dataset provided in the form of an array of JavaScript objects
//write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

// Get a reference to the table body
var tbody = d3.select("tbody");

// Assign the data from 'data.js' to a descriptive variable
var ufo_master_data=data;

// Print the UFO data from 'data.js' ---- Function to populate the data
function populatedata(data) {
    data.forEach((ufo_data) => {
    var row = tbody.append("tr");
    Object.entries(ufo_data).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
    });
}

//Use a date form in your HTML document and 
//write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.

// Select the button
var button = d3.select("#filter-btn");

// Filter by attribute
button.on("click", () => {
    //Avoid refreshing the page
    d3.event.preventDefault();
    var inputDate = d3.select("#datetime");
    var inputCity = d3.select("#city");
    var inputDateValue=inputDate.property("value");
    var inputCityValue=inputCity.property("value");
    console.log(inputDateValue);
    console.log(inputCityValue);
    console.log(ufo_master_data);
    var filteredData=ufo_master_data.filter(ufo => ufo.datetime === inputDateValue && ufo.city === inputCityValue);
    console.log(filteredData);

    //Reset the UFO data before displaying the filtered data
    tbody.html("");
    populatedata(filteredData);

    // If Filter Table is clicked without inserting a date or city
    if(filteredData.length===0){
        tbody.append("tr").append("td").text("There are no UFO Sightings logged for the requested Date and City!!!"); 
    }
   
}); 

// Display the entire data set when the page loads
populatedata(ufo_master_data);
