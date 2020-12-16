<template>
  <div class="container">
    <div class="card">
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Post",
  props: ["id"],
  methods: {
    ...mapActions(["getPostById"]),
  },
  computed: {
    ...mapGetters(["post"]),
  },
  created() {
    this.getPostById(this.id);
  },
};
</script>

<style scoped>
.card {
  padding: 2rem 3rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
}
h1 {
  text-transform: uppercase;
  text-decoration: none;
  color: #333;
  text-align: center;
  margin-bottom: 1.5rem;
}
</style>