const todo = [];


document.querySelector("button").addEventListener("click",()=>{
    addTodo();
});
function addTodo() {
    const item = document.querySelector("input");
    const date = document.querySelector(".date");

    if (item.value.trim() === '') {
        alert("Please enter a valid todo");
        return;
    }

    // Create a todo object with the name and due date
    const todoObj = {
        name: item.value, 
        duedate: date.value
    };

    todo.push(todoObj); // Add the todo object to the todo array
    item.value = ""; // Clear the input field
    date.value = ""; // Clear the date field
    displayTodo(); // Update the display
}

function deleteTodo(index) {
    todo.splice(index, 1); // Remove the item at the specified index
    displayTodo(); // Update the display after deletion
}

function displayTodo() {
    let val = '';
    todo.forEach((todoobj , index)=>{
        val += `<div>${todoobj.name}</div>  
                <div>${todoobj.duedate}</div>
                <button onclick="deleteTodo(${index})" class="delete">Delete</button>`;
    });
    document.querySelector('.list').innerHTML = val; // Update the list display
}
