<script>
import axios from 'axios';
import HeaderComponent from './components/AppHeader.vue';
import FooterComponent from './components/AppFooter.vue';
import CardComponent from './components/ProjectCard.vue';
import { RouterView } from 'vue-router';

export default {
  name: 'Projects',
  components: {
    HeaderComponent,
    FooterComponent,
    CardComponent,
  }
};
</script>
<template>
  <HeaderComponent></HeaderComponent>
  <main>
    <div class="container py-4">
      <routerView></routerView>
    </div>
  </main>
  <FooterComponent></FooterComponent>
</template>
<style></style>