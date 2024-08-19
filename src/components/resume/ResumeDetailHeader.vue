<template lang="html">
  <div class="d-flex align-items-center justify-content-between bg-primary">
    <div class="ps-3 py-2">
      <span class="d-flex flex-grow-1 fs-3 text-white">{{ title }}</span>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang=""></style>
