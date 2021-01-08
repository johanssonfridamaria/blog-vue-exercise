import axios from 'axios'

export default {
  state: {
    posts: [],
    post: {},
    searchVal: ''
    // filteredPosts:
  },
  getters: {
    posts: state => state.posts,
    post: state => state.post,
    filteredPosts: state => {
      return state.posts.filter(post => post.title.toLowerCase().match(state.searchVal.toLowerCase()))
    }
  },
  mutations: {
    SET_POSTS: (state, _posts) => {
      state.posts = _posts
    },
    GET_POST_BY_ID: (state, _post) => {
      state.post = _post
    },
    SEARCH: (state, val) => {
      state.searchVal = val
    },
    ADD_POST: (state, post) => {
     state.posts.push(post)
    }
  },
  actions: {
    getPosts: async ({ commit }) => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      commit('SET_POSTS', res.data)
    },
    getPostById: async ({ commit }, id) => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
      commit('GET_POST_BY_ID', res.data)
    },
    search: ({ commit }, val) => {
      commit('SEARCH', val)
    },
    // addPost: async ({ dispatch }, post) => {
    //   await axios.post('https://jsonplaceholder.typicode.com/posts/create', {
    //     title: post.title,
    //     body: post.body
    //   })
    //     .then(res => {
    //       if(res.status === 200){
    //         dispatch('SET_POSTS', res.data)
    //       }
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // }
    addPost: ({ commit }, _post) =>{
      const post = {
        id: Date.now(),
        title: _post.title,
        body: _post.body
      }
      commit('ADD_POST', post)
    }
  },
}
