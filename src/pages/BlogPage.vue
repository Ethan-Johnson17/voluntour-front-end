<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 pt-3 d-flex justify-content-center">
        <h1 class="title">Projects</h1>
      </div>
      <div class="col-12">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" @click="selectedTab = 'All'">All</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="selectedTab = 'Current'">Current</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="selectedTab = 'Upcoming'">Upcoming</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="selectedTab = 'Past'">Past</a>
          </li>
        </ul>
      </div>
      <div class="col-12 text-center">
        <p class="sm-text">
          Voluntour currently has
          <strong>{{ projects.length }}</strong> projects available:
        </p>
      </div>
    </div>
    <div class="row" v-if="selectedTab == 'All'">
      <div class="col-12 text-center">
        <h3>All Projects</h3>
      </div>
      <div class="col-12 text-center py-2" v-for="project in projects" :key="project.id">
        <img src="https://placehold.co/1000x300" />
        <h3>{{ project.location }}</h3>
        <h5 :class="{ 'text-grey': pastProjects.includes(project) }">{{ project.startDate }}</h5>
        <router-link :to="`/projects/${project.slug.current}`">
          <button class="btn btn-primary">View</button>
        </router-link>
      </div>
    </div>
    <div class="row" v-else-if="selectedTab == 'Upcoming'">
      <div class="col-12 text-center">
        <h3>Upcoming Projects</h3>
      </div>
      <div class="col-12 text-center py-2" v-for="project in upcomingProjects" :key="project.id">
        <img src="https://placehold.co/1000x300" />
        <h3>{{ project.location }}</h3>
        <h5>{{ project.startDate }}</h5>
        <router-link :to="`/projects/${project.slug.current}`">
          <button class="btn btn-primary">View</button>
        </router-link>
      </div>
    </div>
    <div class="row" v-else-if="selectedTab == 'Current'">
      <div class="col-12 text-center">
        <h3>Current Projects</h3>
      </div>
      <div class="col-12 text-center py-2" v-for="project in currentProjects" :key="project.id">
        <img src="https://placehold.co/1000x300" />
        <h3>{{ project.location }}</h3>
        <h5>{{ project.startDate }}</h5>
        <router-link :to="`/projects/${project.slug.current}`">
          <button class="btn btn-primary">View</button>
        </router-link>
      </div>
    </div>
    <div class="row" v-if="selectedTab == 'Past'">
      <div class="col-12 text-center">
        <h3>Past Projects</h3>
      </div>
      <div class="col-12 text-center py-2" v-for="project in pastProjects" :key="project.id">
        <img src="https://placehold.co/1000x300" />
        <h3>{{ project.location }}</h3>
        <h5 class="text-gray">{{ project.startDate }}</h5>
        <router-link :to="`/projects/${project.slug.current}`">
          <button class="btn btn-primary">View</button>
        </router-link>
      </div>
    </div>

  </div>
</template>


<script>
// @ is an alias to /src
import { ref } from 'vue';
import sanity from '../sanity.js'
import imageUrlBuilder from "@sanity/image-url";

const imageBuilder = imageUrlBuilder(sanity);
const query = `*[_type == "project"]{
  location,
    startDate,
    endDate,
    aboutImage,
    slug
}[0...50]`;
let upcomingProjects = [];
let currentProjects = [];
let pastProjects = []

export default {
  name: "Blog",
  setup() {
    let selectedTab = ref('')
    return {
      loading: true,
      projects: [],
      upcomingProjects,
      currentProjects,
      pastProjects,
      selectedTab
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    imageUrlFor(source) {
      return imageBuilder.image(source);
    },
    fetchData() {
      // this.error = this.personalDetail = null;
      this.loading = true;
      sanity.fetch(query).then(
        (projects) => {
          projects.forEach(project => {
            project.startDate = this.formatDate(project.startDate)
            project.endDate = this.formatDate(project.endDate)
            this.sortProjects(project)
          })
          this.loading = false;
          this.projects = projects;
          this.selectedTab = 'All'
        },
        (error) => {
          // this.error = error;
        }
      );
    },
    formatDate(projectDate) {
      let date = new Date(projectDate)
      let newDate = (date.getMonth() + 1) + '-' + (date.getDate() + 1) + '-' + (date.getFullYear().toString().substring(2, 4))
      return newDate
    },

    sortProjects(project) {
      const now = new Date()
      const startDate = new Date(project.startDate);
      const endDate = new Date(project.endDate);
      switch (true) {
        case (startDate > now):
          upcomingProjects.push(project)
          return 'Upcoming';
        case (startDate <= now && endDate >= now):
          currentProjects.push(project)
          return 'Current';
        case (endDate < now):
          pastProjects.push(project)
          return 'Past';
        default:
          return 'Unknown';
      }
    }
  },
};
</script>

<style scoped>
.nav-item {
  cursor: pointer;
}
</style>