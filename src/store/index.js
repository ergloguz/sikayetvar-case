import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import VuexPersistence from 'vuex-persist'
Vue.use(Vuex)

const posts_resource ="https://jsonplaceholder.typicode.com/posts";
const put_resource ="https://jsonplaceholder.typicode.com/posts";
const users_resources ="https://jsonplaceholder.typicode.com/users";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: 'sikayet-var'
})

export default new Vuex.Store({
  state: {
    posts:[],
    users:[],
  },
  mutations: {
    SET_POSTS(state,post) {
      state.posts = post;
    },
    SET_USERS(state,payload) {
      state.users = payload;
    },
    REMOVE_POSTS(state, post) {
      const index = state.posts.findIndex((item) => item.id === post.id);
      state.posts.splice(index, 1);
    },
    UPDATE_POST_ITEM(state, post) {
      const index = state.posts.findIndex((item) => item.id === post.id);
      const temp = [...state.posts];
      temp[index] = post;
      state.posts = temp;
    },
  },
  actions: {
    loadPosts({commit}){
      axios.get(posts_resource)
          .then((response)  =>{
            commit ("SET_POSTS", response.data.splice(0,6))}
          )
    },
    loadUsers({commit}){
      axios.get(users_resources)
          .then((response) =>{
            commit ("SET_USERS", response.data.splice(0,6))}
          )
    },
    updatePosts({ commit },payload){
      return axios.put(put_resource + '/' + payload.id,payload);
    },
  },
  modules: {
  },
  getters: {
    getPosts:(state) => state.posts,
    getUsers:(state) => state.users,
  },
  plugins: [vuexLocal.plugin]
})
