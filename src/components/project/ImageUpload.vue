<template>
  <div>
    <div 
      class="image-upload border border-primary rounded p-3 text-center"
      @dragover.prevent
      @dragenter.prevent="isDragging = true"
      @dragleave="isDragging = false"
      @drop.prevent="handleDrop"
      :class="{ 'dragging': isDragging }"
    >
      <p v-if="images.length === 0">이미지 파일을 드래그 앤 드롭하거나 클릭하여 업로드하세요.</p>
      <draggable v-else v-model="images" class="image-preview d-flex flex-wrap justify-content-start overflow-auto" @end="updateImageOrder" itemKey="url">
        <template #item="{ element, index }">
          <div class="image-thumbnail m-2 position-relative">
            <img :src="element.url" alt="Uploaded Image" class="img-thumbnail" />
            <b-button variant="danger" size="sm" class="btn-delete" @click="removeImage(index)">
              삭제
            </b-button>
          </div>
        </template>
      </draggable>
      <input type="file" ref="fileInput" @change="handleFileSelect" accept="image/*" class="d-none" multiple />
    </div>
    
    <!-- Modal Footer -->
    <div class="d-flex justify-content-end mt-3">
      <b-button variant="primary" @click="triggerFileSelect" class="mr-2">이미지 추가</b-button>
      <b-button variant="point" @click="submitImages" class="text-white">등록</b-button>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  components: {
    draggable,
  },
  props: {
    initialImages: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      isDragging: false,
      images: [...this.initialImages], // Prop으로 받은 이미지를 데이터로 초기화
    };
  },
  methods: {
    triggerFileSelect() {
      this.$refs.fileInput.click();
    },
    handleFileSelect(event) {
      const files = event.target.files;
      this.processFiles(files);
    },
    handleDrop(event) {
      this.isDragging = false;
      const files = event.dataTransfer.files;
      this.processFiles(files);
    },
    processFiles(files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.type.startsWith("image/")) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.images.push({
              file,
              url: e.target.result,
            });
          };
          reader.readAsDataURL(file);
        } else {
          alert("이미지 파일만 업로드할 수 있습니다.");
        }
      }
    },
    removeImage(index) {
      this.images.splice(index, 1);
    },
    updateImageOrder() {
      // 드래그앤드롭으로 이미지 순서가 변경될 때 호출
    },
    submitImages() {
      this.$emit('images-submitted', this.images); // 부모 컴포넌트에 이미지 배열 전달
    },
    resetImages() {
      this.images = []; // 이미지 초기화
    },
  }
};
</script>

<style scoped>
.image-upload {
  border: 2px dashed #007bff;
  padding: 20px;
  border-radius: 8px;
  cursor: pointer;
  max-height: 300px;
  overflow-y: auto; /* 이미지가 많을 경우 스크롤 */
}

.image-upload.dragging {
  border-color: #0056b3;
  background-color: #e9ecef;
}

.image-preview {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
}

.image-thumbnail {
  width: 200px; /* 썸네일 너비를 2배로 증가 */
  height: 200px; /* 썸네일 높이를 2배로 증가 */
  overflow: hidden;
  position: relative;
}

.image-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.btn-delete {
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 0;
  font-size: 0.7rem;
  line-height: 1;
}

.mr-2 {
  margin-right: 0.5rem; /* 버튼 사이의 간격 */
}
</style>
