<template>
  <div id="app">
    <b-container>
      <b-nav tabs>
        <b-nav-item exact to="/todos">TODOS LIST</b-nav-item>
        <b-nav-item exact to="/todos/create">REGISTER TODO</b-nav-item>
      </b-nav>
      <router-view/>
    </b-container>
  </div>
</template>

