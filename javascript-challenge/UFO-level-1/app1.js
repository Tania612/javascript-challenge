// from data.js
var sightings = data;

var tbody = d3.select("tbody");

function table(data){
  tbody.html("");

  data.forEach((dataRow) => {
    var row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
      cell.text(val);
    }
    );
  });
}

function pressClick() {

  var date = d3.select("#datetime").property("value");
  let filteredData = sightings;

  
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  }

  table(filteredData);
}

d3.selectAll("#filter-btn").on("click", pressClick);

table(sightings);



































// // Create empty arrays to store the values
// var datetime = [];
// var city = [];
// var state = [];
// var country = [];
// var shape = [];
// var durationMinutes = [];
// var comments = [];



// sightings.forEach((sighting) => {

//     // Iterate through each key and value
//     Object.entries(sighting).forEach(([key, value]) => {
  
//       // Use the key to determine which array to push the value to
//       if (key === "datetime") {
//         datetime.push(value);
//       }
//       if (key === "city") {
//         city.push(value);
//       }
//       if (key === "state") {
//         state.push(value);
//       }
//       if (key === "country") {
//         country.push(value);
//       }
//       if (key === "shape") {
//         shape.push(value);
//       }
//       if (key === "durationMinutes") {
//         durationMinutes.push(value);
//       }
//       else {
//         comments.push(value);
//       }
//      });
//   });




// var datetimeMapped = sightings.map(sighting => sighting.datetime);
// var cityMapped = sightings.map(sighting => sighting.city);
// var stateMapped = sightings.map(sighting => sighting.state);
// var countryMapped = sightings.map(sighting => sighting.country);
// var shapeMapped = sightings.map(sighting => sighting.shape);
// var durationMinutesMapped = sightings.map(sighting => sighting.durationMinutes);
// var commentsMapped = sightings.map(sighting => sighting.comments);

// console.log(datetimeMapped);
// console.log(cityMapped);
// console.log(stateMapped);
// console.log(countryMapped);
// console.log(shapeMapped);
// console.log(durationMinutesMapped);
// console.log(commentsMapped);

// //button control / filtering
// var filter = d3.select(".form-control")
//   .text({placeholder})

// filter.on('click', function filter(){
//   return sighting.datetime === {placeholder}
// };
