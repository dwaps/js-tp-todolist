function createTodo() {
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
  spanTodo.textContent = 'Lorem ipsum dolor sit amet consectetur.';
  buttonClose.className = 'bt-close';
  buttonClose.innerHTML = '&times;';

  // IMBRICATION
  divTodo.appendChild(labelTodo);
  divTodo.appendChild(buttonClose);
  labelTodo.appendChild(inputCheckBox);
  labelTodo.appendChild(spanCheckBox);
  labelTodo.appendChild(spanTodo);


  document.querySelector('.todolist').appendChild(divTodo);
}
