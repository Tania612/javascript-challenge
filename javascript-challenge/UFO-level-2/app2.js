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

var input = d3.select("input");
userinput = {}
  
function changeFilter(){

    var filter = d3.select(this).select("input");
    var filterID = filter.attr("id")
    var filterVal = filter.property("value")
    userinput[filterID] = filterVal
  
    console.log(userinput)
  
    let filteredData = sightings;
  
    Object.entries(userinput).forEach(function([key,value]){
        filteredData= filteredData.filter(d => d[key] === value); 
        console.log(filteredData);
    });

    table(filteredData);
}

d3.selectAll(".filter").on("change", changeFilter);

table(sightings);