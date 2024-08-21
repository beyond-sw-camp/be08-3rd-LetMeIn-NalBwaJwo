<template lang="html">
  <div class="vh-100 d-flex flex-column">
    <MainNavHeader />
    <main class="flex-grow-1">
      <RouterView />
    </main>
    <MainFooter/>
  </div>
</template>
<script>
import MainFooter from "@components/common/MainFooter.vue";
import MainNavHeader from "@components/common/MainNavHeader.vue";
export default {
  component: {
    MainNavHeader,
    MainFooter
  },
};
</script>
<style lang=""></style>
