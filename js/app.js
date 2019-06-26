function createTodo(todo) {
  // DECLARATIONS
  const divTodo = document.createElement('div');
  const labelTodo = document.createElement('label');
  const inputCheckBox = document.createElement('input');
  const spanCheckBox = document.createElement('span');
  const spanTodo = spanCheckBox.cloneNode();
  const buttonClose = document.createElement('button');

  // CONFIGURATION
  divTodo.className = 'todo';
  inputCheckBox.type = 'checkbox';
  spanTodo.textContent = todo;
  buttonClose.className = 'bt-close';
  buttonClose.innerHTML = '&times;';
  buttonClose.onclick = deleteTodo.bind(divTodo, inputCheckBox);

  // IMBRICATION
  divTodo.appendChild(labelTodo);
  divTodo.appendChild(buttonClose);
  labelTodo.appendChild(inputCheckBox);
  labelTodo.appendChild(spanCheckBox);
  labelTodo.appendChild(spanTodo);


  document.querySelector('.todolist').appendChild(divTodo);
}

function addTodo(e) {
  e.preventDefault();
  const todo = e.target.todo.value;
  if (todo.length > 0) {
    createTodo(todo.trim());
    e.target.reset();
  }
}

function deleteTodo(checkbox) {
  let remove = true;
  if (!checkbox.checked) {
    remove = confirm('La tâche est en cours,\nVoulez-vous vraiment la supprimer ?');
  }
  if (remove) this.remove();
}
