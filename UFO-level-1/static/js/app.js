// from data.js
var tableData = data;


// YOUR CODE HERE!

// Variables
// datetime, city, state, country, shape, durationMinutes, comments
console.log(data);

// Table 

d3.select("table").attr("class", "table table-striped");

function createTable(data) {
    var tbody = d3.select("tbody");
    tbody.html("");
    data.forEach(function(UFO) {
        console.log(UFO);
        var tr = tbody.append("tr")
        tr.append("td").text(UFO.datetime)
        tr.append("td").text(UFO.city)
        tr.append("td").text(UFO.state)
        tr.append("td").text(UFO.country)
        tr.append("td").text(UFO.shape)
        tr.append("td").text(UFO.durationMinutes)
        tr.append("td").text(UFO.comments)
    })
};
createTable(tableData);

var button = d3.select("#filter-btn");
// Select the form
var inputField = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
inputField.on("submit",runEnter);


// Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.
// Select the button


// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
    console.log(tableData);

    if (inputValue) {
        var filteredData = tableData.filter(x => x.datetime === inputValue);
        }
    createTable(filteredData);

    console.log(filteredData);
};


