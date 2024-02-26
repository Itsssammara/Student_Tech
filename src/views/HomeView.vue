<template>
  <div class="home">
 <h1>WELCOME TO THE WORLD OF TECH</h1>
 <button>shop now</button>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
    
  }
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
  background-color: #0f1aaf;
  background-image: url('https://i.ibb.co/DKkMz21/bg-gif.gif');
  background-size: cover;
  background-position: center;
}
</style>