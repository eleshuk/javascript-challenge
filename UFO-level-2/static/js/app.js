// from data.js
var tableData = data;

// Variables
// datetime, city, state, country, shape, durationMinutes, comments
console.log(data);

// Table 

d3.select("table").attr("class", "table table-striped");

// Function to create table from data
function createTable(data) {
    var tbody = d3.select("tbody");
    // Reset table
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

// Create button
var button = d3.select("#filter-btn");
// Select the form
var inputField = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
inputField.on("submit",runEnter);


// Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input

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


// Loop through the data and append data to the table body
tableData.forEach(data => {
    // console.log(data);
     var row = tableBody.append("tr");
     Object.entries(data).forEach(([key, value]) =>{
      //console.log(key, value);
       row.append("td").text(value);
     })
 })
 console.log(tableData);
 var allkeys = Object.keys(tableData[0]);
 var all_values = {};
 dates = [];
 cities= [];
 countries = [];
 states = [];
 shapes = [];
 for(i=0;i<tableData.length;i++){
     if(!dates.includes(tableData[i].datetime)){dates.push(tableData[i].datetime);}
     if(!cities.includes(tableData[i].city)){cities.push(tableData[i].city);}
     if(!states.includes(tableData[i].state)){states.push(tableData[i].state);}
     if(!countries.includes(tableData[i].country)){countries.push(tableData[i].country);}
     if(!shapes.includes(tableData[i].shape)){shapes.push(tableData[i].shape);}
 }
 console.log(shapes);
 filters = d3.select("#filters");
 var li = filters.append("li");
 li.append("label").attr("for", "city").text();
 cities.forEach(x=>{
   li.append("input").attr("type", "radio").attr("id", "city").attr("value", x);
   li.append("label").text(x);
 })