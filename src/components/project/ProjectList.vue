<!-- ProjectList.vue -->
<template>
  <div class="container project-list-container">
    <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-4 mb-4" v-for="project in projects" :key="project.id">
        <ProjectCard :project="project" @click.native="emitProjectClick(project)" />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from '@components/project/ProjectCard.vue';

export default {
  components: {
    ProjectCard,
  },
  props: {
    projects: {
      type: Array,
      required: true
    }
  },
  methods: {
    emitProjectClick(project) {
      this.$emit('project-clicked', project);
    }
  }
};
</script>

<style scoped>
.project-form{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px 4px 0 0;
  aspect-ratio: 3 / 2;
  
};
</style>
