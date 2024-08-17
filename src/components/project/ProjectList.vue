<template>
    <div class="project-list">
      <ProjectCard 
        v-for="project in projects" 
        :key="project.id" 
        :project="project"
        @click="projectClicked(project)"
      />
    </div>
  </template>
  
  <script>
  import ProjectCard from './ProjectCard.vue';
  
  export default {
    components: {
      ProjectCard,
    },
    props: {
      projects: {
        type: Array,
        required: true,
      },
    },
    methods: {
      projectClicked(project) {
        this.$emit('project-clicked', project); // 부모 컴포넌트로 프로젝트 전달
      }
    }
  };
  </script>
  