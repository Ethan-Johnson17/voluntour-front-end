<template>
  <div class="container mt-5">
    <h1 class="mb-4">Excursions</h1>

    <div class="card mb-3" v-for="excursion in excursions" :key="excursion.title">
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="excursion.img" class="img-fluid rounded-start" :alt="excursion.title">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ excursion.title }}</h5>
            <p class="card-text">{{ excursion.description }}</p>
            <a :href="excursion.link" class="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      excursions: [
        {
          title: "Chocolate Making Tour",
          description: "Enjoy and experience the art of Dominican cacao and chocolate making at our tours in Hacienda La Esmeralda.",
          img: "path/to/chocolate-tour.jpg",
          link: "#"
        },
        {
          title: "27 waterfalls of Damajagua",
          description: "One of the most visited tourist attractions in the city of Puerto Plata due to its ecological beauty and the beautiful waterfalls that have formed over the years creating natural slides on the rock to slide.",
          img: "path/to/27-waterfalls.jpg",
          link: "#"
        },
        {
          title: "Teleferico Cable Car",
          description: "The Puerto Plata Cable Car is on the 'Isabel de Torres' Mountain, which is south of the lovely city of Puerto Plata. There is a statue of 'Christ the Redeemer' at the top of the mountain, above a castle. Its arms are open to welcome people.",
          img: "path/to/cable-car.jpg",
          link: "#"
        },
        {
          title: "Ocean World Adventure",
          description: "Ocean World Adventure park offers an advanced interactive marine experience, allowing guests to interact with animals like dolphins, sea lions, sharks, stingrays, and tropical birds.",
          img: "path/to/ocean-world.jpg",
          link: "#"
        }
      ]
    }
  }
}
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>