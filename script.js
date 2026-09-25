const todoInput=document.getElementById("todoInput");
const addBtn =document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click",function(){
  const todoText = todoInput.value;
  
  const li =document.createElement("li");

  li.textContent = todoText;

  todoList.appendChild(li);
});