//book6_3.js and chapter 7 scatter plot 
//scatterplot 

var dataset = [
                [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
                [410, 12], [475, 44], [25, 67], [85, 21], [220, 88],
                [600, 150]
              ]; //11

var w = 500;
var h = 300;
var padding = 20;

var xScale = d3.scale.linear()
					.domain ([0, d3.max(dataset,function(d){
						return d[0];
					})])
					.range ([padding,w-padding*2])
					.nice();

var yScale = d3.scale.linear()
					.domain ([0, d3.max(dataset,function(d){
						return d[1];
					})])
					.range ([h-padding,padding])
					.nice();

//RMB, we want to set the radius according to the height of the circles
var rScale = d3.scale.linear()
					.domain ([0, d3.max(dataset,function(d){
						return d[1]; //heigher the bigger
					})])
					.range ([2,5])
					.nice();

var svg = d3.select("body")
			.append("svg")
			.attr("width", w)
			.attr("height",h);

svg.selectAll("circle")
	.data(dataset)
	.enter()
	.append("circle")
	.attr("cx",function(d){ //NOTE: each data entry here is an array
		return xScale(d[0]);
	})
	.attr("cy",function(d){
		return yScale(d[1]);
	})
	.attr("r",function(d){
		return rScale(d[1]);
	});

svg.selectAll("text")
	.data(dataset)
	.enter()
	.append("text")
	.text(function(d){
		return d[0]+","+d[1];
	})
	.attr("x",function(d){
		return xScale(d[0]);
	})
	.attr("y", function(d){
		return yScale(d[1]);
	})
	.attr("font-size", "11px")
	.attr("fill", "red")
	.attr("font-family", "sans-serif");



