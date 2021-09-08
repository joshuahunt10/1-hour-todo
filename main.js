// Need a basic list
// Use a ul list
// Have an input to add the items to the list
// Click the item and mark it off
// Clear the list of checked off items button
let todoId = 0;
const root = document.querySelector(':root');
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector("#todo-form").addEventListener("submit", function(e) {
  e.preventDefault();
  addTodo(todoInput.value);
  resetForm();
})

const clearButton = document.querySelector("#clear-button").addEventListener("click", function(e) {
  e.preventDefault();
  removeDoneItems();
})

const switchTheme = function(currTheme) {
  // Not working. Maybe something to do with codePen. Oh well good try.
  if(currTheme === "light") {
    root.style.setProperty('--primary-background', 'green');
    root.style.setProperty('--primary-text', 'yellow');
    root.style.setProperty('--secondary-text', 'black');
  } else {
    root.style.setProperty('--primary-background', 'black');
    root.style.setProperty('--primary-text', 'grey');
    root.style.setProperty('--secondary-text', 'white');
  }
  document.querySelector(".theme-picker").dataset.theme = currTheme === "light" ? "dark" : "light";
}

const themePicker = document.querySelector(".theme-picker").addEventListener("click", function(e) {
  switchTheme(e.target.dataset.theme);
});

const addTodo = function(todoString) {
  const listItem = document.createElement("li");
  listItem.innerHTML = todoString;
  listItem.dataset.status = "todo";
  listItem.dataset.id = todoId;
  todoId++;
  listItem.addEventListener("click", function(e) {
    markDone(e.target.dataset.id)
  });

  todoList.appendChild(listItem);
}

const markDone = function(id) {
  const el = document.querySelector(`[data-id='${id}']`);
  el.dataset.status = "done";
}

const resetForm = function() {
  todoInput.value = "";
}

const removeDoneItems = function() {
  const doneItems = document.querySelectorAll("[data-status='done']");
  doneItems.forEach(node => node.remove());
}