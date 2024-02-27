<template>
    <div>  
      <nav>
      <router-link :to="{name:'home'}" class="nav-link">Home</router-link> |
      <router-link :to="{name:'about'}" class="nav-link">About</router-link> |
      <router-link :to="{name:'Products'}" class="nav-link">Products</router-link> |
      <router-link :to="{name:'Admin'}" class="nav-link">Admin</router-link> |
      <router-link :to="{name:'Contact'}" class="nav-link">Contact</router-link> 
    </nav>
    <router-view/>
    </div>
</template>

<script>

</script>
<style >

</style>