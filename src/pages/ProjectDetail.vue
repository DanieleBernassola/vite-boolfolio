<script>
import axios from 'axios';
export default {
  name: 'ProjectDetail',
  data() {
    return {
      api: {
        baseUrl: 'http://127.0.0.1:8000/api/',
        endPoints: {
          'projectList': 'projects',
        }
      },
      project: null,
      currentPage: 1,
      error: false,
    }
  },
  methods: {
    getProject() {
      const url = this.api.baseUrl + this.api.endPoints.projectList + '/' + this.$route.params.slug;
      console.log(url);

      axios.get(url).then((response) => {
        console.log(response);
        this.project = response.data.results;
      }).catch(error => {
        this.error = true;
        console.log(error);
      });
    },
  },
  created() {
    this.getProject();
  }
};
</script>
<template>
  <h2>{{ project?.title }}</h2>
  <p>{{ project?.content }}</p>
  <p>Tipo progetto: {{ project?.type?.title }} </p>

  <p>Tecnologie utilizzate:</p>
  <ul v-if="project?.technologies && project.technologies.length > 0">
    <li v-for="technology in project.technologies">
      {{ technology.title }}
    </li>
  </ul>

  <router-link :to="{ name: 'projects' }">Ritorna ai progetti</router-link>
</template>
<style></style>