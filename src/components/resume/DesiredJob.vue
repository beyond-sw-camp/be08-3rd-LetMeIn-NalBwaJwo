<template lang="html">
  <BCard bg-variant="primary" text-variant="white">
    <BCardTitle>Desired Job</BCardTitle>
    <BCardBody
      class="d-flex align-items-center flex-wrap justify-content-between"
    >
      <div class="w-75">
        <DesiredJobList :jobs="jobs" />
      </div>
      <BButton v-if="isLogin">저장</BButton>
      <BFormSelect v-if="isLogin" class="mt-4" :options="options" />
    </BCardBody>
  </BCard>
</template>
<script>
import { DesiredJobList } from "@components/index";
export default {
  components: {
    DesiredJobList,
  },
  data() {
    return {
      jobs: ["Backend", "FrontEnd"],
    };
  },
  computed:{
    isLogin() {
      return this.$store.state.Auth.isLogin
    },
  },
};
</script>
<style lang=""></style>
