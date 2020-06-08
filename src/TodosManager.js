import Todo from "./Todo.js";

class TodosManager {
	constructor() {
		this.todosList = [];
	}
	addTodo(contents, done = false) {
		const todo = new Todo(contents, done);
		this.todosList.push(todo);
	}
	getList() {
		return this.todosList;
	}
	get leftTodoCount() {
		const tasksLeft = this.todosList.filter(todo => todo.done === false);
		return tasksLeft.length;
	}
}

export default TodosManager;