<template>
  <div class="home">
    <h1 class="animated-heading">WELCOME TO <br> THE WORLD OF<br> TECH</h1>
    <router-link to="/products">
      <button class="big-button">Shop Now</button>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'HomeView',
  components: {}
}
</script>
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('https://i.postimg.cc/FHc3PwYX/videoblocks-futuristic-blue-digital-earth-seamless-loop-global-data-network-around-planet-in-modern.png');
  background-size: cover;
  background-position: center;
}
.home h1 {
  color: #000;
  font-size: 2.5rem;
  color: antiquewhite;
  /* text-align: left;
  margin-right: 300px; */
  justify-content: center;
  display: flex;
  align-items: center;
}
.animated-heading {
  color: #000;
  font-weight: 700;
  font-size: 2.5rem;
  color: antiquewhite;
  text-align: center;
  animation: moveUpDown 1s infinite alternate;
}
@keyframes moveUpDown {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px); 
  }
}
.big-button {
  background-color: red;
  padding: 15px 25px;
  font-size: 1.5rem;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  margin-top: 30px; 
  transition: background-color 0.3s; 
}
.big-button:hover {
  background-color: rgb(130, 147, 202); 
}
@media (max-width: 300px) {
  .home h1, .animated-heading {
    font-size: 1.5rem; 
    margin-left: 200rem; 
    text-align: center; 
  }
  .big-button {
    padding: 10px 20px;
    font-size: 1rem; 
  }
 
}

</style>