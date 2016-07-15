// drek
console.log( "d3 version is " + d3.version );
d3.select('.d3-here').append('p').text('Hello, this is D3 practice.');

// templates
var nodesQ = 0;
var nodes = [];
var links = [];

//  Options
var $c_01 = '#21b1e0',
	$c_02 = '#1abc9c',
	$c_03 = '#1d7e6b';
var maxValues = 20;
var minValues = 4;
var maxValY = 400;
var maxY = 400;
var minY = 50;
var width = 600;
var height = 400;
var nodeRadius = 5;
var gap = 2;
var lineWidth = 3;
var ticksX = 2;
var ticksY = 2;

// Logic
function randomNodes() {
	nodesQ = Math.floor(Math.random() * (maxValues - minValues)) + minValues;
	ticksX = nodesQ - 1;
	console.log(nodesQ);
	var item = { x: 0, y: 0 };
	for (var i = 0; i < nodesQ; i++) {
		item.x = i * 50;
		item.y = Math.floor(Math.random() * (maxY - minY)) + minY;
		nodes.push({ x: item.x, y: item.y });
	}
}

randomNodes();


for(var i = 0; i < (nodes.length - 1); i++) {
	links.push({
		source: nodes[i],
		target: nodes[i + 1]
	});
}

// масштабирование
var widthScale = d3.scaleLinear()
	.domain([0, nodes[nodes.length - 1].x ])
	.range([0 , width - 20]);

var heightScale = d3.scaleLinear()
	.domain([0, maxValY])
	.range([0, height - 100]);

// создаем линейки
var axis = d3.axisBottom(widthScale)
	.ticks(ticksX);

var axisRight = d3.axisRight(heightScale)
	.ticks(ticksY);

// прицепляемся к элементу
var canvas = d3.select('.d3-here')
	.append('svg')
	.attr('width', width + 50)
	.attr('height', height)
	.append('g')
	.attr('transform', 'translate(10, 10)');

// фоновые rect-ы
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

// линии графика
canvas.append('g').attr('class', 'svg-lines').selectAll('.line')
	.data(links)
	.enter()
	.append('line')
	.attr('x1', function(d) { return widthScale(d.source.x); })
	.attr('y1', function(d) { return heightScale(d.source.y); })
	.attr('x2', function(d) { return widthScale(d.target.x); })
	.attr('y2', function(d) { return heightScale(d.target.y); })
	.style('stroke', $c_03)
	.attr('stroke-width', lineWidth);

// точки
canvas.append('g').attr('class', 'svg-nodes').selectAll('circle .nodes')
	.data(nodes)
	.enter()
		.append('svg:circle')
		.attr('class', 'nodes')
		.attr('cx', function(d) { return widthScale(d.x); })
		.attr('cy', function(d) { return heightScale(d.y); })
		.attr('r', nodeRadius)
		.attr('fill', $c_01)
		.attr('stroke', '#fff')
		.attr('stroke-width', gap);

// прицепляем линейки - внизу и справа
canvas.append('g')
	.attr('transform', 'translate(0,' + (height - 90) + ')')
	.attr('class', 'axisX')
	.call(axis);

canvas.append('g')
	.attr('transform', 'translate(' + width + ', 0)')
	.attr('class', 'axisY')
	.call(axisRight);

// interaction ...
$('.svg-nodes circle').on('click', function(){
	console.log('node click');
});

$('.svg-rects-bg rect').on('click', function(){
	console.log('rect click');
});