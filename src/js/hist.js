// include data (this could be imported)
const location = [{
  name: 'Matt',
  state: 'NY'
}, {
  name: 'Ilia',
  state: 'NY'
}, {
  name: 'Jan',
  state: 'NY'
}, {
  name: 'Caitlyn',
  state: 'NY'
}, {
  name: 'Russell',
  state: 'MA'
}, {
  name: 'Amber',
  state: 'WA'
}]

const nest = d3.nest()
  .key(d => d.state)
  .entries(location)

  console.log({location, nest})

// select the figure element
const hist = d3.select('.hist-chart')

// Add 3 groups
// one for each state
const group = hist
  .selectAll('.group')
  .data(nest)
  .enter()
  .append('div')
  .attr('class', 'group')

// in each group add the appropriate number of blocks
const block = group
  .selectAll('.block')
  .data(d => d.values)
  .enter()
  .append('div')
  .attr('class', 'block')

// add a state label to each group
const label = group
  .selectAll('.label')
  .data(d => [d])
  .enter()
  .append('text')
  .text(d => d.key)
//
// console.log({synth})
