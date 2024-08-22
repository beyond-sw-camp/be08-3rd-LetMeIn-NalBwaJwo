<template lang="html">
  <EducationDetail
    v-for="detail in details"
    :key="detail.detailId"
    :detail="detail"
  />
</template>
<script>
import { EducationDetail } from "@components/index";
export default {
  computed: {
    details() {
      return this.$store.getters.getEducationDetails(
        +this.$route.params.resumeId
      );
    },
  },
};
</script>
<style lang=""></style>
