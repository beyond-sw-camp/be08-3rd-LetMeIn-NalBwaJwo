<template>
  <div class="d-flex align-items-center justify-content-center flex-grow-1 bg-primary text-white p-2 rounded">
    <h4 
      v-if="!editing" 
      class="mb-0 text-center fs-2 cursor-pointer" 
      @click="toggleEdit">
      {{ title || "프로젝트 제목" }}
    </h4>
    <BFormInput
      v-else
      v-model="title"
      placeholder="프로젝트 제목을 입력하세요."
      class="text-center bg-primary text-white p-2 rounded"
      @keyup.enter="toggleEdit"
    />
    <BButton size="sm" variant="light" class="ml-2" @click.stop="toggleEdit">
      <EditIcon v-if="!editing" class="fs-1 text-white" />
      <CheckIcon v-else class="fs-1 text-white" />
    </BButton>
  </div>
</template>

<script>
import MaterialSymbolsEdit from "~icons/material-symbols-light/edit";
import MaterialSymbolsCheck from "~icons/material-symbols-light/check";

export default {
  props: {
    editableTitle: String
  },
  components: {
    EditIcon: MaterialSymbolsEdit,
    CheckIcon: MaterialSymbolsCheck,
  },
  data() {
    return {
      editing: false,
      title: this.editableTitle || ""
    };
  },
  methods: {
    toggleEdit() {
      this.editing = !this.editing;
      if (!this.editing) {
        this.$emit('title-updated', this.title);
      }
    }
  },
  watch: {
    editableTitle(newTitle) {
      this.title = newTitle;
    }
  }
};
</script>
