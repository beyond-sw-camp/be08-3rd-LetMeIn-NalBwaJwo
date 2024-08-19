<template>
  <div class="project-card">
    <div class="card-header">
      <!-- 빈 하트와 채워진 하트 클릭에 따라 동적으로 변경 -->
      <button class="favorite-button" @click="toggleFavorite">
        <i :class="isFavorite ? 'bi bi-heart-fill' : 'bi bi-heart'"></i>
      </button>
      <button class="edit-button" @click="editProject">
        <i class="bi bi-pencil"></i>
      </button>
      <button class="delete-button" @click="deleteProject">
        <i class="bi bi-trash"></i>
      </button>
    </div>
    <img :src="project.image" alt="Project Image" class="project-image" />
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
      // 기본으로 빈하트
      isFavorite: false
    };
  },
  methods: {
    toggleFavorite() {
      if (this.isFavorite) {
        this.cancelFavorite();
      } else {
        this.addFavorite();
      }
      // 하트 상태 반전
      this.isFavorite = !this.isFavorite;
    },
    addFavorite() {
      // 즐겨찾기 추가 기능 
      alert('즐겨찾기에 추가되었습니다.');
    },
    cancelFavorite() {
      // 즐겨찾기 취소 기능 
      alert('즐겨찾기에서 취소되었습니다.');
    },
    editProject() {
      // 수정 기능 
    },
    deleteProject() {
      // 삭제 기능 
      alert('삭제하시겠습니까?');
    }
  }
}
</script>


<style scoped>
.project-card {
  position: relative;
  flex: 1 1 calc(33.333% - 32px);
  aspect-ratio: 3 / 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #fff;
  margin: 48px 16px;
}

.card-header {
  position: absolute;
  top: -40px;
  left: 8px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
}

.favorite-button,
.edit-button,
.delete-button {
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: rgb(252, 158, 124);
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px 4px 0 0;
}

.project-title {
  font-size: 1.6rem;
  font-weight: 500;
  padding-top: 10px;
  margin: 10;
  text-align: center;
}
</style>
