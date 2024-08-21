<template>
  <BCard>
    <BCardText>학교 : {{ detail.school }}</BCardText>
    <BCardText>전공 : {{ detail.stack }}</BCardText>
    <BCardText>학위 : {{ detail.job }}</BCardText>
    <BCardText>입학일 : {{ detail.startDate }}</BCardText>
    <BCardText>졸업(예정)일 : {{ detail.endDate }}</BCardText>
    <BCardText>평균 학점 : {{ detail.averageGPA }}</BCardText>
    <BCardText>최고 학점 : {{ detail.highestGPA }}</BCardText>
  </BCard>
</template>

<script>
export default {
  computed: {
    detail() {
      return this.$store.state.Resume.educationDetail;
    },
  },
};
</script>

<style lang="scss" scoped></style>
