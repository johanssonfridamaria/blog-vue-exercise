import Vue from 'vue'
import VueRouter from 'vue-router'
import Posts from '../views/Posts.vue'
import PostDetails from '../views/PostDetails.vue'
import AddPost from '../views/AddPost.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/posts',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/posts/details/:id',
    name: 'PostDetails',
    component: PostDetails,
    props:true
  },
  {
    path: '/addPost',
    name: 'AddPost',
    component: AddPost
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
