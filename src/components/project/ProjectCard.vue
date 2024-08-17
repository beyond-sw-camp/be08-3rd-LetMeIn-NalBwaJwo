<template>
    <div class="project-card">
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      project: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  /* 카드 스타일 설정 */
  .project-card {
    border: 1px solid #ddd;
    padding: 16px;
    margin: 8px;
    border-radius: 4px;
  }
  </style>