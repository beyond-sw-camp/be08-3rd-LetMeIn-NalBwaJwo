<template>
  <div class="container project-list-container">
    <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-4 mb-4" v-for="project in projects" :key="project.id">
        <ProjectCard :project="project" />
      </div>
      <!-- <div class="col-sm-12 col-md-6 col-lg-4 mb-4"> -->
        <ProjectView/>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import ProjectCard from '@components/project/ProjectCard.vue'
import ProjectView from '@views/ProjectView.vue'
// import ProjectAdd from '@components/project/ProjectAdd.vue' 없애고 ProjectForm 컴포넌트로 바꾸기

export default {
  components: {
    ProjectCard,
    // ProjectAdd
    ProjectView
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
.project-form{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px 4px 0 0;
  aspect-ratio: 3 / 2;
  
};
</style>
