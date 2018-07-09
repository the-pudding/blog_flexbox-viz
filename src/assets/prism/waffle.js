// Select your div
const waffle = d3.select('.waffle')

// Append a div to contain all of your blocks
// Give it the class "container"
const container = waffle.append('div.container')

// Create an array with numbers 0 - 100
const numbers = [...Array(100).keys()]

// Add a "state" attribute to each number in the array.
// If the number is 5 or less, make the state "true"
// Otherwise, it's false
const trueVals = numbers.map(function(d){
  let state = null
  if (d <= 5) state = 'true'
  else state = 'false'
  return {number: d, state: state}
})

// For each item in the array, add a div element
const block = container
  .selectAll('.block')
  .data(trueVals)
  .enter()
  .append('div')
  // give it a class which contains the state attribute
  .attr('class', function(d, i){
    return `block block-${d.state}`
  })
