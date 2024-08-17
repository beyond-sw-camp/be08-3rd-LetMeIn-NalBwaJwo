<template>
    <div class="project-list-view">
    <h1>Projects</h1>
    <ProjectList :projects="projects" />
    </div>
</template>
  
  <script>
  import ProjectList from '@components/project/ProjectList.vue'
  
  export default {
    components: {
      ProjectList
    },
    data() {
      return {

        projects: [
          { id: 1, title: 'Project A', description: 'Description A' },
          { id: 2, title: 'Project B', description: 'Description B' }

        ]
      }
    }
  }
  </script>
  
  <style scoped>
  </style>

