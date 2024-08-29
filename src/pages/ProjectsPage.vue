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
      <div class="col-12">
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
      <div class="col-12 pb-5 text-center" v-for="project in projects" :key="project.id">
        <img :src="project.aboutImage" />
        <h3 class="pt-3">{{ project.location }}</h3>
        <h5 :class="{ 'text-grey': pastProjects.includes(project) }">{{ project.startDate }}</h5>
        <button @click="pushToDetails(project)" class="btn btn-primary">View</button>
      </div>
    </div>
    <div class="row" v-else-if="selectedTab == 'Upcoming'">
      <div class="col-12 text-center">
        <h3>Upcoming Projects</h3>
      </div>
      <div class="col-12 pb-5 text-center" v-for="project in upcomingProjects" :key="project.id">
        <img :src="project.aboutImage" />
        <h3 class="pt-3">{{ project.location }}</h3>
        <h5>{{ project.startDate }}</h5>
        <PortableText
    :value="[
      /* array of portable text blocks */
    ]"
    :components="{
      /* optional object of custom components to use */
    }"
  />
        <button @click="pushToDetails(project)" class="btn btn-primary">View</button>
      </div>
    </div>
    <div class="row" v-else-if="selectedTab == 'Current'">
      <div class="col-12 text-center">
        <h3>Current Projects</h3>
      </div>
      <div class="col-12 pb-5 text-center" v-for="project in currentProjects" :key="project.id">
        <img :src="project.aboutImage" />
        <h3 class="pt-3">{{ project.location }}</h3>
        <h5>{{ project.startDate }}</h5>
        <button @click="pushToDetails(project)" class="btn btn-primary">View</button>
      </div>
    </div>
    <div class="row" v-if="selectedTab == 'Past'">
      <div class="col-12 text-center">
        <h3>Past Projects</h3>
      </div>
      <div class="col-12 pb-5 text-center" v-for="project in pastProjects" :key="project.id">
        <img :src="project.aboutImage" />
        <h3 class="pt-3">{{ project.location }}</h3>
        <h5 class="text-gray">{{ project.startDate }}</h5>
        <button @click="pushToDetails(project)" class="btn btn-primary">View</button>
      </div>
    </div>

  </div>
</template>


<script>
// @ is an alias to /src
import { ref } from 'vue';
import sanity from '../sanity.js'
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from '@portabletext/vue';
import { useRouter } from 'vue-router';
import { logger } from '@/utils/Logger.js';
import { AppState } from '@/AppState.js';
import { formatDate } from '@/utils/GlobalUtils.js';

const imageBuilder = imageUrlBuilder(sanity);
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
let upcomingProjects = [];
let currentProjects = [];
let pastProjects = [];

export default {
  name: "Blog",
  setup() {
    const router = useRouter();
    let selectedTab = ref('')
    return {
      loading: true,
      projects: [],
      upcomingProjects,
      currentProjects,
      pastProjects,
      selectedTab,
      PortableText,

      pushToDetails(project) {
      logger.log(router, project)
      AppState.selectedProject = project
      
      router.push({
            name: "ProjectDetails",
            params: { slug: project.slug.current },
          })
      }
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
      // @ts-ignore
      sanity.fetch(query).then(
        (projects) => {
          projects.forEach(project => {
            project.startDate = formatDate(project.startDate)
            project.endDate = formatDate(project.endDate)
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
    },
    
  },
};
</script>

<style scoped>
.nav-item {
  cursor: pointer;
}
</style>