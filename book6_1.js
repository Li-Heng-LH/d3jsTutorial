//randomised barchart
var dataset = [];
for (var i = 0; i<25; i++){
	var num = Math.floor(Math.random()*30);
	dataset.push(num);
}

d3.select("body").selectAll("div")
	.data(dataset)
	.enter()
	.append("div")
	.attr("class", "bar")
	.style("height", function(d){
		return d*5 +"px";
	});

console.log(d3.selectAll("div")); //to see __data__
console.log(dataset);