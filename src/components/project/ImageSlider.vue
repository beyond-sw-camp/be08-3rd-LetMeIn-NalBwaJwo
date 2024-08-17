<template>
  <div class="image-slider">
    <div v-if="images.length > 0" class="image-container" @dblclick="showImageUploader">
      <img 
        :src="images[currentImageIndex]?.url" 
        class="slider-image" 
        alt="Uploaded Image" 
      />
      <BButton class="slider-btn left-btn" variant="light" @click="prevImage">
        <LeftArrowIcon class="fs-2 text-white" />
      </BButton>
      <BButton class="slider-btn right-btn" variant="light" @click="nextImage">
        <RightArrowIcon class="fs-2 text-white" />
      </BButton>
    </div>
    <div v-else class="empty-state d-flex align-items-center justify-content-center">
      <BButton variant="primary" class="add-image-btn" @click="showImageUploader">
        <ImageIcon class="large-icon text-primary" /><br>
        <span>이미지 추가</span>
      </BButton>
    </div>
  </div>
</template>

<script>
import MaterialSymbolsImage from "~icons/material-symbols-light/image";
import MaterialSymbolsChevronLeft from "~icons/material-symbols-light/chevron-left";
import MaterialSymbolsChevronRight from "~icons/material-symbols-light/chevron-right";

export default {
  components: {
    ImageIcon: MaterialSymbolsImage,
    LeftArrowIcon: MaterialSymbolsChevronLeft,
    RightArrowIcon: MaterialSymbolsChevronRight,
  },
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentImageIndex: 0,
    };
  },
  methods: {
    prevImage() {
      if (this.images.length > 0) {
        this.currentImageIndex =
          (this.currentImageIndex - 1 + this.images.length) % this.images.length;
      }
    },
    nextImage() {
      if (this.images.length > 0) {
        this.currentImageIndex =
          (this.currentImageIndex + 1) % this.images.length;
      }
    },
    showImageUploader() {
      this.$emit("show-image-uploader"); // 이벤트를 통해 모달을 열도록 함
    },
  },
};
</script>

<style scoped>
.image-slider {
  height: 400px;
  position: relative;
}

.image-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.slider-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}

.empty-state {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.large-icon {
  font-size: 150px; /* 아이콘 크기 */
}

.add-image-btn {
  padding: 0;
  background: transparent;
  border: none;
}

.slider-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}

.left-btn {
  left: 10px;
}

.right-btn {
  right: 10px;
}
</style>
