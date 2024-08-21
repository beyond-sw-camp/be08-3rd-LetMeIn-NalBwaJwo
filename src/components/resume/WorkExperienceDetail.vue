<template>
  <BCard>
    <BCardText>회사명 : {{ detail.companyName }}</BCardText>
    <BCardText>사용 스택 : {{ detail.stack }}</BCardText>
    <BCardText>직무 : {{ detail.job }}</BCardText>
    <BCardText>입사일 : {{ detail.startDate }}</BCardText>
    <BCardText>퇴사일 : {{ detail.endDate }}</BCardText>
    <BCardText>재직 기간 : {{ employmentDuration }}</BCardText>
  </BCard>
</template>

<script>
export default {
  computed: {
    detail() {
      return this.$store.state.Resume.workExperienceDetail;
    },
    employmentDuration() {
      return this.$store.getters.employmentDuration;
    },
  },
};
</script>

<style lang="scss" scoped></style>
