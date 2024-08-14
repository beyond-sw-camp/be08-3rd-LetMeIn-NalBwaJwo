<template lang="html">
  <div class="vh-100 d-flex flex-column">
    <MainNavHeader />
    <main class="flex-grow-1">
      <RouterView />
    </main>
  </div>
</template>
<script>
import MainNavHeader from "@components/common/MainNavHeader.vue";
export default {
  component: {
    MainNavHeader,
  },
};
</script>
<style lang=""></style>
