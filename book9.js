//bar chart with labels
var w = 500;
var h = 220;
var barPadding = 1;
var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
                11, 12, 15, 20, 18, 17, 16, 18, 23, 25];

var svg = d3.select("body")
			.append("svg")
			.attr("width", w)
			.attr("height",h);

var yScale = d3.scale.linear()
				.domain([0,d3.max(dataset)])
				.range([0,h-5])
				.nice();

svg.selectAll("rect")
	.data(dataset)
	.enter()
	.append("rect")
	.attr("x",function(d,i){
		return i*(w/dataset.length);
	})
	.attr("y",function(d){
		return h-yScale(d);
	})
	.attr("width",w/dataset.length-barPadding)
	.attr("height",function(d){
		return yScale(d);
	})
	.attr("fill", function (d) {
		return "rgb(0,0,"+(d*10)+")";
	});

svg.selectAll("text")
	.data(dataset)
	.enter()
	.append("text")
	.text(function(d){
		return d;
	})
	.attr("x",function(d,i){
		return i*(w/dataset.length)+5;
	})
	.attr("y", function(d){
		return h-yScale(d)+15;
	})
	.attr("fill","white")
	.attr("font-family","sans-serif")
	.attr("font-size","11px");

d3.select("body")
	.append("p")
	.text("click here!")
	.on("click", function() {
		//console.log("clicked")
		dataset = [ 11, 12, 15, 20, 18, 17, 16, 18, 23, 25,
                5, 10, 13, 19, 21, 25, 22, 18, 15, 13 ];
    	svg.selectAll("rect")
			.data(dataset)
			.transition() //nice effect here!!!
			.duration(400)
			.attr("y",function(d){
				return h-yScale(d);
			})
			.attr("height",function(d){
				return yScale(d);
			})
			.attr("fill", function(d){
				return "rgb(0,0,"+(d*10)+")";
			});

		svg.selectAll("text")
			.data(dataset)
			.transition()
			.duration(400)
			.text(function(d){
				return d;
			})
			.attr("x",function(d,i){
				return i*(w/dataset.length)+5;
			})
			.attr("y", function(d){
				return h-yScale(d)+15;
			});
	});




