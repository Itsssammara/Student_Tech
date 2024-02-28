<template>
  <div class="about">
    <h1>About Us</h1>
    <P>At Student-Tech, we're all about making technology accessible and affordable for students. Our mission is simple: provide a wide range of high-quality tech gadgets at unbeatable prices. Whether you're a college student in need of a laptop, a high school student looking for a new smartphone, or a graduate student seeking the latest tablet, we've got you covered. Our selection of products is carefully curated to meet the needs and budgets of students, without compromising on quality. From cutting-edge devices to essential accessories, we're your one-stop shop for all things tech. And with our fast and reliable shipping, you can get your hands on the latest gadgets in no time. Shop with us today and see why students everywhere are choosing our online store for their tech needs.</P><br><br>
    <h1>Meet the team</h1>
    <div class="about-image1">
        <img src="https://cdn-thumbs.imagevenue.com/cc/d7/6a/ME17GC7I_t.jpg" alt="Profile Image">
    </div>
    <P>Jay-donn Hendricks 
      Backend Developer
      Meet our brilliant Backend Developer, Jay-donn, the wizard behind the digital curtain, ensuring that our website runs smoothly. He’s a true expert in his field.
</P><br><br>
<div class="about-image2">
        <img src="https://cdn-thumbs.imagevenue.com/cc/d7/6a/ME17GC7I_t.jpg" alt="Profile Image">
</div>
    <P>Ammara Hoosen
      Designer/Developer
      The mastermind behind the sleek design and seamless functionality of Student-Tec. With a background in Web development, she is passionate about creating user-friendly interfaces that enhance your shopping experience.
</P>
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
  height: 150vh;
  background-color: #0f1aaf;
  background-image: url('https://i.postimg.cc/yY9GZfpk/examplebg.jpg');
  background-size: cover;
  background-position: center;
}
.about h1{
  color: #ffffff;
}
.about p{
  color: #ffffff;
}
.about-image1 img {
  border-radius: 60%;
  margin-right: 900px;
  margin-top: 3%;
}
.about-image2 img {
  border-radius: 60%;
  margin-right: 900px;
  margin-top: 3%;
}
</style>