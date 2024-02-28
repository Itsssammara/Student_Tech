<template>

<navigation/>

</template>

<script>
import navigation from '@/components/navigation.vue'
import footers from '@/components/footer.vue'
import spinner from '@/components/spinner.vue'

export default {
  
  components: {
   navigation,
   footers,
   spinner
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  color: #ffffff;
  background: #000980;
}
</style>
