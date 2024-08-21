<template lang="html">
  <BContainer class="pt-5" gutter-x="0">
    <BRow md="12" lg="12" class="mb-4">
      <BCol><h1>이력서2</h1></BCol>
    </BRow>
    <BRow>
      <!-- 왼쪽 사이드 -->
      <BCol md="4" class="me-5">
        <BRow class="mb-3" v-for="side in leftSideCardList" :key="side.id">
          <BCol>
            <component :is="side.component"></component>
          </BCol>
        </BRow>
      </BCol>
      <!-- 오른쪽 사이드 -->
      <BCol md="7">
        <BRow v-for="main in mainCardList" :key="main.id">
          <BRow class="mb-3">
            <BCol>
              <ResumeDetailHeader :title="main.title">
                <!-- '추가' 버튼 -->
                <BButton
                  v-if="isLogin"
                  class="bg-dark text-white me-3"
                  :class="main.formVisible ? null : 'collapsed'"
                  :aria-expanded="main.formVisible ? 'true' : 'false'"
                  :aria-controls="main.id"
                  @click="openForm(main.id)"
                >
                  추가
                </BButton>
              </ResumeDetailHeader>
            </BCol>
          </BRow>
          <BRow>
            <BCol class="mb-3">
              <component :is="main.detailComponent" />
            </BCol>
          </BRow>
          <!-- 입력 폼 -->
          <BCollapse :id="main.id" v-model="main.formVisible">
            <BRow>
              <BCol>
                <component
                  v-if="isLogin"
                  class="mb-3"
                  :is="main.formComponent"
                  :formId="main.id"
                  @close-form="closeForm"
                ></component>
              </BCol>
            </BRow>
          </BCollapse>
        </BRow>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script>
import {
  ResumeDetailHeader,
  WorkExperienceForm,
  EducationForm,
  AwardsAndCertificationForm,
  Profile,
  GithubRepository,
  MainTechnologies,
  DesiredJob,
  WorkExperienceDetail,
  EducationDetail,
  AwardsAndCertificationDetail,
} from "@components/index";

import { RESUME_MUTATION_TYPES } from "@store/modules/resume/mutation.js";

export default {
  components: {
    ResumeDetailHeader,
    EducationForm,
    WorkExperienceForm,
    AwardsAndCertificationForm,
    Profile,
    GithubRepository,
    MainTechnologies,
    DesiredJob,
    WorkExperienceDetail,
    EducationDetail,
    AwardsAndCertificationDetail,
  },

  data() {
    return {
      // 왼쪽 사이드에 출력되는 카드 리스트
      leftSideCardList: [
        {
          id: "profile",
          component: "Profile",
        },
        {
          id: "githubRepository",
          component: "GithubRepository",
        },
        {
          id: "mainTech",
          component: "MainTechnologies",
        },
        {
          id: "desiredJob",
          component: "DesiredJob",
        },
      ],
      // 오른쪽에 출력되는 카드 리스트
      mainCardList: [
        {
          id: "workExperience",
          title: "업무경험",
          detailComponent: "WorkExperienceDetail",
          formComponent: "WorkExperienceForm",
          formVisible: false,
        },
        {
          id: "education",
          title: "학력",
          detailComponent: "EducationDetail",
          formComponent: "EducationForm",
          formVisible: false,
        },
        {
          id: "awardsAndCertification",
          title: "수상/자격증",
          detailComponent: "awardsAndCertificationDetail",
          formComponent: "AwardsAndCertificationForm",
          formVisible: false,
        },
      ],
    };
  },

  computed: {
    isLogin() {
      return this.$store.state.Auth.isLogin;
    },
  },

  methods: {
    // 폼 열기
    openForm(formId) {
      const target = this.mainCardList.find((card) => card.id === formId);
      target.formVisible = true;
    },
    // 폼 닫기
    closeForm(formId) {
      const target = this.mainCardList.find((card) => card.id === formId);
      target.formVisible = false;
    },
  },
};
</script>

<style lang="css" scoped></style>
