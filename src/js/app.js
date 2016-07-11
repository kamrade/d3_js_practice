var $c_01 = '#21b1e0',
	$c_02 = '#1abc9c',
	$c_03 = '#1d7e6b';

console.log( d3.version );
d3.select('.d3-here').append('p').text('Hello, this is D3 practice start point.');

var width = 400;
var height = 400;

var canvas = d3.select('.d3-here')
	.append('svg')
	.attr('width', width)
	.attr('height', height);

var circle = canvas.append('circle')
	.attr('cx', 200)
	.attr('cy', 200)
	.attr('r', 100)
	.attr('fill', $c_01);

var rect = canvas.append('rect')
	.attr('width', 100)
	.attr('height', 100)
	.attr('fill', $c_02);

var line = canvas.append('line')
	.attr('x1', 10)
	.attr('y1', 120)
	.attr('x2', 100)
	.attr('y2', 400)
	.attr('stroke', $c_03)
	.attr('stroke-width', 5);
