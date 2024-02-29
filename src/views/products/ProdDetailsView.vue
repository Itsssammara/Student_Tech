<template>
  <div class="container">
    <h1>prod details</h1>
      <div class="row">
          <Card v-if="product">
              <template #cardHeader>
                  <h4 class="card-title">{{ product.prodName }}</h4>
              </template>
              <template #cardBody>
                  <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                      Quantity: {{ product.prodQuantity }}
                  </p>
                  <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                      Amount: R{{ product.prodAmount }}
                  </p>
              </template>
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
              return this.$store.state.product
          }
      },
      mounted() {
          this.$store.dispatch('fetchProduct', this.$route.params)
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