<template>
  <div class="container-fluid py-3">
    <button class="selectable btn d-flex h-50 py-0 mb-2">
      <i class="mdi mdi-arrow-left back-arrow"></i>
      <p class="back-arrow p-0 m-0">All Projects</p>
    </button>
    <div class="row">
      <div class="col-12">
        <h2>{{ project.title }}</h2>
      </div>
      <div class="col-12 text-center">
        <img class="img-fluid" :src="project.aboutImage" alt="An old, rundown house next to a new house.">
      </div>
    </div>
    <PortableText
    :value="project.details"
    :components="{
      /* optional object of custom components to use */
    }"
  />
  </div>
</template>

<script>
import { AppState } from '@/AppState';
import sanity from '@/sanity';
import { formatDate } from '@/utils/GlobalUtils';
import { logger } from '@/utils/Logger';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { PortableText } from '@portabletext/vue';


export default {
  components: {
    PortableText
  },
  setup() {
    let project = ref({});
    let route = useRoute()
    let query = `*[_type == "project" && slug.current == '` + route.params.slug + `']{
      location,
      startDate,
      endDate,
      slug,
      details,
      organization,
      title,
      availability,
      "aboutImage": aboutImage.asset->url,
    }[0...50]`
    const fetchData = () => {
      // @ts-ignore
      sanity.fetch(query)
      .then((projects) => {
          logger.log('yessir', route.params.slug, projects)
          // Sanity fetch should return an array; accessing the first item
          if (projects.length > 0) {
            let projectData = projects[0];
            projectData.startDate = formatDate(projectData.startDate);
            projectData.endDate = formatDate(projectData.endDate);
            project.value = projectData;
          }
        })
        .catch((error) => {
          // Handle errors here
          logger.error('Error fetching data:', error);
        });
    };
    onMounted(() => {
      if (AppState.selectedProject.title) {
        project.value = AppState.selectedProject
      } else {
        logger.log(query)
        fetchData()
      }
      logger.log(project.value)
    })
    return {
      project,
      fetchData() { 
      // @ts-ignore
      sanity.fetch(query).then(
        (projects) => {
          projects.forEach(p => {
            p.startDate = formatDate(p.startDate)
            p.endDate = formatDate(p.endDate)
            AppState.selectedProject = p
            project.value = p
          })
        },
        (error) => {
          // this.error = error;
        }
      );
    },
    }
  }
}
</script>

<style>
.back-arrow {
  color: grey;
}
</style>