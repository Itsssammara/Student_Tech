<template>
  <div class="contact">
    <br><br><h1>Reach Out To Us!</h1>
      <p>If you have any questions or inquiries,
        please feel free to contact us using the form below:</p>
    <div class="contact-details">
      <div><br>
        <p><i class="bi bi-envelope"></i>student_tech@gmail.com</p>
        <p><i class="bi bi-telephone"></i>082 524 8576</p>
        <div class="social-icons">
          <a href="" target="_blank"><i class="bi bi-linkedin"></i></a>
          <a href="" target="_blank"><i class="bi bi-github"></i></a>
          <a href="" target="_blank"><i class="bi bi-instagram"></i></a>
        </div><br>
      </div>
    </div>
    <section class="container" id="Contact">
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"></label>
  <input type="fullname" class="form-control" id="fullname" placeholder="Full name">
</div>
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"></label>
  <input type="Email" class="form-control" id="email" placeholder="Email Address">
</div>
<div class="mb-3">
  <label for="Message" class="form-label"></label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
</div>
<button type="submit" class="submit-button">Send</button>
    </section>
  </div>
</template>
<script>
</script>
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
h1{
  font-weight: 700;
}
.contact {
  color: rgb(11, 1, 12);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('https://i.postimg.cc/FHc3PwYX/videoblocks-futuristic-blue-digital-earth-seamless-loop-global-data-network-around-planet-in-modern.png');
  background-size: cover;
  background-position: center;
}
.submit-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #07528C;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.submit-button:hover::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300%;
  height: 300%;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  animation: pulse 3s linear infinite;
}
#Contact.container{
  width: 400px;
  height: 340px;
  border-radius: 10px;
}
@keyframes pulse {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(2);
  }
}
</style>