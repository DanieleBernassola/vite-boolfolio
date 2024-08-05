<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
  name: 'ProjectList',
  data() {
    return {
      api: {
        baseUrl: 'http://127.0.0.1:8000/api/',
        endPoints: {
          'projectList': 'projects',
        }
      },
      response: {},
    }
  },
  components: {
    ProjectCard,
  },
  methods: {
    getProjects() {

      const url = this.api.baseUrl + this.api.endPoints.projectList;

      console.log(url);

      axios.get(url).then((response) => {
        if (response.data.success && response.data.results.length) {
          console.log('gestione risultati');
          // console.log(response.data.results);

          this.response = response.data

          // this.projects = response.data.results;
        } else {
          console.log('qualcosa è andato storto');
        }
      }).catch(error => console.log(error));
    },
  },
  created() {
    this.getProjects();
  },
};
</script>
<template>
  <h1>Projects</h1>

  <div class="row">
    <div class="col-12 col-md-6 col-lg-4 gy-4" v-for="project in response.results">
      <projectCard :title="project.title" :slug="project.slug" :content="project.content" :time="project.created_at">
      </projectCard>
    </div>
  </div>
</template>
<style></style>