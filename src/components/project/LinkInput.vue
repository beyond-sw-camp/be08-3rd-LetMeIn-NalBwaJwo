<template>
  <BModal v-model="visible" hide-footer title="링크 추가">
    <div class="p-3">
      <BFormGroup label="링크 이름">
        <BFormInput
          v-model="linkName"
          placeholder="링크 이름을 입력하세요."
        />
      </BFormGroup>
      <BFormGroup label="링크 주소">
        <BFormInput
          v-model="linkUrl"
          placeholder="링크 주소를 입력하세요."
        />
      </BFormGroup>
      <BButton variant="primary" class="mt-3" @click="submitLink">추가</BButton>
      
      <ul v-if="links.length" class="mt-3">
        <li v-for="(link, index) in links" :key="index">
          <a :href="link.url" target="_blank">{{ link.name }}</a>
          <BButton variant="danger" size="sm" class="ml-2" @click="removeLink(index)">삭제</BButton>
        </li>
      </ul>
    </div>
    <template #modal-footer>
      <BButton variant="secondary" @click="closeModal">닫기</BButton>
    </template>
  </BModal>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
    initialLinks: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      visible: this.modelValue,
      linkName: "",  // 링크 이름
      linkUrl: "",   // 링크 주소
      links: [...this.initialLinks], // 초기 링크 목록을 복사하여 사용
    };
  },
  methods: {
    closeModal() {
      this.$emit("update:modelValue", false);
    },
    submitLink() {
      if (this.linkName.trim() && this.linkUrl.trim()) {
        this.links.push({
          name: this.linkName.trim(),
          url: this.linkUrl.trim(),
        });
        this.linkName = "";
        this.linkUrl = "";
        this.updateParentLinks();
      }
    },
    removeLink(index) {
      this.links.splice(index, 1);
      this.updateParentLinks();
    },
    updateParentLinks() {
      this.$emit("links-updated", this.links);
    },
  },
  watch: {
    modelValue(newVal) {
      this.visible = newVal;
    },
    visible(newVal) {
      this.$emit("update:modelValue", newVal);
    },
    initialLinks(newLinks) {
      this.links = [...newLinks];
    },
  },
};
</script>


<style scoped>
.mr-2 {
  margin-right: 0.5rem; /* 링크 추가 버튼과 등록 버튼 사이의 간격 */
}
</style>