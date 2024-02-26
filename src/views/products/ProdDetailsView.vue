<template>
<div> 
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

<style></style>