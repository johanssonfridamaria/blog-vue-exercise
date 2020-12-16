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
    }
  },
  actions: {
    getPosts: async ({commit}) => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      commit('SET_POSTS', res.data)
    },
    getPostById: async ({commit}, id) => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts/'+ id)
      commit('GET_POST_BY_ID', res.data)
    },
    search: ({commit},val) => {
      commit('SEARCH', val)
    }
  },
}
