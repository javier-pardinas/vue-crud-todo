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


export async function addTodo({commit, dispatch}, todo) {
    try {
        //data: todos from our json object
        await Vue.axios({
            method: 'POST',
            url: '/todos',
            data: {
               id: Date.now(),
               text: todo.text,
               done: false//by default it is pending
            }
        })
        //dispatch: first argument of an action that gets executed to execute another action
        dispatch('fetchTodos');//we will show the todos with the new todo that we just added
    } catch(e) {
        commit('todosError', e.message);
    } finally {
        console.log('The query for creating a todo has finished');
    }
}