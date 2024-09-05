<template>
  <div
    class="card-container">
    <div class="card-flip">
      <div class="card front">
        <img
          :src="project.aboutImage || 'https://placehold.co/600x400'"
          class="card-img-top"
          alt="Project Image"
        />
      </div>
      <div class="card back">
        <div class="card-body">
          <h5 class="card-title">{{ project.title }}</h5>
          <p class="card-text">{{ project.organization }}</p>
          <p class="card-text">
            <!-- {{ project.details[0].children[0].text.substring(0, 100) + "..." }} -->
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    project: {
      type: Object
    }
  },
  setup(props) {
    return {
    }
  }
}
</script>

<style>
.card-container {
  perspective: 1000px;
  /* width: 18rem; */
  margin-bottom: 1rem;
  height: 10rem;
}

.card-flip {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.card-container:hover .card-flip {
  transform: rotateY(180deg);
}

.card {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  border-radius: 0%;
}

.card.front {
  z-index: 2;
  transform: rotateY(0deg);
}

.card.back {
  transform: rotateY(180deg);
  background-color: #f8f9fa; /* Card background color */
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.card-img-top {
  height: 10rem;
  border-radius: 0%;
}
</style>