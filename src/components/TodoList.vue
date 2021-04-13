<template>
    <div v-if="todos.length">
    </div>
    <b-alert show variant="info" v-else>NO TODOS</b-alert>
</template>

<script>
export default {
    props: {
        todos: {
            type: Array,
            required: true
        }
    }
}
</script>
