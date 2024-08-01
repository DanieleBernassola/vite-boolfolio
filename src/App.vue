<script>
import axios from 'axios';
import HeaderComponent from './components/AppHeader.vue';
import FooterComponent from './components/AppFooter.vue';
import CardComponent from './components/ProjectCard.vue';
import { RouterView } from 'vue-router';

export default {
  name: 'Projects',
  data() {
    return {
      projects: [],
    }
  },
  methods: {
    getProjects() {
      const result = axios.get('http://127.0.0.1:8000/api/projects').then((response) => {
        console.log(response);
        if (response.data.success && response.data.results.length) {
          console.log('gestione risultati');
          console.log(response.data.results);

          this.projects = response.data.results;
        } else {
          console.log('qualcosa è andato storto');
        }
      }).catch(error => console.log(error));
    },
  },
  created() {
    this.getProjects();
  },
  components: {
    HeaderComponent,
    FooterComponent,
    CardComponent,
  }
};
</script>
<template>
  <HeaderComponent></HeaderComponent>
  <div class="container">
    <h1>Vue Vite Template</h1>
    <p>Template per progetti Vue con Vite</p>
    <routerView></routerView>
    <font-awesome-icon :icon="['fas', 'user-secret']" />
  </div>
  <FooterComponent></FooterComponent>
</template>
<style></style>