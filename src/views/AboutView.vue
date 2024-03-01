<template>
  <div class="about-section">
            <h1>About Us</h1>
            <p>At Student-Tech, we're all about making technology accessible and affordable for students. Our mission is simple: provide a wide range of
               high-quality tech gadgets at unbeatable prices.Whether you're a college student in need of a laptop, a high school student looking for a new smartphone, or a graduate student 
               seeking the latest tablet, we've got you covered.Our selection of products is carefully curated to meet the needs and budgets of students, without compromising on quality.
                From cutting-edge devices to essential accessories, we're your one-stop shop for all things tech. 
                And with our fast and reliable shipping, you can get your hands on the latest gadgets in no time. Shop with us today and see why students everywhere are choosing our online store for their tech needs.</p>
    <h2 class="team-heading">Meet the team </h2><br>
    <div class="row">
            <div class="column">
                <div class="card">
                    <center><img src="https://i.postimg.cc/nzzP45Jh/img1-1.png"></center>
                    <p class="staff">Jay-donn Hendricks <br>
                      Backend Developer<br><br></p>
                    <div class="container">
                        <p>Meet our brilliant Backend Developer, Jay-donn, the wizard behind the digital curtain, ensuring that our website runs smoothly. 
                          He’s a true expert in his field.</p>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <center><img src="https://i.postimg.cc/YSS5RjN7/img2.jpg"></center>
                    <p class="staff">Ammara Hoosen<br>
                      Designer/Developer<br><br></p>
                    <div class="container">
                        <p>Meet the mastermind behind the sleek design and seamless functionality of Student-Tec. She is passionate about creating user-friendly interfaces that enhance your shopping experience.</p>
                    </div>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
body {
  font-family: "Arial", sans-serif;
  background: #ffffff;
  margin: 0;
  padding: 0;
}

.about-section {
  background-image: url('https://i.postimg.cc/L586qPH6/th.jpg');
  background: rgb(255, 255, 255);
  color: #000;
  padding: 50px;
  text-align: center;
}

h2.team-heading {
  font-weight: 800;
}

.team-heading {
  text-align: center;
  color: rgb(91, 109, 207);
  margin-top: 40px;
}

p.staff {
  font-weight: 700;
}

.row {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 20px;
}

.column {
  flex: 0 0 30%;
  margin-bottom: 20px;
}

.card {
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
}

.card img {
  border-radius: 60px;
  width: 200px;
  height: 200px;
  margin-bottom: 15px;
}

.container {
  background: #fff;
  padding: 0 15px;
}

</style>