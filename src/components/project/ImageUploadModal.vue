<template>
  <BModal
    v-model="visible"
    hide-footer
    size="lg"
    title="이미지 업로드"
    @hidden="closeModal"
  >
    <div class="p-3">
      <ImageUpload 
        :initial-images="images"
        @images-submitted="submit"
      />
    </div>
  </BModal>
</template>

<script>
import ImageUpload from './ImageUpload.vue';

export default {
  components: {
    ImageUpload,
  },
  props: {
    initialImages: {
      type: Array,
      default: () => [],
    },
    modelValue: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      visible: this.modelValue,
      images: [],
    };
  },
  watch: {
    modelValue(newVal) {
      this.visible = newVal;
      if (newVal) {
        this.images = [...this.initialImages]; // 모달이 열릴 때 초기 이미지를 복사
      }
    },
    visible(newVal) {
      this.$emit('update:modelValue', newVal);
    },
  },
  methods: {
    submit(updatedImages) {
      this.$emit('images-submitted', updatedImages);
      this.closeModal();
    },
    closeModal() {
      this.$emit('update:modelValue', false);
    },
  },
};
</script>
