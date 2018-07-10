// Select your div
const waffle = d3.select('.waffle')

// Create an array with numbers 0 - 100
const numbers = [...Array(100).keys()]

// For each item in the array, add a div element
const block = waffle
  .selectAll('.block')
  .data(numbers)
  .enter()
  .append('div')
  .attr('class', 'block')
  // if the number is less than 5, color it red
  // otherwise, color it gray
  .style('background-color', function(d){
    if (d < 5) return `#FE4A49`
    else return `#CCCCCC`
  })
