<template>
  <BCard class="mb-3">
    <BCardText>수상 및 자격 취득명 : {{ detail.certificationTitle }}</BCardText>
    <BCardText
      >수상 및 자격 취득 내용 : {{ detail.certificationContent }}</BCardText
    >
    <BCardText>수상 및 자격 취득일 : {{ detail.certificationDate }}</BCardText>
  </BCard>
</template>

<script>
export default {
  props: {
    detail: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
