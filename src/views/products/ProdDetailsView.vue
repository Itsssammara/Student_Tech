<template>
  <div class="container">
    <h1>prod details</h1>
      <div class="row">
        <!-- {{ product }} -->
          <Card v-if="product" :key="product">
              <!-- <template #cardHeader>
                  <h4 class="card-title">{{ product.prodName }}</h4>
              </template>
              <template #cardBody>
                  <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                      Quantity: {{ product.prodQuantity }}
                  </p>
                  <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                      Amount: R{{ product.prodAmount }}
                  </p>
              </template> -->
          </Card>
      </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
  export default {
      components:{
          Card,
      },
      computed: {
          product() {
              return this.$store.state.product;
          }
      },
      mounted() {
          let prodID = +this.$route.path.split('/').at(-1);
          this.$store.dispatch('fetchProduct', prodID);
        //   this.$store.dispatch('fetchProduct')

      }
      
  }
</script>

<style scoped>
*{
    background-color: #ffffff;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.container h2{
    color: rgb(15, 25, 82);
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 3rem;
}


</style>