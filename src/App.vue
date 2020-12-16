<template>
  <div>
    <navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navigation/Navbar";

export default {
  components: {
    Navbar,
  },
 
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body,
html {
  height: 100%;
  font-family: "Montserrat", sans-serif;
  color: #333;
}

.d-flex {
  display: flex;
}

.btn{
  background: transparent;
  border: 0.1rem solid transparent;
  outline: none;
  cursor: pointer;
}
.container{
  width: 80%;
  margin: auto;
}
</style>
