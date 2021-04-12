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
    } catch(e) {
        commit('todosError', e.message);
    } finally {
        console.log('The query for updating a todo has finished');
    }
}