d3.text("auto_mpg_tmp.csv", function(datasetText) {

    var parsedCSV = d3.csv.parseRows(datasetText);
    
    var sampleHTML = d3.select("#viz")
        .append("table")
        .style("border-collapse", "collapse")
        .style("border", "2px black solid")
    
        .selectAll("tr")
        .data(parsedCSV)
        .enter().append("tr")
    
        .selectAll("td")
        .data(function(d){return d;})
        .enter().append("td")
        .style("border", "1px black solid")
        .style("padding", "5px")
        .on("mouseover", function(){d3.select(this).style("background-color", "aliceblue")})
        .on("mouseout", function(){d3.select(this).style("background-color", "white")})
        .text(function(d){return d;})
        .style("font-size", "12px");
    });