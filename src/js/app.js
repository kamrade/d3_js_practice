var $c_01 = '#21b1e0',
	$c_02 = '#1abc9c',
	$c_03 = '#1d7e6b';

console.log( d3.version );
d3.select('.d3-here').append('p').text('Hello, this is D3 practice start point.');

var width = 400;
var height = 400;
var barHeight = 50;

var dataArray = [10, 30, 450];

var canvas = d3.select('.d3-here')
	.append('svg')
	.attr('width', width)
	.attr('height', height);

var bars = canvas.selectAll('rect')
	.data(dataArray)
	.enter()
		.append('rect')
		.attr('width', function(d, i) {
			return d;
		})
		.attr('height', barHeight)
		.attr('y', function(d, i) {
			console.log(d);
			return i * barHeight * 1.2;
		});
