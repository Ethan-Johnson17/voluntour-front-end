<script setup>
import { onMounted, ref } from 'vue';
import { loadState, saveState } from '../utils/Store.js';
// @ts-ignore
import Login from './Login.vue';

const theme = ref(loadState('theme') || 'light')

onMounted(() => {
  document.documentElement.setAttribute('data-bs-theme', theme.value)
})

function toggleTheme() {
  theme.value = theme.value == 'light' ? 'dark' : 'light'
  document.documentElement.setAttribute('data-bs-theme', theme.value)
  saveState('theme', theme.value)
}

</script>

<template>

  <!-- ======= Header ======= -->
  <section id="topbar" class="topbar d-flex align-items-center">
    <div class="container d-flex justify-content-center justify-content-md-between">
      <div class="contact-info d-flex align-items-center">
        <i class="bi bi-envelope d-flex align-items-center"><a
            href="mailto:service@voluntour.net">service@voluntour.net</a></i>
        <i class="bi bi-phone d-flex align-items-center ms-4"><span>+1 (208) 718-2090</span></i>
      </div>
      <div class="social-links d-none d-md-flex align-items-center">
        <a href="https://twitter.com/volun_tour" class="twitter"><i class="fa-brands fa-twitter"></i></a>
        <a href="https://www.facebook.com/groups/voluntouring/" class="facebook"><i
                class="fa-brands fa-facebook"></i></a>
        <p class="ms-4 pt-3 text-white">Registered 501(c)(3)</p>
      </div>
    </div>
  </section><!-- End Top Bar -->

  <header id="header" class="header d-flex align-items-center">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
      <a href="index.html" class="logo d-flex align-items-center">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <img class="logo" src="../../public/img/2024NewLogoNoBG.png" alt="Voluntour logo with hands holding a globe">
        <!-- <h1>Impact<span>.</span></h1> -->
      </a>
      <nav id="navbar" class="navbar">
        <ul>
          <router-link :to="{ name: 'Home' }">
            <li class="mx-1">Home</li>
          </router-link>
          <router-link :to="{ name: 'About' }">
            <li class="mx-1">About</li>
          </router-link>
          <router-link :to="{ name: 'Excursions' }">
            <li class="mx-1">Play</li>
          </router-link>
          <ul>
            <li class="dropdown">
              <router-link :to="{ name: 'Projects' }">
                <a href="#">
                  <span>Projects</span>
                  <i class="bi bi-chevron-down dropdown-indicator"></i>
                </a>
              </router-link>
              <ul>
                <router-link :to="{ name: 'Projects' }">
                  <li>Past</li>
                </router-link>
                <router-link :to="{ name: 'Projects' }">
                  <li>Upcoming</li>
                </router-link>
              </ul>
            </li>
          </ul>
          <router-link :to="{ name: 'Blog' }">
            <li class="mx-1">Blog</li>
          </router-link>
          <router-link :to="{ name: 'GetInvolved' }">
            <li class="mx-1">Get Involved</li>
          </router-link>
          <li class="ps-1"><a href="#contact">Contact</a></li>
        </ul>
      </nav><!-- .navbar -->

      <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

    </div>
  </header><!-- End Header -->
  <!-- End Header -->



</template>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

@media screen and (min-width: 576px) {
  nav {
    height: 64px;
  }
}

.logo {
  width: 200px;
  padding: 20px 0px;
}
</style>
