<template>
  <BContainer>
    <div class="container max-width-lg h-100 d-flex flex-column justify-content-center">
      <div class="mb-3">
        <h1 class="text-center mt-5">Project</h1>

        <!-- 프로젝트 목록 -->
        <BRow class="text-center mt-4">
          <ProjectList :projects="projects" @project-clicked="showProjectDetails" />

          <BCol cols="4">
            <!-- 비율 수정 -->
            <BCard v-if="isLogin"
              @click="ShowModal"
              class="d-flex align-items-center justify-content-center card-3-2">
              <br><br>
              <i class="bi bi-plus-circle custom-icon"></i>
              <BCardText></BCardText>
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
        :id="selectedProject?.id"
        :title="selectedProject?.title" 
        :description="selectedProject?.description" 
        :content="selectedProject?.content" 
        :images="selectedProject?.images" 
        @close-modal="HideDetailModal"
        @save-project="updateProject"
        @delete-project="deleteProject"
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
import ProjectDetail from '../components/project/ProjectDetail.vue';
import ProjectList from '@components/project/ProjectList.vue';
import { v4 as uuidv4 } from 'uuid';

export default {
  components: {
    ProjectForm,
    ProjectDetail,
  },
  computed:{
    isLogin() {
      return this.$store.state.Auth.isLogin
    }
  },
  data() {
    return {
      isModalVisible: false,
      isDetailModalVisible: false,
      projects: [
        { id: uuidv4(), title: 'kakaomap', content: 'Description A', images: [{url: 'https://i.namu.wiki/i/PJXhYEqwxDj8ck8vHS4zfbrur-ZxVdWSeKTuvAJnoDtLwky1YuZxN0DVu5DYCUwWfITmQGf0gB6km50-Yva3Cg.webp'}, {url: 'https://newsimg.sedaily.com/2022/05/13/265YCDPXAM_1.jpg'}] },
        { id: uuidv4(), title: 'TMAP', content: 'Description B', images: [{url: 'https://newsimg.sedaily.com/2022/05/13/265YCDPXAM_1.jpg'}] },
        { id: uuidv4(), title: '배달의 민족', content: 'Description C', images: [{url: 'https://image.newdaily.co.kr/site/data/img/2021/06/08/2021060800063_0.jpg'}] },
        { id: uuidv4(), title: '치지직', content: 'Description D', images: [{url: 'https://kr.aving.net/news/photo/202404/1789380_724854_1624.jpg'}] },
        { id: uuidv4(), title: '트위치', content: 'Description E', images: [{url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEVBGnE2rva5bDMpCoLVrM6c_y8U6nQttpSg&s'}] },
        { id: uuidv4(), title: '제목6', content: 'Description F', images: ['']}
      ], // 프로젝트 리스트를 저장할 배열
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
      console.log(newProject);
      
      this.projects.push(newProject); // 새 프로젝트를 리스트에 추가
      this.HideModal(); // 모달 닫기
    },
    updateProject(newProject) {
      // id 통해서 바꿔야할 프로젝트 찾고 newProject로 내용 바꾸기
      console.log("[ProjectView] [updateProject]");
      
      console.log(newProject);
      
      const target = this.projects.find((project) => newProject.id === project.id);

      target.title = newProject.title;
      target.content = newProject.content;
      target.images = newProject.images;
        
      
      this.HideModal();
    },

    deleteProject(newProject) {
    console.log("[ProjectView] [deleteProject]");
    console.log(newProject);
    
    this.projects = this.projects.filter((project) => project.id !== newProject.id);
    
    this.HideModal();
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
