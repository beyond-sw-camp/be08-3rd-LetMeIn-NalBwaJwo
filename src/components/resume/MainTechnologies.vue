<template lang="html">
  <BCard bg-variant="primary" text-variant="white">
    <BCardTitle>Main Technologies</BCardTitle>
    <BCardBody
      class="d-flex align-items-center flex-wrap justify-content-between"
    >
      <div class="w-75">
        <TechnologyList :technologies="technologies" />
      </div>
      <BButton>저장</BButton>
      <BFormSelect class="mt-4" :options="options" />
    </BCardBody>
  </BCard>
</template>
<script>
import { TechnologyList } from "@components/index";
export default {
  components: {
    TechnologyList,
  },
  data() {
    return {
      technologies: [
        "Java",
        "React.js",
        "React-Native",
        "Vue.js",
        "Vue.js",
        "Vue.js",
        "Vue.js",
        "Vue.js",
      ],
      options: [
        { text: "Java", value: "Java" },
        { text: "React.js", value: "React" },
        { text: "React-Native", value: "React-Native" },
        { text: "Vue.js", value: "Vue.js" },
      ],
    };
  },
};
</script>
<style lang=""></style>
