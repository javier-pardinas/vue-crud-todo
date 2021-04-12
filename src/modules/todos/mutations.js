//Set all todos
export function setTodos(state, todos) {
    state.todos = todos;
}

//Set one todo
export function setTodo(state, todo) {
    state.selectedTodo = todo;
}

//set the status of one todo. payload = todo
export function updateTodoStatus(state, payload) {
    const todo = state.todos.find(t => t.id === payload.id);
    if (todo) {
        todo.done = !todo.done;
    }
}

//if we make a query to the API and the query fails, this function gets executed. 
//payload = error
export function todosError(state, payload) {
    state.error = true;
    state.errorMessage = payload;
    //If the API does not work, we show nothing:
    state.todos = [];
}
