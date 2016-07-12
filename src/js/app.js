var $c_01 = '#21b1e0',
	$c_02 = '#1abc9c',
	$c_03 = '#1d7e6b';

console.log( d3.version );
d3.select('.d3-here').append('p').text('Hello, this is D3 practice.');

var nodes = [
	{x: 0, y: 50},
	{x: 50, y: 80},
	{x: 100, y: 120},
	{x: 150, y: 150},
	{x: 200, y: 80},
	{x: 250, y: 120},
	{x: 300, y: 9},
	{x: 350, y: 300},
	{x: 400, y: 310},
	{x: 450, y: 100},
	{x: 500, y: 380},
	{x: 550, y: 230},
	{x: 600, y: 280},
	{x: 650, y: 440},
	{x: 700, y: 230},
	{x: 750, y: 28},
	{x: 800, y: 230},
	{x: 850, y: 230},
	{x: 900, y: 30},
	{x: 950, y: 60},
	{x: 1000, y: 10}
];

var links = [];
for(var i = 0; i < (nodes.length - 1); i++) {
	links.push({
		source: nodes[i],
		target: nodes[i + 1]
	});
}

var width = 1200;
var height = 600;
var gap = 4;
var lineWidth = 3;

var widthScale = d3.scaleLinear()
	.domain([0, nodes[nodes.length - 1].x ])
	.range([0 , width - 20]);

console.log( nodes[nodes.length - 1].x );

var axis = d3.axisBottom(widthScale);

var canvas = d3.select('.d3-here')
	.append('svg')
	.attr('width', width + 50)
	.attr('height', height)
	.append('g')
	.attr('transform', 'translate(10, 10)');


canvas.text('The Graph')
	.select('.d3-here');

canvas.append('g').attr('class', 'svg-rects-bg').selectAll('.rect')
	.data(links)
	.enter()
		.append('rect')
		.attr('width', function(d, i) {
			return widthScale(d.target.x) - widthScale(d.source.x) - gap ;
		})
		.attr('height', height-100)
		.attr('x', function(d, i) { return widthScale(d.source.x) + gap/2; })
		.attr('fill', $c_02)
		.attr('opacity', '.1');


canvas.append('g').attr('class', 'svg-lines').selectAll('.line')
	.data(links)
	.enter()
	.append('line')
	.attr('x1', function(d) { return widthScale(d.source.x); })
	.attr('y1', function(d) { return d.source.y; })
	.attr('x2', function(d) { return widthScale(d.target.x); })
	.attr('y2', function(d) { return d.target.y; })
	.style('stroke', $c_03)
	.attr('stroke-width', lineWidth);

canvas.append('g').attr('class', 'svg-nodes').selectAll('circle .nodes')
	.data(nodes)
	.enter()
		.append('svg:circle')
		.attr('class', 'nodes')
		.attr('cx', function(d) { return widthScale(d.x); })
		.attr('cy', function(d) { return d.y; })
		.attr('r', 5)
		.attr('fill', $c_01)
		.attr('stroke', '#fff')
		.attr('stroke-width', gap);


canvas.append('g')
	.attr('transform', 'translate(0,' + (height - 90) + ')')
	.attr('class', 'axis')
	.call(axis);

$('.svg-nodes circle').on('click', function(){
	console.log('click');
});