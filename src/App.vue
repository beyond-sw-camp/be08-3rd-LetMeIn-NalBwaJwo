<template>
  <RouterView />
</template>
<script>
import {AUTH_MUTATION_TYPES} from "@store/modules/auth/mutaion.js"
export default {
  mounted() {
    this.$store.commit(AUTH_MUTATION_TYPES.CHECK_LOGIN)
  }
};
</script>
<style scoped></style>
