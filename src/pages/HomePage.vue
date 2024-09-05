<template>
  <main id="main">
    <section id="hero" class="hero">
      <img src="https://drive.google.com/thumbnail?id=1RV6Ia35cRVwu4MlpHkEi5XZ4btL1-Bmg&sz=w1200" class="img-fluid mastheadImg" alt="">
      <div class="container position-relative">
        <div class="row gy-5" data-aos="fade-in">
          <div class="col-lg-7 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
            <h3 class="text-white">Make a difference</h3>
            <h2>Volunteer with Voluntour</h2>
            <p>Join us in making a difference through community projects and voluntourism.</p>
            <div class="d-flex justify-content-center justify-content-lg-start">
              <router-link class="btn-get-started" :to="{ name: 'GetInvolved' }">
                <a>Get Involved</a>
              </router-link>
              <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                class="glightbox btn-watch-video d-flex align-items-center"><i class="bi bi-play-circle"></i><span>Watch
                  Video</span></a>
            </div>
          </div>
          <!-- TODO This image should be large enough that the above text runs onto the image -->
          <div class="col-lg-5 order-1 order-lg-2">
            <!-- <img src="../assets/img/DR1.jpg" class="img-fluid mastheadImg" alt="" data-aos="zoom-out"
              data-aos-delay="100"> -->
          </div>
        </div>
      </div>

      <div class="icon-boxes position-relative">
        <div class="container position-relative">
          <div class="row gy-4 mt-5">

            <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div class="icon-box">
                <div class="icon"><i class="mdi mdi-home"></i></div>
                <h4 class="title text-white">10</h4>
                <p>Projects Completed</p>
              </div>
            </div><!--End Icon Box -->

            <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div class="icon-box">
                <div class="icon"><i class="mdi mdi-account-group"></i></div>
                <h4 class="title text-white">29</h4>
                <p>Volunteers</p>
              </div>
            </div><!--End Icon Box -->

            <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div class="icon-box">
                <div class="icon"><i class="mdi mdi-cash"></i></div>
                <h4 class="title text-white">$27,247+</h4>
                <p>Donations</p>
              </div>
            </div><!--End Icon Box -->

            <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="500">
              <div class="icon-box">
                <div class="icon"><i class="mdi mdi-clock"></i></div>
                <h4 class="title text-white">725</h4>
                <p>Voluntour Hours</p>
              </div>
            </div><!--End Icon Box -->

          </div>
        </div>
      </div>
    </section>
    <!-- ======= Get Involved Section ======= -->
    <section>
      <div class="container pt-5">
    <div class="row d-flex justify-content-center">
      <div class="col-9 text-center">
        <h2 class="fs-1">How You Can Make a Difference With Voluntour: 3 Ways to Help</h2>
      </div>
      <div class="col-9">  
        <p class="py-3 text-center">
          Voluntour is dedicated to providing food, housing, education, and other essential resources to individuals in need. As a nonprofit organization, our mission is to create a supportive community where everyone has access to the basic necessities of life. We can't achieve this without the help of compassionate individuals like you. Here are three impactful ways you can support Voluntour and make a real difference in the lives of those we serve.
        </p>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-3 text-center">
        <img src="https://static.wixstatic.com/media/fd764d_d01bce6f0de34323b5e61b8bfce1b386~mv2.png/v1/fill/w_121,h_121,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Volunteer.png" alt="">
        <h6 class="mt-2">Volunteering Your Time and Skills</h6>
      </div>
      <div class="col-3 text-center">
        <img src="https://static.wixstatic.com/media/fd764d_2b652cf842944863bc5d7839226c9e72~mv2.png/v1/fill/w_121,h_121,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Donate%20logo.png" alt="">
        <h6 class="mt-2">Donating Money or Resources</h6>
      </div>
      <div class="col-3 text-center">
        <img src="https://static.wixstatic.com/media/fd764d_d37dd8fcccdc46f18b7b54a85b3d036a~mv2.png/v1/fill/w_121,h_121,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Advocacy.png" alt="">
        <h6 class="mt-2">Advocacy and Awareness</h6>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-12 text-center">
        <button class="btn btn-dark">
          <router-link class="btn btn-dark" :to="{ name: 'GetInvolved' }">LEARN MORE</router-link>
        </button>
      </div>
    </div>
  </div>
    </section>
    <!-- ======= End Get Involved Section ======= -->

    <!-- ======= Call To Action Section ======= -->
    <section id="call-to-action" class="call-to-action">
      <div class="container text-center call-to-action-card" data-aos="zoom-out">
        <!-- TODO link to voluntour video-->
        <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="glightbox play-btn"></a>
        <div class="row d-flex justify-content-center">
          <div class="col-6">
            <h4>Hear About Our Other Adventures By Subscribing to Our Newsletter</h4>
            <Email></Email>
          </div>
        </div>
        <!-- <h3>Call To Action</h3>
        <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <a class="cta-btn" href="#">Call To Action</a> -->
      </div>
    </section><!-- End Call To Action Section -->

    <!-- ======= Our Services Section ======= -->
    <section id="services" class="services sections-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-header">
          <h2>Our Projects</h2>
          <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis
            omnis tiledo stran delop</p>
        </div>
        <div class="row gy-4" data-aos="fade-up" data-aos-delay="100">
          <div class="col-lg-4 col-md-6 px-0" v-for="project in projects" :key="project.id" >
            <card :project="project"></card>
          </div>
        </div>
      </div>
    </section><!-- End Our Services Section -->

    <!-- ======= About Us Section ======= -->
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="section-header">
          <h2>About Voluntour</h2>
        </div>

        <div class="row gy-4 d-flex justify-content-center">
          <div class="col-12 text-center">
            <img src="https://drive.google.com/thumbnail?id=1TsFoVUibZQwKBJooxcVAEefOmrFWKUMV&sz=w1200" class="img-fluid rounded-4 mb-3" alt="">
          </div>
          <div class="col-lg-10 fs-5 pt-5">
            <p>Following Mindy and Hans Madsen's families return from a heartwarming trip to the Dominican Republic, we
              found ourselves engaged in a conversation with our dear friends Brit and Kelsey Peterson, their family had
              recently returned from a soul-stirring volunteer trip in Peru, a venture dedicated to distributing
              wheelchairs to those desperately in need throughout the country.</p>
            <img src="https://drive.google.com/thumbnail?id=1myEw7uSkYbt-liTnVmHArNhDxheaeFkp&sz=w1200" class="img-fluid ms-3 float-end floatImgSize rounded-4" alt="">
            <p>As we shared stories of our respective experiences, a common theme emerged: the desire to extend our good
              fortune to the communities we had encountered during our travels. Recognizing the positive impact that
              travelers could have on the lives of less fortunate individuals, we brainstormed the idea of starting an
              organization dedicated to giving back to the people and communities of the various places we have traveled
              to.
            </p>

            <p>Fueled by a shared passion for making a difference, we envisioned a platform where fellow travelers could
              contribute their time, skills, or financial resources to support the unique needs of communities in the
              places they visit. Our hearts collectively settled on the Dominican Republic as the initial destination
              for our new organization, www.voluntour.net.</p>

            <!-- </div>
          <div class="col-lg-6"> -->
            <!-- <img src="../assets/img/DR2.jpg" class="img-fluid rounded-4" alt=""> -->

            <!-- <div class="position-relative mt-5">
              <img src="" class="img-fluid rounded-4" alt="">
              <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="glightbox play-btn"></a>
            </div> -->
          </div>
        </div>

      </div>
    </section><!-- End About Us Section -->

    <!-- ======= Pricing Section ======= -->
    <!-- <section id="pricing" class="pricing sections-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-header">
          <h2>Pricing</h2>
          <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis
            omnis tiledo stran delop</p>
        </div>

        <div class="row g-4 py-lg-5" data-aos="zoom-out" data-aos-delay="100">

          <div class="col-lg-4">
            <div class="pricing-item">
              <h3>Free Plan</h3>
              <div class="icon">
                <i class="bi bi-box"></i>
              </div>
              <h4><sup>$</sup>0<span> / month</span></h4>
              <ul>
                <li><i class="bi bi-check"></i> Quam adipiscing vitae proin</li>
                <li><i class="bi bi-check"></i> Nec feugiat nisl pretium</li>
                <li><i class="bi bi-check"></i> Nulla at volutpat diam uteera</li>
                <li class="na"><i class="bi bi-x"></i> <span>Pharetra massa massa ultricies</span></li>
                <li class="na"><i class="bi bi-x"></i> <span>Massa ultricies mi quis hendrerit</span></li>
              </ul>
              <div class="text-center"><a href="#" class="buy-btn">Buy Now</a></div>
            </div>
          </div>

    <div class="col-lg-4">
      <div class="pricing-item featured">
        <h3>Business Plan</h3>
        <div class="icon">
          <i class="bi bi-airplane"></i>
        </div>

        <h4><sup>$</sup>29<span> / month</span></h4>
        <ul>
          <li><i class="bi bi-check"></i> Quam adipiscing vitae proin</li>
          <li><i class="bi bi-check"></i> Nec feugiat nisl pretium</li>
          <li><i class="bi bi-check"></i> Nulla at volutpat diam uteera</li>
          <li><i class="bi bi-check"></i> Pharetra massa massa ultricies</li>
          <li><i class="bi bi-check"></i> Massa ultricies mi quis hendrerit</li>
        </ul>
        <div class="text-center"><a href="#" class="buy-btn">Buy Now</a></div>
      </div>
    </div>

    <div class="col-lg-4">
      <div class="pricing-item">
        <h3>Developer Plan</h3>
        <div class="icon">
          <i class="bi bi-send"></i>
        </div>
        <h4><sup>$</sup>49<span> / month</span></h4>
        <ul>
          <li><i class="bi bi-check"></i> Quam adipiscing vitae proin</li>
          <li><i class="bi bi-check"></i> Nec feugiat nisl pretium</li>
          <li><i class="bi bi-check"></i> Nulla at volutpat diam uteera</li>
          <li><i class="bi bi-check"></i> Pharetra massa massa ultricies</li>
          <li><i class="bi bi-check"></i> Massa ultricies mi quis hendrerit</li>
        </ul>
        <div class="text-center"><a href="#" class="buy-btn">Buy Now</a></div>
      </div>
    </div>

    </div>

    </div>
    </section> -->
    <!-- End Pricing Section -->

    <!-- ======= Frequently Asked Questions Section ======= -->
    <section id="faq" class="faq">
      <div class="container" data-aos="fade-up">

        <div class="row gy-4">

          <div class="col-lg-4">
            <div class="content px-xl-5">
              <h3>Frequently Asked <strong>Questions</strong></h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Duis aute irure dolor in reprehenderit
              </p>
            </div>
          </div>

          <div class="col-lg-8">

            <div class="accordion accordion-flush" id="faqlist" data-aos="fade-up" data-aos-delay="100">
              <i>TODO NOTE: Let's hardcode some of these in and then on a separate FAQ we can use the CMS</i>
              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#faq-content-1">
                    <span class="num">1.</span>
                    Non consectetur a erat nam at lectus urna duis?
                  </button>
                </h3>
                <div id="faq-content-1" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div class="accordion-body">
                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur
                    gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                  </div>
                </div>
              </div><!-- # Faq item-->

              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#faq-content-2">
                    <span class="num">2.</span>
                    Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?
                  </button>
                </h3>
                <div id="faq-content-2" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div class="accordion-body">
                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id
                    donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque
                    elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                  </div>
                </div>
              </div><!-- # Faq item-->

              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#faq-content-3">
                    <span class="num">3.</span>
                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?
                  </button>
                </h3>
                <div id="faq-content-3" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div class="accordion-body">
                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar
                    elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque
                    eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis
                    sed odio morbi quis
                  </div>
                </div>
              </div><!-- # Faq item-->

              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#faq-content-4">
                    <span class="num">4.</span>
                    Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                  </button>
                </h3>
                <div id="faq-content-4" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div class="accordion-body">
                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id
                    donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque
                    elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                  </div>
                </div>
              </div><!-- # Faq item-->

              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#faq-content-5">
                    <span class="num">5.</span>
                    Tempus quam pellentesque nec nam aliquam sem et tortor consequat?
                  </button>
                </h3>
                <div id="faq-content-5" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div class="accordion-body">
                    Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in.
                    Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est.
                    Purus gravida quis blandit turpis cursus in
                  </div>
                </div>
              </div><!-- # Faq item-->

            </div>

          </div>
        </div>

      </div>
    </section><!-- End Frequently Asked Questions Section -->

    <!-- ======= Recent Blog Posts Section ======= -->
    <section id="recent-posts" class="recent-posts sections-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-header">
          <h2>Recent Blog Posts</h2>
          <p>Consequatur libero assumenda est voluptatem est quidem illum et officia imilique qui vel architecto
            accusamus fugit aut qui distinctio</p>
        </div>

        <div class="row gy-4">

          <div class="col-xl-4 col-md-6">
            <article>

              <div class="post-img">
                <img src="" alt="" class="img-fluid">
              </div>

              <p class="post-category">Politics</p>

              <h2 class="title">
                <a href="">Dolorum optio tempore voluptas dignissimos</a>
              </h2>

              <div class="d-flex align-items-center">
                <img src="" alt="" class="img-fluid post-author-img flex-shrink-0">
                <div class="post-meta">
                  <p class="post-author">Maria Doe</p>
                  <p class="post-date">
                    <time datetime="2022-01-01">Jan 1, 2022</time>
                  </p>
                </div>
              </div>

            </article>
          </div><!-- End post list item -->

          <div class="col-xl-4 col-md-6">
            <article>

              <div class="post-img">
                <img src="" alt="" class="img-fluid">
              </div>

              <p class="post-category">Sports</p>

              <h2 class="title">
                <a href="">Nisi magni odit consequatur autem nulla dolorem</a>
              </h2>

              <div class="d-flex align-items-center">
                <img src="" alt="" class="img-fluid post-author-img flex-shrink-0">
                <div class="post-meta">
                  <p class="post-author">Allisa Mayer</p>
                  <p class="post-date">
                    <time datetime="2022-01-01">Jun 5, 2022</time>
                  </p>
                </div>
              </div>

            </article>
          </div><!-- End post list item -->

          <div class="col-xl-4 col-md-6">
            <article>

              <div class="post-img">
                <img src="" alt="" class="img-fluid">
              </div>

              <p class="post-category">Entertainment</p>

              <h2 class="title">
                <a href="">Possimus soluta ut id suscipit ea ut in quo quia et soluta</a>
              </h2>

              <div class="d-flex align-items-center">
                <img src="" alt="" class="img-fluid post-author-img flex-shrink-0">
                <div class="post-meta">
                  <p class="post-author">Mark Dower</p>
                  <p class="post-date">
                    <time datetime="2022-01-01">Jun 22, 2022</time>
                  </p>
                </div>
              </div>

            </article>
          </div><!-- End post list item -->

        </div><!-- End recent posts list -->

      </div>
    </section><!-- End Recent Blog Posts Section -->

    <!-- ======= Contact Section ======= -->
    <!-- <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">

        <div class="section-header">
          <h2>Contact</h2>
          <p>Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt quis dolorem
            dolore earum</p>
        </div>

        <div class="row gx-lg-0 gy-4">

          <div class="col-lg-4">

            <div class="info-container d-flex flex-column align-items-center justify-content-center">
              <div class="info-item d-flex">
                <i class="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h4>Location:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
              </div>

              <div class="info-item d-flex">
                <i class="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </div>
              </div>

              <div class="info-item d-flex">
                <i class="bi bi-phone flex-shrink-0"></i>
                <div>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55</p>
                </div>
              </div>

              <div class="info-item d-flex">
                <i class="bi bi-clock flex-shrink-0"></i>
                <div>
                  <h4>Open Hours:</h4>
                  <p>Mon-Sat: 11AM - 23PM</p>
                </div>
              </div>
            </div>

          </div>

          <div class="col-lg-8">
            <form action="forms/contact.php" method="post" role="form" class="php-email-form">
              <div class="row">
                <div class="col-md-6 form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required>
                </div>
              </div>
              <div class="form-group mt-3">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required>
              </div>
              <div class="form-group mt-3">
                <textarea class="form-control" name="message" rows="7" placeholder="Message" required></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section> -->
    <!-- End Contact Section -->
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-4">
          <Email></Email>
        </div>
      </div>
    </div>
  </main><!-- End #main -->
</template>

<script>
import { computed, ref } from 'vue';
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from '@portabletext/vue';
import { useRouter } from 'vue-router';
import { logger } from '@/utils/Logger.js';
import { AppState } from '@/AppState.js';
import { formatDate } from '@/utils/GlobalUtils.js';
import Card from '@/components/Card.vue';


export default {
  components: {
    Card
  },
  setup() {
    let projects = computed(() => AppState.projects)
    if (projects.value.length > 9) {
      projects.value.slice(0, 8)
    }
    logger.log('missing', projects)
    return {
      projects
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: clamp(500px, 50vw, 100%);

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}

.floatImgSize {
  width: 300px;
}

.mastheadImg {
  position: absolute;
  width: 750px;
  right: 0;
  top: -8vh;
  mask-image: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.65) 35%);
  -webkit-mask-image: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.65) 35%);
}

.call-to-action-card {
  background-image: url('https://drive.google.com/thumbnail?id=1-g0qChDfWb9WSbLAwkwSxpbG7IooGcun&sz=w1200');
}

.icon-alignment {
  top: 15px;
  left: 30px;
}

.card-title {
  height: 20%;
}

</style>
