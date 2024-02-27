<template>
  <div class="about">
    <h1>About Us</h1>
    <P>text here</P><br><br>
    <h1>Meet the team</h1>
    <P>text here</P><br><br>
    <P>text here</P>
  </div>
</template>
<script>
export default {
  computed: {
    fetchAbout() {
      this.$store.dispatch('fetchAbout');
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData: () => {}
  }
}</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #0f1aaf;
  background-image: url('https://i.postimg.cc/yY9GZfpk/examplebg.jpg');
  background-size: cover;
  background-position: center;
}
</style>