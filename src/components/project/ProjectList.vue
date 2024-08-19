<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-4 mb-4" v-for="project in projects" :key="project.id">
        <ProjectCard :project="project" />
      </div>
      <div class="col-sm-12 col-md-6 col-lg-4 mb-4"></div>
        <ProjectAdd />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from '@components/project/ProjectCard.vue'
import ProjectAdd from '@components/project/ProjectAdd.vue'

export default {
  components: {
    ProjectCard,
    ProjectAdd
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
</style>
