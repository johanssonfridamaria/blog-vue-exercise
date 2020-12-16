<template>
  <div class="card">
    <router-link class="title" :to="{name: 'PostDetails', params: {id: post.id}}">{{ post.title }}</router-link>
    <p>{{ post.body | shorten }}</p>
  </div>
</template>

<script>
export default {
  name: "PostPreview",
  props: ["post"],
  filters: {
    shorten(val) {
      return val.slice(0, 100) + "...";
    },
  },
};
</script>

<style scoped>
.card {
  padding: 2rem 3rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.title {
  text-transform: uppercase;
  text-decoration: none;
  font-size: 2rem;
  color: #333;
  text-align: center;
  display: inline-block;
  margin-bottom: 1.5rem;
}
</style>