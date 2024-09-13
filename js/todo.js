const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];
// 요소 추가해도 value는 still array라 오류 없음
// object & arr: reference type 

function saveToDos() {
    // localStorage에 toDos[]저장

  localStorage.setItem("todos", JSON.stringify(toDos));
    // localStorage는 문자열만 저장 가능 받은 배열을 .stringify
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
  }

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);

  //append()는 마지막에
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
   // 엔터치면 해당 박스에서 글자 사라지도록
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);