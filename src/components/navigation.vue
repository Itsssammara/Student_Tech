<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar- bg- justify-content-center">
      <router-link :to="{name:'home'}" class="navbar-brand">
        <img src="https://cdn-thumbs.imagevenue.com/a7/7d/5a/ME17OCJC_t.png" alt="Logo" class="logo-img">
      </router-link>
      <router-link :to="{name:'home'}" class="nav-link">Home</router-link>
      <router-link :to="{name:'about'}" class="nav-link">About</router-link>
      <router-link :to="{name:'Products'}" class="nav-link">Products</router-link>
      <router-link :to="{name:'Admin'}" class="nav-link">Admin</router-link>
      <router-link :to="{name:'Contact'}" class="nav-link">Contact</router-link>
    </nav>
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'Navbar',
};
</script>
<style scoped>
.navbar {
  background-color: #A33D99; /* Dark color for the navbar background */
  padding: 0.5rem 1rem; /* Add padding to the navbar */
}
.navbar-brand {
  margin-right: auto; /* Make the brand logo push to the left */
}
.nav-link {
  color: #D4D4D4; /* Light color for the link text */
  text-decoration: none;
  padding: 0.5rem 1rem; /* Add padding to the links */
  margin-right: 0.5rem; /* Add margin between the links */
  border-radius: 0.25rem; /* Add a slight border-radius to the links */
  transition: background-color 0.3s; /* Smooth background color transition */
}
.nav-link:hover {
  background-color: transparent; /* Light blue color on hover */
}
.router-link-exact-active {
  background-color: #EAEFF8; /* Light blue color for the active link */
}
.router-link-exact-active:hover {
  background-color: #FFFFFF; /* Keep the same color on hover for the active link */
}
.router-link-exact-active .nav-link {
  color: #000000; /* White color for the active link text */
}
.logo-img {
  height: 40px; /* Set the height of the logo */
  width: 50px;
  margin-right: 10px;
  margin-left: 10px; /* Optional: Add some space between the logo and the links */
}
/* Adjust navbar for medium and small devices (<992px) */
@media (max-width: 991.98px) {
  .navbar {
    padding: 0.2rem 0.1rem; /* Reduce padding for smaller screens */
  }
  .nav-link {
    padding: 0.2rem 0.1rem; /* Reduce padding for the links */
  }
  .logo-img {
    margin-top: 2px;
    height: 30px;
    width: 40px;
  }
}
/* Very small devices (<= 390px) */
@media (max-width: 390px) {
  .nav-link {
    font-size: 0.8rem;
    padding: 0.25rem;
  }
}
</style>