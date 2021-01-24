// from data.js
var tableData = data;


// YOUR CODE HERE!

// Variables
// datetime, city, state, country, shape, durationMinutes, comments
console.log(data);

// Arrays to hold sightings

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


