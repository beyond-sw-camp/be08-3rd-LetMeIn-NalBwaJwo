<template>
  <div class="project-add-card" @click="goToAddProject">
    <div class="card-body">
      <i class="bi bi-plus-circle custom-icon"></i>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToAddProject() {
      this.$router.push('/add-project');
    }
  }
}
</script>

<style scoped>
.project-add-card {
  width: 100%;
  height: 62.5%;
  flex: 1 1 calc(33.333% - 32px);
  aspect-ratio: 3 / 2; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #dfdfdf;
  cursor: pointer;
  box-sizing: border-box;
  position: relative;
  margin: 48px 16px; 
}

.card-body {
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-icon {
  font-size: 3rem;
  color: #ffffff;
}
</style>
