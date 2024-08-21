<template>
  <div class="project-card">
    <div class="card-header">
      <!-- 즐겨찾기 버튼 -->
      <button class="favorite-button" @click="toggleFavorite">
        <i :class="isFavorite ? 'bi bi-heart-fill' : 'bi bi-heart'"></i>
      </button>
      <!-- 수정 버튼 -->
      <button class="edit-button" @click="emitEditProject">
        <i class="bi bi-pencil"></i>
      </button>
      <!-- 삭제 버튼 -->
      <button class="delete-button" @click="emitDeleteProject">
        <i class="bi bi-trash"></i>
      </button>
    </div>
    <!-- 프로젝트 이미지 -->
    <img :src="project.images?.[0].url" alt="Project Image" class="project-image" 
      @error="onImageError"/>
    <h2 class="project-title">{{ project.title }}</h2>
  </div>
</template>

<script>

export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isFavorite: false, // 즐겨찾기 상태
    };
  },
  methods: {
    toggleFavorite() {
      this.isFavorite = !this.isFavorite;
      if (this.isFavorite) {
        alert('즐겨찾기에 추가되었습니다.');
      } else {
        alert('즐겨찾기에서 취소되었습니다.');
      }
    },
    emitEditProject() {
      this.$emit('edit-project', this.project);
    },
    emitDeleteProject() {
      if (confirm('정말로 삭제하시겠습니까?')) {
        this.$emit('delete-project', this.project);
      }
    },
    onImageError(event){
      // event.target.src = require("@assets/project/default-image.png");
    }
  }
}
</script>

<style scoped>
.project-card {
  position: relative;
  flex: 1 1 calc(33.333% - 32px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: #fff;
  margin: 48px 16px;
  box-sizing: border-box;
  cursor: pointer;
  overflow: hidden; /* 카드에서 요소가 넘치지 않도록 설정 */
}

.card-header {
  position: relative;
  top:0px;
  left: 120px;
  display: flex;
  gap: 8px;
}

.favorite-button,
.edit-button,
.delete-button {
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: rgb(238, 44, 95);
  height: 40px;
}
.project-card {
  width: 100%;
  flex: 1 1 100%;
  aspect-ratio: 3 / 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #fff;
  position: relative;
}

.project-image {
  width: 60%;
  height: auto; 
  object-fit: cover;
  border-radius: 4px 4px 0 0;
  aspect-ratio: 3 / 2;
}

.project-title {
  font-size: 1.6rem;
  font-weight: 500;
  padding-top: 10px;
  text-align: center;
}
</style>
