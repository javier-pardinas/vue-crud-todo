//Vue Axios: consume and display data from an API. A promise-based HTTP client

import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

//when we use axios we axios.get('http://localhost:3000/todos'). 
//This way we only have to do axios.get('/todos')
const baseUrl = 'http://localhost:3000';

axios.defaults.baseURL = baseUrl;
Vue.use(VueAxios, axios);