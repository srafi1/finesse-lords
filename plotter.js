var pointInfo = document.getElementById("pointInfo");
var zoomLevel = 1;

var width = 700,
    height = 580;

var svg = d3.select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

var g = svg.append('g');

var albersProjection = d3.geoAlbers()
    .scale(25000)
    .rotate([74.0060, 0])
    .center([0, 40.7128])
    .translate([width/2, height/2]);

var geoPath = d3.geoPath()
    .projection(albersProjection);

g.selectAll('path')
    .data(boroughs_json.features)
    .enter()
    .append('path')
    .attr('fill', '#2bf')
    .attr('stroke', '#000')
    .attr('d', geoPath);


svg.selectAll("circle")
    .data(points.features).enter()
    .append("circle")
    .attr("cx", (d) => albersProjection(d.geometry.coordinates)[0])
    .attr("cy", (d) => albersProjection(d.geometry.coordinates)[1])
    .attr("r", (d) => Math.min(d.properties.num_calls/10, 10) + "px")
    .attr("fill", "red")
        .on('click', function(d){
            console.log(d.properties.num_calls + " calls were made in complaint at " + albersProjection(d.geometry.coordinates)[0] + " , " + albersProjection(d.geometry.coordinates) [1] );
            document.getElementById("pointInfo").innerHTML = "There were " + d.properties.num_calls + " noise complaint calls made at latitude " + d.geometry.coordinates[0] + " and longitude " + d.geometry.coordinates[1] + " at a " + d.properties["Location Type"];
        })

console.log(albersProjection);

//Nothing past here works yet

var reSize = function(delta) {
    zoomLevel += delta;
    console.log("Zoom Level: " + zoomLevel);

    //Make a new projection, but change only the scale
    albersProjection = d3.geoAlbers()
        .scale(zoomLevel * 25000)
        .rotate([74.0060, 0])
        .center([0, 40.7128])
        .translate([width/2, height/2]);
    geoPath = d3.geoPath()
        .projection(albersProjection);

    //Remove the map
    //g.selectAll('path')
    //.remove()
    //Redraw the map
    g.selectAll('path')
    //.data(boroughs_json.features)
    //.enter()
        .transition()
        .duration(2000)
    //.append('path')
        .attr('fill', '#2bf')
        .attr('stroke', '#000')
        .attr('d', geoPath);

    //svg.selectAll("circle")
    //.remove()
    svg.selectAll("circle")
    //.data(points.features).enter()
    //.append("circle")
        .transition()
        .duration(2000)
        .attr("cx", (d) => albersProjection(d.geometry.coordinates)[0])
        .attr("cy", (d) => albersProjection(d.geometry.coordinates)[1])
        .attr("r", (d) => Math.min(d.properties.num_calls/10, 10) + "px")
        .attr("fill", "red")
        .on('click', function(d){
            console.log(d.properties.num_calls + " calls were made in complaint at " + albersProjection(d.geometry.coordinates)[0] + " , " + albersProjection(d.geometry.coordinates) [1] );
            document.getElementById("pointInfo").innerHTML = "There were " + d.properties.num_calls + " noise complaint calls made at latitude " + d.geometry.coordinates[0] + " and longitude " + d.geometry.coordinates[1] + " at a " + d.properties["Location Type"];
        })

}

var zoomMap = function(){
    zoomLevel += 1;
    console.log("scale");
    reSize();
}

var zoomer = document.getElementById("zoom");
zoomer.addEventListener("click", () => reSize(1) );
var unzoomer = document.getElementById("unzoom");
unzoomer.addEventListener("click", () => reSize(-1) );
