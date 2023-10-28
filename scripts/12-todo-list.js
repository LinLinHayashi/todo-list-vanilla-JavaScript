const todoList = [{name: 'make dinner', dueDate: '2022-12-22'}, {name: 'wash dishes', dueDate: '2022-12-22'}];

renderTodoList();

function renderTodoList() { // This function generates the HTML code to be used in the container.
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const {name, dueDate} = todoObject; // This is the container to contain each element of the array, which in this case is an object with name and dueDate properties.
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-todo-button js-delete-todo-button">Delete</button>
  `;
  todoListHTML += html;
  });

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => { // Notice we use querySelectorAll here.
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
      renderTodoList();
    });
  });
}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
});

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  console.log(inputElement); // inputElement stores what '.js-name-input' refers to, which is the <input> element.
  const name = inputElement.value;
  console.log(name); // name stores the value having been input into the <input> element.

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    name: name,
    dueDate: dueDate});
  console.log(todoList);
  inputElement.value = ''; // Reset the value having been input into the <input> element.

  renderTodoList();
}
