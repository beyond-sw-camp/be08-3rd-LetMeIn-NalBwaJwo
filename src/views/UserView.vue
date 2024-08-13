<template lang="html">
  <div class="vh-100 d-flex flex-column">
    <MainNavHeader />
    <main class="flex-grow-1">
      <RouterView />
    </main>
  </div>
</template>
<script>
import MainNavHeaer from "@components/common/MainNavHeader.vue";
export default {
  component: {
    MainNavHeaer,
  },
};
</script>
<style lang=""></style>
