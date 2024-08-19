<template lang="html">
  <ul class="d-flex flex-wrap flex-grow-1 p-0 m-0">
    <DesiredJobListItem v-for="(job, index) in jobs" :name="job" :key="index" />
  </ul>
</template>
<script>
import { DesiredJobListItem } from "@components/index";
export default {
  props: ["jobs"],
  components: {
    DesiredJobListItem,
  },
};
</script>
<style lang=""></style>
