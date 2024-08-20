<template>
  <BContainer>
    <div class="container max-width-lg h-100 d-flex flex-column justify-content-center">
      <div class="mb-3">
        <h1 class="text-center mt-5">Project</h1>

        <BRow class="text-center mt-4">
          <BCol cols="4">
            <BCard
              @click="ShowModal"
              class="d-flex align-items-center justify-content-center"
              style="height: 100%;"
            >
              <AddIcon font-scale="3"></AddIcon>
              <BCardText>추가등록</BCardText>
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
