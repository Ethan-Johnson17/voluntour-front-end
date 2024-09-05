<script setup>
import { AppState } from './AppState'
// @ts-ignore
import Navbar from './components/Navbar.vue'
import Email from './components/Email.vue'
import { onMounted } from 'vue';
import { logger } from './utils/Logger';
import sanity from './sanity';

const query = `*[_type == "project"]{
  location,
  startDate,
    endDate,
    slug,
    details,
    organization,
    title,
    availability,
    "aboutImage": aboutImage.asset->url,
}[0...50]`;
onMounted(async() => {
  // @ts-ignore
  await sanity.fetch(query).then(
    (projects) => {
          AppState.projects = projects
          // projects.forEach(project => {
          //   const now = new Date()
          //   const startDate = new Date(project.startDate);
          //   const endDate = new Date(project.endDate);
          //   if ((startDate <= now && endDate >= now) || (startDate > now)) {
          //     AppState.projects.push(project)
          //   }
          // })
        },
        (error) => {
          // error = error;
        }
      );
})
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
      <div class="row gy-4 d-flex justify-content-between">
        <div class="col-lg-5 col-md-12 footer-info">
          <a href="index.html" class="logo d-flex align-items-center">
            <span>Voluntour</span>
          </a>
          <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta
            donna mare fermentum iaculis eu non diam phasellus.</p>
          <div class="social-links d-flex mt-4">
            <a href="https://twitter.com/volun_tour" class="twitter"><i class="mdi mdi-twitter"></i></a>
            <a href="https://www.facebook.com/groups/voluntouring/" class="facebook"><i
                class="mdi mdi-facebook"></i></a>
          </div>
        </div>


        <div class="col-lg-4 col-md-12 footer-contact text-center text-md-start">
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
        &copy; Copyright <strong><span>LionBold Designs</span></strong>. All Rights Reserved
      </div>

    </div>

  </footer>
  <!-- End Footer -->
</template>

<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}
</style>
