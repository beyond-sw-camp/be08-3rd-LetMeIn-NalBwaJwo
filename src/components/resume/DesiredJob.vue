<template lang="html">
  <BCard bg-variant="primary" text-variant="white">
    <BCardTitle>Desired Job</BCardTitle>
    <BCardBody
      class="d-flex align-items-center flex-wrap justify-content-between"
    >
      <div class="w-75">
        <DesiredJobList :jobs="jobs" />
      </div>
      <BButton v-if="isLogin" @click="onSave">저장</BButton>
      <BFormSelect
        v-if="isLogin"
        class="mt-4"
        :options="options"
        v-model="currentJob"
      />
    </BCardBody>
  </BCard>
</template>
<script>
import { DesiredJobList } from "@components/index";
import { RESUME_MUTATION_TYPES } from "@store/modules/resume/mutation.js";
export default {
  components: {
    DesiredJobList,
  },
  data() {
    return {
      currentJob: "",
      options: [
        { text: "Backend", value: "BackEnd" },
        { text: "FrontEnd", value: "FrontEnd" },
        { text: "Infra", value: "Infra" },
        { text: "UI/UX", value: "UI/UX" },
        { text: "DBA", value: "DBA" },
      ],
    };
  },
  computed: {
    jobs() {
      return this.$store.getters.getDesiredJobs(+this.$route.params.resumeId);
    },
    isLogin() {
      return this.$store.state.Auth.isLogin;
    },
  },
  methods: {
    onSave() {
      this.$store.commit(RESUME_MUTATION_TYPES.ADD_DESIRED_JOB, {
        resumeId: +this.$route.params.resumeId,
        desiredJob: this.currentJob,
      });
      this.currentJob = "";
    },
  },
};
</script>
<style lang=""></style>
