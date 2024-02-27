<template>
  <div class="products">
    <h1>OUR PRODUCTS</h1>
    <div v-for="product in products" :key="product.id" class="product">
        <router-link :to="{name: 'ProdDetails',params:{id:product.id}}">
          <h2>{{ product.title }}</h2>
        </router-link>
        
    </div>
  </div>
</template>

<script>
export default {
    data(){
       return {
        products:[
           {title:'Lenovo',id:1, description:'info'},
           {title:'Lenovo',id:2, description:'info'},
           {title:'Lenovo',id:3, description:'info'},
        ]
       }
    }
}
</script>

<style scoped>
.products{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #0f1aaf;
  background-image: url('https://i.postimg.cc/yY9GZfpk/examplebg.jpg');
  background-size: cover;
  background-position: center;
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
</style>