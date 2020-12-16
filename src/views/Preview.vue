<template>
  <div class="container">
    <div v-for="post in filteredPosts" :key="post.id">
      <postPreview :post="post" />
    </div>
  </div>
</template>

<script>
import PostPreview from '../components/PostPreview'
import {mapActions, mapGetters} from 'vuex';

// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    PostPreview,
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