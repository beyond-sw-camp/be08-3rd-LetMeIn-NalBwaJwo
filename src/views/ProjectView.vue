<template>
  <b-container>
    <div class="container max-width-lg h-100 d-flex flex-column justify-content-center">
      <div class="mb-3">
        <h1 class="text-center mt-5">Project</h1>

        <!-- ProjectForm 컴포넌트를 올바르게 사용 -->
        <ProjectForm
          v-model="isModalVisible"
        />

        <b-row class="text-center mt-4">
          <b-col cols="4">
            <b-card
              @click="showModal"
              class="d-flex align-items-center justify-content-center"
              style="height: 100%;"
            >
              <AddIcon font-scale="3"></AddIcon>
              <b-card-text>추가등록</b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </div>
  </b-container>
</template>

<script>
import ProjectForm from '@components/project/ProjectForm.vue';
import AddIcon from "~icons/material-symbols-light/AddCircleOutline";

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
    showModal() {
      console.log("Showing modal");
      this.isModalVisible = true; // 모달을 표시하도록 상태를 변경
    }
  }
};
</script>
