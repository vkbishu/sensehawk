import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
import { v4 as uuidv4 } from 'uuid'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
      blogs: [],
      highlights: []
    },
    mutations: {
      addBlog(state, payload){
        let data = payload.data;
        const authors = ["Jack", "Sousan", "Henry", "Mark"];
        data.id = uuidv4();
        data.createdAt = new Date().getTime();
        data.author = authors[Math.floor(Math.random()*authors.length)];
        state.blogs.push(payload.data)
      },
      updateBlog(state, payload){
        state.blogs.map(item => {
          if(item.id === payload.id){
            return Object.assign(item, payload.data)
          }
          return item;
        });
      },
      removeBlog(state, id){
        state.blogs = state.blogs.filter(item => {
          return item.id !== id
        })
      },
      addHighlight(state, val){
        state.highlights.push(val);
      }
    },
    strict: debug
})