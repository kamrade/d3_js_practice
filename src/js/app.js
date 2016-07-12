var $c_01 = '#21b1e0',
	$c_02 = '#1abc9c',
	$c_03 = '#1d7e6b';

console.log( d3.version );
d3.select('.d3-here').append('p').text('Hello, this is D3 practice.');

var dataArray = [10, 30, 450, 1200, 244, 100, 12, 460, 20, 230, 490];

var width = 400;
var height = dataArray.length * 10 + 100;
var barHeight = 10;


var widthScale = d3.scaleLinear()
	.domain([0, 1200])
	.range([0, width-50]);

var colorScale = d3.scaleLinear()
	.domain([0, 1200])
	.range(['#333', '#777']);

var axis = d3.axisTop(widthScale)
	.ticks(5);

var canvas = d3.select('.d3-here')
	.append('svg')
	.attr('width', width)
	.attr('height', height)
	.append('g')
	.attr('transform', 'translate(10, ' + barHeight * 5 + ')');

canvas.append('g')
	.attr('transform', 'translate(0, -20)')
	.attr('class', 'axis')
	.call(axis);


var bars = canvas.selectAll('rect')
	.data(dataArray)
	.enter()
		.append('rect')
		.attr('width', function(d, i) {
			return widthScale(d);
		})
		.attr('fill', function(d, i) {
			return colorScale(d);
		})
		.attr('height', barHeight)
		.attr('y', function(d, i) {
			return i * barHeight * 1.2;
		});
