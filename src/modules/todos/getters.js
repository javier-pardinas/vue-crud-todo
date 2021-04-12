//todo is gonna have a property called done.
//if it is done, we show that todo in a table.
//if it is pending, we show that todo in another table.

//show pending todos
export function pending(state) {
    return state.todos.filter(todo => !todo.done);
}

//show done todos
export function done(state) {
    return state.todos.filter(todo => todo.done);
}