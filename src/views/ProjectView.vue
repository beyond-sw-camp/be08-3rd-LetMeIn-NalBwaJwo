<template>
  <BContainer>
    <div class="container max-width-lg h-100 d-flex flex-column justify-content-center">
      <div class="mb-3">
        <h1 class="text-center mt-5">Project</h1>

        <!-- 프로젝트 목록 -->
        <BRow class="text-center mt-4">
          <ProjectList :projects="projects" @project-clicked="showProjectDetails" />
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

    <!-- 프로젝트 상세 모달 -->
    <BModal 
      v-model="isDetailModalVisible" 
      hide-footer 
      hide-header
      size="xl">
      <ProjectDetail 
        :title="selectedProject?.title" 
        :description="selectedProject?.description" 
        :content="selectedProject?.content" 
        :images="selectedProject?.images" 
        :links="selectedProject?.links" 
        @close-modal="HideDetailModal"
      />
    </BModal>

    <!-- 프로젝트 추가 모달 -->
    <BModal 
      v-model="isModalVisible" 
      hide-footer 
      hide-header
      size="xl">
      <ProjectForm @submit-project="addProject" @close-modal="HideModal" />
    </BModal>
  </BContainer>
</template>

<script>
import ProjectForm from '@components/project/ProjectForm.vue';
import ProjectList from '@components/project/ProjectList.vue';
import ProjectDetail from './ProjectDetail.vue';
import AddIcon from '~icons/material-symbols-light/AddCircleOutline';

export default {
  components: {
    ProjectForm,
    ProjectList,
    ProjectDetail,
    AddIcon,
  },
  data() {
    return {
      isModalVisible: false,
      isDetailModalVisible: false,
      projects: [], // 프로젝트 리스트를 저장할 배열
      selectedProject: null, // 선택된 프로젝트
    };
  },
  methods: {
    ShowModal() {
      this.isModalVisible = true;
    },
    HideModal() {
      this.isModalVisible = false;
    },
    showProjectDetails(project) {
      this.selectedProject = project;
      this.isDetailModalVisible = true;
    },
    HideDetailModal() {
      this.isDetailModalVisible = false;
      this.selectedProject = null;
    },
    addProject(newProject) {
      this.projects.push(newProject); // 새 프로젝트를 리스트에 추가
      this.HideModal(); // 모달 닫기
    }
  }
};
</script>
