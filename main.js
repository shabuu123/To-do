//Select the form and input elements
const form = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Event listener for form submission
form.addEventListener('submit', function (e) {
  e.preventDefault();
  addTodo();
});

// Function to add a new to-do note
function addTodo() {
  const todoText = todoInput.value;
  
  // Check if the input is not empty
  if (todoText.trim() === '') {
    alert('Please enter a note.');
    return;
  }

  // Create a new list item for the to-do
  const li = document.createElement('li');
  li.textContent = todoText;

  // Create edit button
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.classList.add('edit');
  editButton.onclick = function () {
    editTodoItem(li);
  };

  // Create delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.onclick = function () {
    deleteTodoItem(li);
  };

  // Append buttons to the list item
  li.appendChild(editButton);
  li.appendChild(deleteButton);

  // Append the list item to the to-do list
  todoList.appendChild(li);

  // Clear the input field
  todoInput.value = '';
}

// Function to edit an existing to-do note
function editTodoItem(li) {
  const currentText = li.firstChild.nodeValue;
  const newText = prompt('Edit your note:', currentText);
  
  // If user enters a new value, update the note
  if (newText !== null && newText.trim() !== '') {
    li.firstChild.nodeValue = newText;
  }
}

// Function to delete a to-do note
function deleteTodoItem(li) {
  todoList.removeChild(li);
}