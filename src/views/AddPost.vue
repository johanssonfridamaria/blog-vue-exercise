<template>
  <div class="container">
    <div class="card">
      <h1>Add post</h1>
      <form @submit.prevent="onSubmit">
        <div class="input-group">
          <label for="title" class="form-label">Title</label>
          <input type="text" id="title" v-model="post.title" />
        </div>
        <div class="input-group">
          <label for="content" class="form-label">Content</label>
          <textarea id="content" rows="3" v-model="post.body"></textarea>
        </div>
        <button class="btn btn-form" type="submit">Add</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddPost",
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    ...mapActions(["addPost"]),
    onSubmit() {
      if (this.post.title != "" && this.post.body != "") {
        this.addPost(this.post);
        this.post.title = "";
        this.post.body = "";
      }
    },
  },
};
</script>

<style scoped>
.card {
  max-width: 40rem;
  margin: 2rem auto;
}
h1 {
  text-transform: uppercase;
  text-decoration: none;
  color: #333;
  text-align: center;
  margin-bottom: 1.5rem;
}

.form-label {
  display: inline-block;
  margin-bottom: 1rem;
}

.input-group {
  margin-bottom: 1rem;
}
input {
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
  border: 0.15rem solid #eee;
  border-radius: 0.25rem;
  background: transparent;
  outline: none;
  font-size: 1rem;
}
textarea {
  width: 100%;
  height: 10rem;
  padding: 0.7rem 1rem;
  box-sizing: border-box;
  border: 0.15rem solid #eee;
  border-radius: 0.25rem;
  background: transparent;
  resize: none;
  outline: none;
}
.btn-form {
  background-color: #eee;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-size: 1rem;
}
</style>