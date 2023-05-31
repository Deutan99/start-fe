const toDoForm = document.querySelector('.new-task');
const toDoInput = document.querySelector('.new-task input');
const toDoList = document.querySelector('ul');
const $delete = document.querySelector('.delete');

let toDos = [];
const TODOS_KEY = 'todos';

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id, 10));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement('li');
  li.id = newTodo.id;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'toggle-checked';
  checkbox.addEventListener('change', (event) => {
    const li = event.target.parentElement;
    li.classList.toggle('completed');
    saveToDos();
  });

  const span = document.createElement('span');
  span.innerText = newTodo.text;
  span.style.cssText = `
      margin-left: 10px;
    `;

  const button = document.createElement('button');
  button.innerText = '×';
  button.style.cssText = `
      float: right;
      font-weight: bold;
      background: none;
      font-size: 1em;
      border: none;
      position: relative;
    `;
  button.addEventListener('click', deleteToDo);
  $delete.addEventListener('click', deleteToDo);

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);

  toDos.push(newTodo); // toDos 배열에 항목을 추가한 후에
  saveToDos(); // saveToDos 함수를 호출합니다.
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;

  toDoInput.value = '';
  const newTodoObject = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObject);
  paintToDo(newTodoObject);
  saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
