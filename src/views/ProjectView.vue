<template>
  <BContainer>
    <div class="container max-width-lg h-100 d-flex flex-column justify-content-center">
      <div class="mb-3">

        <BRow class="text-center mt-5">
          <BCol cols="4">
            <!-- 비율 수정 -->
            <BCard
              @click="ShowModal"
              class="d-flex align-items-center justify-content-center card-3-2">
              <!-- <AddIcon font-scale="5"></AddIcon> -->
              <br><br>
              <i class="bi bi-plus-circle custom-icon"></i>
              <BCardText></BCardText>
            </BCard>
          </BCol>
        </BRow>
      </div>
    </div>

    <!-- 모달 구성 -->
    <BModal 
      v-model="isModalVisible" 
      hide-footer 
      hide-header
      size="xl">
      <ProjectForm @close-modal="HideModal" />
    </BModal>
  </BContainer>
</template>

<script>
import ProjectForm from '@components/project/ProjectForm.vue';
import AddIcon from '~icons/material-symbols-light/AddCircleOutline';

export default {
  components: {
    ProjectForm,
    AddIcon,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    ShowModal() {
      this.isModalVisible = true;
    },
    HideModal() {
      this.isModalVisible = false;
    }
  }
};
</script>

<style scoped>
.card-3-2 {
  width: 100%;               /* 가로를 100%로 설정 */
  padding-bottom: 17%;        /* 비율 유지 */
  position: relative;         /* 자식 요소 배치 */
  background-color: #e6e6e6;
  cursor: pointer;
  display: flex;              /* 플렉스 박스로 설정 */
  justify-content: center;    /* 수평 중앙 정렬 */
  align-items: center;        /* 수직 중앙 정렬 */
  text-align: center;         /* 텍스트 중앙 정렬 */
  height: 100%;
  
}

/* 카드 내부의 아이콘과 텍스트가 중앙에 위치 */
.card-3-2 > * {
  margin: 0;                  /* 내부 요소 여백 제거 */
}

.custom-icon {
  font-size: 3.4rem;
  color: #000000;
}
</style>
