<template>
    <div class="project-list">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </template>
  
  <script>
  import ProjectCard from './ProjectCard.vue'
  
  export default {
    components: {
      ProjectCard
    },
    props: {
      projects: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  /* 스타일 설정 */
  </style>
  