<template lang="html">
  <div
    class="container max-width-lg vh-100 d-flex flex-column justify-content-center"
  >
    <div class="mb-3">
      <h1 class="text-center">Let me In</h1>
    </div>
    <LoginForm />
  </div>
</template>
<script>
import { LoginForm } from "@components/index";

export default {
  components: {
    LoginForm,
  },
};
</script>
<style scoped>
h1 {
  font-size: 4rem;
}
.max-width-lg {
  max-width: 600px;
}
</style>
