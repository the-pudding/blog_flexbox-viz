// Enter data (this could have been imported)
const socialMedia = [
	{
		month: 'April',
		counts: { Facebook: 7045, YouTube: 4816, Twitter: 4717, Instagram: 96 }
	},
	{
		month: 'May',
		counts: { Facebook: 11401, YouTube: 1708, Twitter: 10433, Instagram: 129 }
	},
	{
		month: 'June',
		counts: { Facebook: 16974, YouTube: 3190, Twitter: 9874, Instagram: 471 }
	}
];

// Set a constant value for the height of our finished graphic
const height = 400;

// Add a total value for each month
const smTotal = socialMedia.map(d => {
	const counts = d3.entries(d.counts);
	const total = d3.sum(counts, c => c.value);
	return { month: d.month, counts, total };
});

const max = d3.max(smTotal, d => d.total);

// create a Y scale for the data
const scaleY = d3
	.scaleLinear()
	.range([0, 200])
	.domain([0, d3.max(smTotal, d => d.total)]);

const scaleColor = d3
	.scaleOrdinal()
	.range(['#FE4A49', '#cccccc', '#dddddd', '#eeeeee'])
	.domain(['Facebook', 'YouTube', 'Twitter', 'Instagram']);

// Select the figure element
const stack = d3.select('.stack-chart');

// Add a div for each month
const group = stack
	.selectAll('.group')
	.data(smTotal)
	.enter()
	.append('div')
	.attr('class', 'group');

// Add a block for each social media type
// And scale the height of the box based on the value
const block = group
	.selectAll('.block')
	.data(d => d.counts)
	.enter()
	.append('div')
	.attr('class', 'block')
	.style('height', d => `${scaleY(d.value)}px`)
	.style('background-color', d => `${scaleColor(d.key)}`);

const label = group
	.append('text')
	.text(d => d.month)
	.attr('class', 'label');

const count = group
	.append('text')
	.text(d => d3.format('0.2s')(d.total))
	.attr('class', 'count');
