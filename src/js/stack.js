let smData = null

// Import data from csv
d3.csv('assets/data/stack.csv', function(error, data){
  if (error) throw error;
  smData = data
  console.log({data})
})



console.log({smData})

// Set a constant value for the height of our finished graphic
const height = 400

// Add a total value for each month
const smTotal = socialMedia.map(d => {
  const counts = d.counts
  const total = counts.Facebook + counts.YouTube + counts.Twitter + counts.Instagram
  return {month: d.month, counts: d.counts, total: total}
})

// create a Y scale for the data
const scaleY = d3.scaleLinear()
  .range([height, 0])
  .domain([0, d3.max(smTotal, d => d.total)])

// Select the figure element
const stack = d3.select('.stack-chart')

// Add a div for each month
const group = stack
  .selectAll('.group')
  .data(smTotal)
  .enter()
  .append('div')
  .attr('class', 'group')

// Add a block for each social media type
// And scale the height of the box based on the value
const block = group
  .selectAll('.block')
  .data(d => {
    console.log(d)
    return d.counts
  })
  .enter()
  .append('div')
  .attr('class', 'block')
  //.style('height', scaleY(d.))
