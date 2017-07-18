// Actual DOM control
let mountElement = document.querySelector('.actual-dom');

let example = document.createElement('div');
example.setAttribute('class', 'example');

let message = document.createElement('p');
message.setAttribute('class', 'message');
let messageContent = document.createTextNode('Howdy!');

example.appendChild(message);
message.appendChild(messageContent);
mountElement.appendChild(example);


// Virtual DOM control
// CommonJS module loading
const h = require('virtual-dom/h');
const createElement = require('virtual-dom/create-element');
const diff = require('virtual-dom/diff');
const patch = require('virtual-dom/patch');

// Data
let count = 0;
let list = [
    'Vue',
    'Angular',
    'React'
];


// Return: Create a virtual tree of DOM element, This is an object to demonstrate tree structure
function render(data) {
    return h('div.v-example', [
        h('p.message', `Virtual model tree ${data}`)
    ]);
}

function renderList(data) {
    let items = data.map(function (item, index) {
        return h('li', [item, h('button', {
            type: 'button',
            onclick: function (e) {
                data.splice(index, 1); // Remove 1 item at index
                update();
            }
        }, 'Delete')]);
    });
    return h('ul', items);
}

function renderAdd(data) {
    let input = h('input.add-content', {
        type: 'text',
        placeholder: 'Add items'
    });
    let addBtn = h('button.add-btn', {
        type: 'button',
        onclick: function (e) {
            let input = document.querySelector('.add-content');
            data.push(input.value);
            update();
            input.value = '';
        }
    }, 'Add');
    let container = h('div.container', [
        input, addBtn
    ]);
    return container;
}

// Data change : update virtual DOM
function update() {
    // Create virtual dom on data change
    let currentTree = render(count);

    // Compare Current and Old DOMs
    let changes = diff(virtualTree, currentTree);

    rootTree = patch(rootTree, changes);

    // Patch, if DOM has change
    virtualTree = currentTree;


    // For the list
    let currentList = renderList(list);
    let changesList = diff(virtualList, currentList);
    rootList = patch(rootList, changesList);
    virtualList = currentList;

}

// Virtual Tree has a virtual dom object
let virtualTree = render(count);
// List
let virtualList = renderList(list);
// Addbtn
let virtualAddBtn = renderAdd(list);

// Virtual tree -> Actual DOM (HTMLElement)
let rootTree = createElement(virtualTree);
// List
let rootList = createElement(virtualList);
// Addbtn
let AddBtn = createElement(virtualAddBtn);

// Mounting
let mountVirtualElement = document.querySelector('.virtual-dom');
mountVirtualElement.appendChild(rootTree);
mountVirtualElement.appendChild(rootList);
mountVirtualElement.appendChild(AddBtn);


// window.setInterval(() => {
//     count++;

//     list.forEach(function(item, index){
//        list[index] += '@';
//     });

//     update();

// }, 1000)