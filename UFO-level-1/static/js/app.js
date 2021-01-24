// from data.js
var tableData = data;


// YOUR CODE HERE!

// Variables
// datetime, city, state, country, shape, durationMinutes, comments
console.log(data);

// Table 
var tbody = d3.select("tbody");
d3.select("table").attr("class", "table table-striped");


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
  });

// Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.
// Select the button
var button = d3.select("#filter-btn");
// Select the form
var inputField = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
inputField.on("submit",runEnter);

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
  
    var filteredData = tableData.filter(x => x.datetime === inputValue);
  
    console.log(filteredData);

    // Display the filtered dataset

  
    // BONUS: Calculate summary statistics for the age field of the filtered data
  
    // First, create an array with just the age values
    // var ages = filteredData.map(person => person.age);
  
    // // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
    // var mean = math.mean(ages);
    // var median = math.median(ages);
    // var mode = math.mode(ages);
    // var variance = math.var(ages);
    // var standardDeviation = math.std(ages);
  
    // // Then, select the unordered list element by class name
    // var list = d3.select(".summary");
  
    // // remove any children from the list to
    // list.html("");
  
    // append stats to the list
    // list.append("li").text(`Mean: ${mean}`);
    // list.append("li").text(`Median: ${median}`);
    // list.append("li").text(`Mode: ${mode}`);
    // list.append("li").text(`Variance: ${variance}`);
    // list.append("li").text(`Standard Deviation: ${standardDeviation}`);
  };