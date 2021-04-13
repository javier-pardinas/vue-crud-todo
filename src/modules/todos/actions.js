import Vue from 'vue';

export async function fetchTodos({commit}) {
    try {
        //data: todos from our json object
        const {data} = await Vue.axios({
            url: '/todos'
        })
        //commit('mutation', todos)
        commit('setTodos', data);
    } catch(e) {
        commit('todosError', e.message);
    } finally {
        console.log('The query for getting the todos has finished');
    }
}


export async function addTodo({commit}, todo) {
    try {
        await Vue.axios({
            method: 'POST',
            url: '/todos',
            data: {
               id: Date.now(),
               text: todo.text,
               done: false//by default it is pending
            }
        })
    } catch(e) {
        commit('todosError', e.message);
    } finally {
        console.log('The query for creating a todo has finished');
    }
}

export async function updateTodo({commit}, todo) {
    try {
        await Vue.axios({
            method: 'PUT',
            url: `/todos/${todo.id}`,
            data: {
               id: todo.id,
               text: todo.text,
               done: todo.done
            }
        })
        //dispatch: so the data gets updated and we see the changes without refreshing the page
        dispatch('fetchTodos');
    } catch(e) {
        commit('todosError', e.message);
    } finally {
        console.log('The query for updating a todo has finished');
    }
}

export async function updateTodoStatus({commit, dispatch}, todo) {
    try {
        await Vue.axios({
            method: 'PUT',
            url: `/todos/${todo.id}`,
            data: {
               id: todo.id,
               text: todo.text,
               done: !todo.done
            }
        })
        //dispatch: so the data gets updated and we see the changes without refreshing the page
        dispatch('fetchTodos');
    } catch(e) {
        commit('todosError', e.message);
    } finally {
        console.log('The query for updating the todo status has finished');
    }
}

export async function removeTodo({commit, dispatch}, id) {
    try {
        //when we make a query delete with that endpoint (url), json-server knows that we wanna delete this obect from the list
        await Vue.axios({
            method: 'DELETE',
            url: `/todos/${id}`,
        })
        //dispatch: so the data gets updated and we see the changes without refreshing the page
        dispatch('fetchTodos');
    } catch(e) {
        commit('todosError', e.message);
    } finally {
        console.log('The query for deleting a todo has finished');
    }
}