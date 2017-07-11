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


// Append more list items

// let li = d3.select('.items').selectAll('li')
//             .data(numArray)
//             .text(function(data){
//                 return `This is item number ${data}`;
//             })

//             li.enter().append('li')
//             .text(function(data){
//                 return `This is item number ${data}`;
//             })

//             li.exit().remove();


// let name = 'Jungmin Ji';

// d3.select('.name').text(name);


// Basic Static Chart
let styles = [{
        'background': 'red',
        'color': 'while',
        'width': '35',
    },
    {
        'background': 'green',
        'color': 'while',
        'width': '70',
    },
    {
        'background': 'blue',
        'color': 'while',
        'width': '45',
    },
    {
        'background': 'tan',
        'color': 'while',
        'width': '10',
    },
    {
        'background': 'skyblue',
        'color': 'while',
        'width': '80',
    },
    {
        'background': 'pink',
        'color': 'while',
        'width': '50',
    },
    {
        'background': 'orange',
        'color': 'while',
        'width': '20',
    }
];


d3.selectAll('.items li')
    .data(styles)
    .style({
        'font-size': '18px',
        'padding': '6px',
        'margin': '4px',
        'list-style': 'none',
        'background': function (d) {
            return d.background;
        },
        'color': function (d) {
            return d.color;
        },
        'width': function (d) {
            return `${d.width}%`;
        }
    })