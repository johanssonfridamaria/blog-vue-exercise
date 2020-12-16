<template>
  <div class="container">
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="title" class="form-label"
          >Title</label
        >
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label"
          >Content</label
        >
        <textarea
          class="form-control"
          id="content"
          rows="3"
        ></textarea>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
label {
  margin-bottom: 1rem;
}
input {

}
textarea {
  width: 100%;
  height: 10rem;
  padding: 0.7rem 1rem;
  box-sizing: border-box;
  border: 0.15rem solid #ccc;
  border-radius: 0.25rem;
  /* background-color: #f8f8f8; */
  resize: none;
  outline: none;
}
</style>