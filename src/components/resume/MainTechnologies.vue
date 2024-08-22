<template lang="html">
  <BCard bg-variant="primary" text-variant="white">
    <BCardTitle>Main Technologies</BCardTitle>
    <BCardBody
      class="d-flex align-items-center flex-wrap justify-content-between"
    >
      <div class="w-75">
        <TechnologyList :technologies="detail" />
      </div>
      <BButton v-if="isLogin" @click="onSave">저장</BButton>
      <BFormSelect
        v-if="isLogin"
        class="mt-4"
        :options="options"
        v-model="currentTech"
      />
    </BCardBody>
  </BCard>
</template>
<script>
import { TechnologyList } from "@components/index";
import { RESUME_MUTATION_TYPES } from "@store/modules/resume/mutation.js";
export default {
  components: {
    TechnologyList,
  },
  computed: {
    isLogin() {
      return this.$store.state.Auth.isLogin;
    },
    detail() {
      return this.$store.getters.getTechs(+this.$route.params.resumeId);
    },
  },
  data() {
    return {
      currentTech: "",
      options: [
        { text: "Java", value: "Java" },
        { text: "React.js", value: "React" },
        { text: "React-Native", value: "React-Native" },
        { text: "Vue.js", value: "Vue.js" },
        { text: "Angular.js", value: "Angular.js" },
        { text: "TypeScript.js", value: "TypeScript.js" },
      ],
    };
  },
  methods: {
    onSave() {
      this.$store.commit(RESUME_MUTATION_TYPES.ADD_MAIN_TECH, {
        resumeId: +this.$route.params.resumeId,
        tech: this.currentTech,
      });
      this.currentTech = "";
    },
  },
};
</script>
<style lang=""></style>
