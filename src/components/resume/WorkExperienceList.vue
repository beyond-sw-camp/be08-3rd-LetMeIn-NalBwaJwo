<template lang="html">
  <WorkExperienceDetail
    v-for="(detail, index) in details"
    :key="detail.detailId"
    :detail="detail"
  />
</template>
<script>
import { WorkExperienceDetail } from "@components/index";
export default {
  components: {
    WorkExperienceDetail,
  },
  computed: {
    details() {
      return this.$store.getters.getWorkExperienceDetails(
        +this.$route.params.resumeId
      );
    },
  },
};
</script>
<style lang=""></style>
