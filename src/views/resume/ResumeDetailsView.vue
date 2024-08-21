<template lang="html">
  <BContainer class="pt-5" gutter-x="0">
    <BRow md="12" lg="12" class="mb-4">
      <BCol><h1>이력서2</h1></BCol>
    </BRow>
    <BRow>
      <BCol md="4" class="me-5">
        <BRow
          class="mb-3"
          v-for="sideDetail in sideDetails"
          :key="sideDetail.id"
        >
          <BCol>
            <component :is="sideDetail.name"></component>
          </BCol>
        </BRow>
      </BCol>
      <BCol md="7">
        <BRow v-for="detail in details" :key="detail.id">
          <BRow class="mb-3">
            <BCol>
              <ResumeDetailHeader :title="detail.title">
                <BButton
                  class="bg-dark text-white me-3"
                  :class="detail.formVisible ? null : 'collapsed'"
                  :aria-expanded="detail.formVisible ? 'true' : 'false'"
                  :aria-controls="detail.id"
                  @click="toggleForm(detail.id)"
                >
                  추가
                </BButton>
              </ResumeDetailHeader>
            </BCol>
          </BRow>
          <BCollapse :id="detail.id" v-model="detail.formVisible">
            <BRow>
              <BCol>
                <component :is="detail.form" :formId="detail.id"></component>
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
  },

  computed: {
    details() {
      return this.$store.state.Resume.details;
    },
    sideDetails() {
      return this.$store.state.Resume.sideDetails;
    },
  },

  methods: {
    toggleForm(formId) {
      this.$store.commit({ type: RESUME_MUTATION_TYPES.TOGGLE_FORM, formId });
    },
  },
};
</script>
<style lang="css" scoped></style>
