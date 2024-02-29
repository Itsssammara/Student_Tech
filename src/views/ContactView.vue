<template>
  <div class="contact">
    <h1>CONTACT US</h1>
    <div class="contact-details">
      <div><br>
        <h2>Contact Details</h2>
        <p><i class="bi bi-envelope"></i>student_tech@gmail.com</p>
        <p><i class="bi bi-telephone"></i>082 524 8576</p>
        <div class="social-icons">
          <a href="https://www.linkedin.com/in/ammara-hoosen-364913288" target="_blank"><i class="bi bi-linkedin"></i></a>
          <a href="https://github.com/Itsssammara" target="_blank"><i class="bi bi-github"></i></a>
          <a href="https://www.instagram.com/marie_paints_?utm_source=qr&igsh=MzNlNGNkZWQ4Mg%3D%3D" target="_blank"><i class="bi bi-instagram"></i></a>
        </div><br>
        <img src="" alt="map">
      </div>
    </div>
    <section class="container" id="Contact">
      <div class="row my-5 justify-content-center">
        <h1 class="display"></h1>
        <div class="login-box">
          <form>
            <div class="user-box">
              <input type="text" name=" required">
              <label>Fullname</label>
            </div>
            <div class="user-box">
              <input type="password" name="required">
              <label>Email</label>
            </div>
            <div class="user-box">
              <input type="text" name=" required">
              <label>Message</label>
            </div>
            <button type="submit" class="submit-button">
              Submit
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.contact {
  color: antiquewhite;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 150vh;
  background-image: url('https://i.postimg.cc/yY9GZfpk/examplebg.jpgf');
  background-size: cover;
  background-position: center;
}

.login-box {
  background-color: #333;
  border-radius: 10px;
  padding: 40px;
  width: 400px;
  text-align: center;
}

.user-box {
  position: relative;
  margin-bottom: 30px;
}

.user-box input {
  width: 100%;
  padding: 10px;
  background: none;
  border: none;
  outline: none;
  color: #fff;
  border-bottom: 1px solid #fff;
}

.user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  transition: 0.5s;
  pointer-events: none;
}

.user-box input:focus ~ label,
.user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #03a9f4;
  font-size: 12px;
}

.submit-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #333;
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
  animation: pulse 0.6s linear infinite;
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
