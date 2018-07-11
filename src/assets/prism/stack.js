// Enter data (this could have been imported)
const socialMedia = [{
  month: 'April',
  counts: {'Facebook': 7045, 'YouTube': 4816, 'Twitter': 4717, 'Instagram': 96}
}, {
  month: 'May',
  counts: {'Facebook': 11401, 'YouTube': 1708, 'Twitter': 10433, 'Instagram': 129}
}, {
  month: 'June',
  counts: {'Facebook': 16974, 'YouTube': 3190, 'Twitter': 9874, 'Instagram': 471}
}]

// Add a total value for each month
const smTotal = socialMedia.map(function(d){
  const values = d3.entries(d.counts)
  const total = d.counts.Facebook + d.counts.YouTube + d.counts.Twitter + d.counts.Instagram
  return {month: d.month, counts: values, total: total}
})

// create a Y scale for the data
const scaleY = d3.scaleLinear()
  .range([0, 200])
  .domain([0, d3.max(smTotal, function(d){
    return d.total
  })])

// create a color scale for the data where Facebook is red
const scaleColor = d3.scaleOrdinal()
  .range(['#FE4A49', '#cccccc', '#dddddd', '#eeeeee'])
  .domain(['Facebook', 'YouTube', 'Twitter', 'Instagram'])

// Select the figure element
const stack = d3.select('.stack')

// Add a div for each month
const group = stack
  .selectAll('.group')
  .data(smTotal)
  .enter()
  .append('div')
  .attr('class', 'group')

// Add a block for each social media type
const block = group
  .selectAll('.block')
  .data(function(d){
    return d.counts
  })
  .enter()
  .append('div')
  .attr('class', 'block')
  // And scale the height of the box based on the value
  .style('height', function(d){
    return `${scaleY(d.value)}px`
  })
  // Scale the color based on the social media type
  .style('background-color', function(d){
    return scaleColor(d.key)
  })

// Add a month label
const label = group
  .append('text')
  .text(function(d){
    return d.month
  })
  .attr('class', 'label')

// Add a total count label
const count = group
  .append('text')
  .text(function(d){
    return d3.format('0.2s')(d.total)
  })
  .attr('class', 'count')
