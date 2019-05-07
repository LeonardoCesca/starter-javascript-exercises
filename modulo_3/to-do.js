var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var list = [
    'Fazer café',
    'Estudar JS',
    'Dormir'
];

function renderAll() {
    listElement.innerHTML = '';
    for(todo of list) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        
        var linkElement = document.createElement('a'); 
        var linkText = document.createTextNode('Remove'); 

        linkElement.setAttribute('href', '#');
        
        var position = list.indexOf(todo); 

        linkElement.setAttribute('onclick', 'deleteAll(' + position + ')');

        linkElement.appendChild(linkText);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

renderAll();

function addAll() {
    var todoText = inputElement.value;

    list.push(todoText);
    inputElement.value = '';
    renderAll();
}

buttonElement.onclick = addAll;

function deleteAll(position) {
    list.splice(position, 1);
    renderAll();
}