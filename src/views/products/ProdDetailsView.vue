<template>
<div class="product details"> 
    <h1>PRODUCT DETAILS</h1>
    <p>laptop 1 is {{ id }}</p>
</div>
   
</template>

<script>
export default{
    props: ['id']
    // data(){
    //     return{
    //         id: this.$route.params.id
    //     }
    // }
}</script>

<style scoped>
.product details{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #0f1aaf;
  background-image: url('https://i.postimg.cc/yY9GZfpk/examplebg.jpg');
  background-size: cover;
  background-position: center;
}
</style>