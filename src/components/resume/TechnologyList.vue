<template lang="html">
  <ul class="d-flex flex-wrap flex-grow-1 p-0 m-0">
    <TechnologyListItem
      v-for="(technology, index) in technologies"
      :name="technology"
      :key="index"
    />
  </ul>
</template>
<script>
import { TechnologyListItem } from "@components/index";
export default {
  props: ["technologies"],
  components: {
    TechnologyListItem,
  },
};
</script>
<style lang=""></style>
