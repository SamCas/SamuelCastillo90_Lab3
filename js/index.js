$(document).ready(function () {

    // Submit Event
    $('.todoForm').submit(function (e) { 
        e.preventDefault();
        let message = $('.newTodo').val(); 
        addTodo(message);
    });  

    $('.clearButton').click(function (e) { 
        clearAll();
    });

    $('.markAllButton').click(function (e) { 
        markAll();
    });

    $('.deleteButton').click(function (e) { 
        deleteAll();
    });

});

function addTodo(message) {
    console.log(message);
    $('.listOfTodos').append('<p class="newTodo">'+message+'<input class="chbx" type="checkbox"/>'+'</p>');
}

function clearAll() {
    $('.chbx').each(function () {
       this.checked = false; 
    });
}

function markAll() {
    $('.chbx').each(function () {
        this.checked = true;
    });
}

function deleteAll() {
    $('.listOfTodos').empty();
}