document.querySelector("form").addEventListener("submit", handelSubmitForm);
document.querySelector("ul").addEventListener("click", handlerclick);

function handelSubmitForm(e) {
  e.preventDefault();
  let input = document.querySelector("input");
  if (input.value != "") getData(input.value);
  addTodosDom(input.value);
  input.value = "";
}

function handlerclick(e) {
  if (e.target.name == "checkBtn") checkTodo(e);

  if (e.target.name == "deleteBtn") deleteTodo(e);
}

async function addTodosDom() {
  const todos = await getData();
  let ul = document.querySelector("ul");
  todos.forEach((todo) => {
    let li = document.createElement("li");
    li.classList.add("todo-list-item");
    ul.appendChild(li);

    li.innerHTML = `
        <input type="checkbox" class="BtnJs name="checkBtn">
        <div class="todo-item">${todo}</div>
        <button class="BtnJs" name="deleteBtn"><i class="fas fa-trash"></i></button>
    `;
  });
}

function checkTodo(e) {
  let item = e.target.parentNode;
  if (item.style.textDecoration == "line-through")
    item.style.textDecoration = "none";
  else item.style.textDecoration = "line-through";
}

function deleteTodo(e) {
  let item = e.target.parentNode;
  item.remove();
}
