//book6_3.js and chapter 7 scatter plot 
//scatterplot 

var dataset = [
                [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
                [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
              ]; //10

var w = 500;
var h = 100;

var svg = d3.select("body")
			.append("svg")
			.attr("width", w)
			.attr("height",h);

svg.selectAll("circle")
	.data(dataset)
	.enter()
	.append("circle")
	.attr("cx",function(d){ //NOTE: each data entry here is an array
		return d[0];
	})
	.attr("cy",function(d){
		return d[1];
	})
	.attr("r",5);

svg.selectAll("text")
	.data(dataset)
	.enter()
	.append("text")
	.text(function(d){
		return d[0]+","+d[1];
	})
	.attr("x",function(d){
		return d[0];
	})
	.attr("y", function(d){
		return d[1];
	})
	.attr("font-size", "11px")
	.attr("fill", "red")
	.attr("font-family", "sans-serif");

