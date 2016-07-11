var $c_01 = '#21b1e0',
	$c_02 = '#1abc9c',
	$c_03 = '#1d7e6b';

console.log( d3.version );

var width = 500;
var height = 500;

var canvas = d3.select('.d3-s-are-here')
	.append('svg')
	.attr('width', width)
	.attr('height', height);

d3.select('.d3-here').append('p').text('Hello, this is D3 practice start point.');

