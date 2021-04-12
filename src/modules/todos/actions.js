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