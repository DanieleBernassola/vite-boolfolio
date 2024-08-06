<script>
export default {
  name: 'ProjectCard',
  props: ['title', 'slug', 'content', 'time'],
};
</script>
<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ content }}</p>
      <router-link :to="{ name: 'detail', params: { slug } }"><button
          class="btn btn-light">Dettagli</button></router-link>
    </div>
  </div>
</template>
<style></style>