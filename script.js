const todoForm = document.querySelector("form");
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const todoValue = todoInput.value;

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  postTodosAPI();
});

const getTodosAPI = async () => {
  const todos = await getTodos();
  addTodosToDom(todos);
};
getTodosAPI();

const postTodosAPI = async () => {
  const newTodo = { description: todoInput.value, done: false };
  const newTodofromAPI = await postTodo(newTodo);
  const arrayTodos = [];
  arrayTodos.push(newTodofromAPI);
  addTodosToDom(arrayTodos);
};

const addTodosToDom = (todos) => {
  todos.forEach((todo) => {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const completedButton = document.createElement("input");
    completedButton.setAttribute("type", "checkbox");
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    completedButton.addEventListener("click", async (e) => {
      const item = e.target;
      const checkTodo = item.parentElement;
      checkTodo.classList.toggle("completed");
    });

    const newToDoLi = document.createElement("li");
    newToDoLi.innerText = todo.description;
    newToDoLi.classList.add("todo-item");
    todoDiv.appendChild(newToDoLi);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class = "fas fa-trash-alt"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    trashButton.addEventListener("click", async (e) => {
      const item = e.target;
      if (item.classList[0] === "trash-btn") {
        const DELtodo = item.parentElement;
        const id = todo._id;
        await deleteTodo(id);
        DELtodo.remove();
      }
    });

    todoList.appendChild(todoDiv);

    todoInput.value = "";
  });
};
