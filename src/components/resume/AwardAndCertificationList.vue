<template lang="html">
  <AwardsAndCertificationDetail
    v-for="detail in details"
    :key="detail.detailId"
    :detail="detail"
  />
</template>
<script>
import { AwardsAndCertificationDetail } from "@components/index";
export default {
  component: {
    AwardsAndCertificationDetail,
  },
  computed: {
    details() {
      return this.$store.getters.getAwardsAndCertificationDetails(
        +this.$route.params.resumeId
      );
    },
  },
};
</script>
<style lang=""></style>
