<script setup>
import { AppState } from './AppState'
// @ts-ignore
import Navbar from './components/Navbar.vue'
import Email from './components/Email.vue'


</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer id="footer" class="footer">

    <div class="container">
      <div class="row gy-4">
        <div class="col-lg-5 col-md-12 footer-info">
          <a href="index.html" class="logo d-flex align-items-center">
            <span>Impact</span>
          </a>
          <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta
            donna mare fermentum iaculis eu non diam phasellus.</p>
          <div class="social-links d-flex mt-4">
            <a href="https://twitter.com/volun_tour" class="twitter"><i class="mdi mdi-twitter"></i></a>
            <a href="https://www.facebook.com/groups/voluntouring/" class="facebook"><i
                class="mdi mdi-facebook"></i></a>
            <!-- <a href="#" class="instagram"><i class="mdi mdi-instagram"></i></a>
            <a href="#" class="linkedin"><i class="mdi mdi-linkedin"></i></a> -->
          </div>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Terms of service</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#">Web Design</a></li>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Product Management</a></li>
            <li><a href="#">Marketing</a></li>
            <li><a href="#">Graphic Design</a></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
          <h4>Contact Us</h4>
          <p>
            2550 E Quail Run Road <br>
            Emmett, ID 83617
            <strong>Phone:</strong> +1 (208) 718-2090<br>
            <strong>Email:</strong> service@voluntour.net<br>
          </p>

        </div>

      </div>
    </div>

    <div class="container mt-4">
      <div class="copyright">
        &copy; Copyright <strong><span>Impact</span></strong>. All Rights Reserved
      </div>

    </div>

  </footer><!-- End Footer -->
  <!-- End Footer -->
</template>

<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}
</style>
