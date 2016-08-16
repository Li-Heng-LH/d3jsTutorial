var w = 500;
var h = 100;
var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
                11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

var svg = d3.select("body")
			.append("svg")
			.attr("width", w)
			.attr("height",h);

svg.selectAll("rect")
	.data(dataset)
	.enter()
	.append("rect")
	.attr("x",function(d,i){
		return i*21;
	})
	.attr("y",0)
	.attr("width",20)
	.attr("height",100)
	.attr("fill", "blue");

