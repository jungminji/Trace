// d3.selectAll('li:nth-child(odd)').style('color', 'red').html('This is an odd number').classed('big', true);

var numArray = [12, 20, 33, 40, 55, 60, 75, 100, 120, 130];

// Bind array to li tag

// d3.selectAll('.items li')
//     .data(numArray)
//     .text(function(data){
//         return `This is item number ${data}`;
//     });

// d3.selectAll('.items li')
//     .data(numArray)
//     .style('font-size', function(data){
//         return `${data}px`;
//     })

let li = d3.select('.items').selectAll('li')
            .data(numArray)
            .text(function(data){
                return `This is item number ${data}`;
            })

            li.enter().append('li')
            .text(function(data){
                return `This is item number ${data}`;
            })

            li.exit().remove();


let name = 'Jungmin Ji';

d3.select('.name').text(name);