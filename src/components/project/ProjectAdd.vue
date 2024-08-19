<template>
  <div class="card project-add-card shadow-sm border-0" @click="ProjectForm.vue"> 
    <!-- @click 하면 ProjectForm 모달 창이 뜨도록 -->
    <div class="card-body d-flex justify-content-center align-items-center text-center">
      <i class="bi bi-plus-circle custom-icon"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popState : false
    }
  }, 
  methods: {

  }
}
</script>

<style scoped>
.project-add-card {
  width: 100;
  aspect-ratio: 3 / 2; 
  border-radius: 0.375rem; 
  background-color: #dfdfdf;
  cursor: pointer;
  box-sizing: border-box;
  margin: 48px 16px;
}

.project-add-card .card-body {
  display: flex;
  justify-content: center;
  align-items: center;
}

.project-add-card .custom-icon {
  font-size: 3rem; 
  color: #ffffff; 
}

</style>
