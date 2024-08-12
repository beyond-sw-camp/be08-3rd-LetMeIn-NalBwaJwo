<template lang="html">
  <div class="w-100 vh-100 d-flex justify-content-center align-items-center">
    <BButton @click="goToTodo">투두 보기</BButton>
  </div>
</template>
<script>
export default {
  methods: {
    goToTodo() {
      this.$router.push("/todo");
    },
  },
};
</script>
<style lang="css" scoped></style>
