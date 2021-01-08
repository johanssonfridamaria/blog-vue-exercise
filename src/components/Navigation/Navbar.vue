<template>
  <div class="header">
    <div class="header-content">
      <div class="header-text">
        <h1>BLOG NAME</h1>
        <p>
          Text about the blog. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Esse, iste!
        </p>
      </div>
      <div class="header-navbar d-flex">
        <div class="nav-links">
          <router-link to="/">Posts</router-link>
          <router-link to="/addPost">Add post</router-link>
        </div>
        <div class="search d-flex">
          <form>
            <input
              type="text"
              placeholder="Search on blog.se"
              v-model="searchValue"
              @keyup="search(searchValue)"
            />
            <button type="submit" class="btn btn-search">
              <i class="fa fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Navbar",
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {
    ...mapActions(["search"]),
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 1rem;
}
p {
  margin-bottom: 0.5rem;
}
.header {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../../assets/images/markus-spiske-vrbZVyX2k4I-unsplash.jpg");
  height: 50vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.header-content {
  background: rgba(255, 255, 255, 0.5);
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #333;
  padding: 2rem 3rem;
  width: 80%;
}
.nav-links {
  flex-direction: row;
}
.nav-links a {
  text-decoration: none;
  color: #333;
  margin-right: 2rem;
  font-weight: bold;
  text-transform: uppercase;
}
.header-text {
  margin-bottom: 2rem;
  text-align: center;
}
.header-navbar {
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
a.router-link-exact-active {
  color: #666;
}
.search {
  flex-direction: row;
  align-items: center;
}
input {
  border: none;
  font-size: 1rem;
  padding: 0.5rem;
  background: transparent;
  box-sizing: border-box;
  border-bottom: 0.1rem solid #333;
  outline: none;
}
.btn-search {
  margin-left: 0.5rem;
  font-size: 1.2rem;
  color: #333;
}

@media (max-width: 768px) {
  .nav-links {
    margin-bottom: 1rem;
  }
  .search {
    margin-bottom: 1rem;
  }
  .header-navbar {
    flex-direction: column;
  }
}
</style>
