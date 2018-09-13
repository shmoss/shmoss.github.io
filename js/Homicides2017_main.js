	var width = 700;
	var height = 880;

	var inputValue = null;
    var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

	//create SVG

    var mapContainer = d3.select("body")
        .append("mapContainer")
        .attr( "width", 900 )
        .attr ( "height", 900 )
        

        
    var Map = mapContainer.append(svg)
	var svg = d3.select("body")
		.append("svg")
		.attr( "width", width )
		.attr ( "height", height )
        .attr ("position", 'left')
        .attr("transform","translate(100,-150)")
        .attr("class", "map")
		var g = svg.append ( "g" )

        
        

        // svg repositioning
        //$("svg").css({top: 100, left: 100});

	//projection
	var albersProjection = d3.geoAlbers()
		.scale( 100000)
		.rotate ( [87.6298,0] )
		.center( [0, 41.9781] )

    function zoomed() {
    g.attr("transform", d3.event.transform);//The zoom and panning is affecting my G element which is a child of SVG
}


    
    var zoom = d3.zoom()
        .scaleExtent([1, 21])
        .on("zoom", zoomed);
    
   /*
   var dragcontainer = d3.drag()
  .on("drag", function(d, i) {
    d3.select(this).attr("transform", "translate(" + (d.x = d3.event.x) + "," + (d.y = d3.event.y) + ")");
  });
var drag = d3.select("svg").datum({x: 0, y: 0}).call(dragcontainer)
*/
	//GeoPath
	var geoPath = d3.geoPath()
		.projection( albersProjection );

	g.selectAll( "path" )
		.data( Chicago.features )
		.enter()
		.append( "path" )
		.attr( "stroke", "white" )
        .attr( "border-radius", '50%' )
        .attr( "stroke-width", ".5" )
		.attr( "fill", "#black" )
        .attr( "opacity", ".2" )
		.attr( "d", geoPath )
        .attr("class","communities")
        .on("mouseover", function(d) {      
            commDiv.transition()        
                .duration(200)      
                .style("opacity", .9);      
            commDiv .html(d.properties.community)  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY - 28) + "px");  
            d3.select(this).attr("class","commHover");  
            })
            .on("mouseout", function(d) {       
            commDiv.transition()        
                .duration(200)      
                .style("opacity", 0); 
            d3.select(this).attr("class","communities");  
            }); 
        /*.on("mouseover", function(d){
            d3.select("h5").html(d.properties.community)
            d3.select(this).attr("class","commHover");
        })
        .on("mouseout", function(d){
            d3.select("h5").text("");
            d3.select(this).attr("class","communities");
        });
        */



	//lets load rodents
    // svg repositioning
   
	var rodents = svg.append( "g" );

    rodents.selectAll( "path" )
        .data( homicides.features )
        .enter()
        .append( "path" )
        .attr( "pointRadius", "10px" )
        .attr( "fill", initialDate)
        .attr( "stroke", 'white' )
        .attr("opacity", initialOpacity)
        .attr( "d", geoPath.pointRadius(initialDateMatchRadius) )
        .attr("class","incident")
        .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html('<br/>' + d.properties.Date + '<br/>' + d.properties.Block  + '<br/>' + d.properties.LocationDescription)  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY - 88) + "px"); 
                d3.select(this).attr("class","hover");   
            })
            .on("mouseout", function(d) {       
            div.transition()        
                .duration(200)      
                .style("opacity", 0);  
            d3.select(this).attr("class","incident"); 
            });                  
        /*.on("mouseover", function(d){
            d3.select("h2").html('<br/>' + d.properties.Date + '<br/>' + d.properties.Block  + '<br/>' + d.properties.LocationDescription)
            d3.select(this).attr("class","hover");

        })*/
        /*.on("mouseout", function(d){
            d3.select("h2").text("");
            d3.select(this).attr("class","incident");
        });*/


    
    // counter function
    d3.select("#timeslide").on("input", function() {
        update(+this.value);
        document.getElementById("count").innerHTML = counter

    });


    document.getElementById("count").className = "countStyle"
   

    function update(value) {
    if (value == 0) {
        console.log('true')
        counter = "<div>January: 55 homicides</div>" +
                  "<div>YTD: 55 homicides</div>"
    }
    if (value == 1) {
        console.log('true')
        counter = "<div>February: 50 homicides</div>" +
                  "<div>YTD: 105 homicides</div>"
    }
    if (value == 2) {
        console.log('true')
        counter = "<div>March: 42 homicides</div>" +
                  "<div>YTD: 147 homicides</div>"
    }
    if (value == 3) {
        console.log('true')
        counter = "<div>April: 48 homicides</div>" +
                  "<div>YTD: 195 homicides</div>"
    }
    if (value == 4) {
        console.log('true')
        counter = "<div>May: 59 homicides</div>" +
                  "<div>YTD: 254 homicides</div>"
    }
    if (value == 5) {
        console.log('true')
        counter = "<div>June: 86 homicides</div>" +
                  "<div>YTD: 340 homicides</div>"
    }
    if (value == 6) {
        console.log('true')
        counter = "<div>July: 76 homicides</div>" +
                  "<div>YTD: 416 homicides</div>"
    }
    if (value == 7) {
        console.log('true')
        counter = "<div>August: 58 homicides</div>" +
                  "<div>YTD: 474 homicides</div>"
    }
    if (value == 8) {
        console.log('true')
        counter = "<div>September: 61 homicides</div>" +
                  "<div>YTD: 535 homicides</div>"
    }
    if (value == 9) {
        console.log('true')
        counter = "<div>October: 59 homicides</div>" +
                  "<div>YTD: 594 homicides</div>"

    }if (value == 10) {
        console.log('true')
        counter = "<div>November: 39 homicides</div>" +
                  "<div>YTD: 633 homicides</div>"

    }if (value == 11) {
        console.log('true')
        counter = "<div>December: 41 homicides</div>" +
                  "<div>YTD: 674 homicides</div>"
    }
     else {
        console.log('no')
    };
    document.getElementById("range").innerHTML=month[value];
    inputValue = month[value];

    d3.selectAll(".incident")
        .attr("fill", dateMatch)
        .attr("opacity", dateMatchOpacity)
        .attr( "d", geoPath.pointRadius(dateMatchRadius) )
    
}
var counter = '55 homicides'
function dateMatch(data, value) {
        var d = new Date(data.properties.Date);
        var m = month[d.getMonth()];
        if (inputValue == m) {
            this.parentElement.appendChild(this);
            var size = d3.selectAll(this).size()
            console.log(inputValue)
            //counter++;
            return "red";

            if (inputValue == "January") {
            
            counter = 8909;
            console.log(counter)
            return "red";
            }
        } else {
            return "#ff6f00";
        };


        return counter
    }

function countMatch(data, value) {
        var d = new Date(data.properties.Date);
        var m = month[d.getMonth()];
        if (inputValue == 2) {
            
            counter = 8909;
            return "red";
        } else {
            return "#808080";
        };


        return counter
    }

function dateMatchRadius(data, value) {
        var d = new Date(data.properties.Date);
        var m = month[d.getMonth()];
        if (inputValue == m) {
            this.parentElement.appendChild(this);
            return 7;
        } else {
            return 3;
        };
    }

    function dateMatchOpacity(data, value) {
        var d = new Date(data.properties.Date);
        var m = month[d.getMonth()];
        if (inputValue == m) {
            this.parentElement.appendChild(this);
            return .8;
        } else {
            return .5;
        };
    }

    function initialOpacity(d,i){
        var d = new Date(d.properties.Date);
        var m = month[d.getMonth()];
        if (m == "January") {
            this.parentElement.appendChild(this);
            return .8;
        } else {
            return .5;
        };
    }

function initialDateMatchRadius(d,i){
        var d = new Date(d.properties.Date);
        var m = month[d.getMonth()];
        if (m == "January") {
            this.parentElement.appendChild(this);
            return 7;
        } else {
            return 3;
        };
    }
    

    function initialDate(d,i){
        var d = new Date(d.properties.Date);
        var m = month[d.getMonth()];
        if (m == "January") {
            this.parentElement.appendChild(this);
            return "red";
        } else {
            return "#ff6f00";
        };
    }

    //create info label div

    
    
    // Define the div for the tooltip
    var div = d3.select("body").append("div")   
    .attr("class", "tooltip")               
    .style("opacity", 0)
    //.style("left", (d3.event.pageX) + "px")     
    //.style("top", (d3.event.pageY - 28) + "px");
 
    var commDiv = d3.select("body").append("div")   
    .attr("class", "commTooltip")               
    .style("opacity", 0);



    //Make Legend



		// Our D3 code will go here.