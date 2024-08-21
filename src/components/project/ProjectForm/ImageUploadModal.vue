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
        ref="imageUpload"
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
      images: [...this.initialImages], // 이미지 복사본을 사용
    };
  },
  methods: {
    submit(newImages) {
      this.images = newImages;
      this.$emit('images-submitted', this.images);
      this.closeModal();
    },
    closeModal() {
      this.$emit('update:modelValue', false);
    },
    resetImages() {
      this.images = [];
      this.$refs.imageUpload.resetImages(); // ImageUpload 내의 이미지도 초기화
    },
  },
  watch: {
    modelValue(newVal) {
      this.visible = newVal;
    },
    visible(newVal) {
      this.$emit('update:modelValue', newVal);
    },
    initialImages(newImages) {
      this.images = [...newImages];
    },
  },
};
</script>
