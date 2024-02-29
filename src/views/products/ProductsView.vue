<template>
    <div class="products">
      <img src="https://i.postimg.cc/YC456R29/bg-image.jpg" height="25%" width="100%">
      <h1>OUR PRODUCTS</h1>
      <div class="product-grid">
        <div v-for="product in products" :key="product.id" class="product">
          <router-link :to="{name: 'ProdDetails',params:{id:product.id}}">
            <img :src="product.img" alt="Product Image">
            <!-- <h2>{{ product.title }}</h2> -->
          </router-link>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
} 
</script>

<style scoped>
.products{
  display: row;
  flex-direction: column;
  align-items: center;
  height: 250vh;
  background-color: #6b72d8;
  /* background-image: url('https://i.postimg.cc/yY9GZfpk/examplebg.jpg'); */
  background-size: cover;
  background-position: center;
}
.products h1{
    color: rgb(15, 25, 82);
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.product h2{
  background: rgb(65, 65, 158);
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: #53a4e6;
}
.product h2:hover{
  background: #d4e0eb;
}
.product a{
  text-decoration: none;
}
.product.img{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px; 
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr 1fr 1fr 1fr));
  grid-gap: 154px;
  margin-top: 60px;
}
</style>