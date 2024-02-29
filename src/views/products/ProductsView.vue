<template>
    <div class="products">
      <img src="https://i.postimg.cc/YC456R29/bg-image.jpg" height="25%" width="100%">
      <h1>FEATURED PRODUCTS</h1>
      <input class="input" type="text" id="searchBar" placeholder="Search...">
    <select id="sortOptions">
        <option value="cheapest">Cheapest first</option>
        <option value="expensive">Most expensive first</option>
    </select>
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
/* search bar */
#searchBar {
  color: #000;
  background: #f3f3f3;
}
.products{
  display: row;
  flex-direction: column;
  align-items: center;
  height: 250vh;
  background-color: #f3f3f3;
  /* background-image: url('https://i.postimg.cc/yY9GZfpk/examplebg.jpg'); */
  background-size: cover;
  background-position: center;
}
.products h1{
  font-size: xx-large;
    font-weight: 800;
    margin-top: 30px;
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