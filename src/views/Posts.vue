<template>
  <div class="container">
    <div v-for="post in filteredPosts" :key="post.id">
      <postsPreview :post="post" />
    </div>
  </div>
</template>

<script>
import PostsPreview from '../components/PostsPreview'
import {mapActions, mapGetters} from 'vuex';

// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    PostsPreview,
  }, 
  methods: {
    ...mapActions(['getPosts'])
  },
  computed: {
    ...mapGetters(['posts', 'filteredPosts'])
  },
  created(){
    this.getPosts()
  }
}
</script>

<style scoped>

</style>