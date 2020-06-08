import Todo from "./Todo.js";
import TodosManager from "./TodosManager.js";

// 날짜 넣기
// Declaration with let, const
let now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();

// Templete Literal 을 이용하여 날짜 표현
const dateExp = `${year}년 ${month}월 ${date}일`
const dateArea = document.querySelector(".title h2");
dateArea.innerText = dateExp;

// 남은 할일 갯수를 표기할 span 영역
const remainder = document.querySelector(".remainder span");

// 전체 할일 관리 클래스
const todos = new TodosManager();

// 할일 클릭시 done 속성의 true/false 전환
// 부모요소(.todo-container)에 이벤트를 위임하는 방식으로 처리
document.querySelector(".todo-container").addEventListener("click", e => {
    const target = e.target;
	todos.todosList.forEach(todo => {
		if (todo.contents == target.nextSibling.innerText.trim()) {
			todo.toggle();
		}
	});
    remainder.innerText = todos.leftTodoCount;
});

// 할일 추가 버튼
const addBtn = document.querySelector(".add-todo button");
addBtn.onclick = () => {
	const todoInput = document.querySelector(".add-todo input")
	const todoTxt = todoInput.value;
	if (!todoTxt) {
		window.alert("할 일을 입력하세요.");
		return;
	}
	todoInput.value = "";
	todos.addTodo(todoTxt);

    // .todo-container에 새로 추가한 할일 목록 생성
    const ctnr = document.querySelector(".todo-container");
    const divTag = document.createElement("div");
    divTag.className = "todo";
    const inputTag = document.createElement("input");
    inputTag.type = "checkbox";
    const labelTag = document.createElement("label");
    labelTag.innerText = " " + todos.getList()[todos.getList().length-1].contents;
    divTag.appendChild(inputTag);
    divTag.appendChild(labelTag);
    ctnr.appendChild(divTag);

    // 남은 할일 갯수 업데이트
    remainder.innerText = todos.leftTodoCount;
}