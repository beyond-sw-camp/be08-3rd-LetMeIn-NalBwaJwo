<template>
    <div class="project-card" @click="$emit('click')">
      <img :src="project.images[0]?.url" v-if="project.images.length > 0" alt="Project Image" class="project-image" />
      <h2>{{ project.title }}</h2>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      project: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .project-card {
    border: 1px solid #ddd;
    padding: 16px;
    margin: 8px;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
  }
  
  .project-image {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 12px;
  }
  </style>
  