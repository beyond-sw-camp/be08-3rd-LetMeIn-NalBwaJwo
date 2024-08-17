<template>
  <div>
    <!-- 프로젝트 제목과 헤더 섹션 -->
    <div class="d-flex align-items-center justify-content-between bg-primary text-white p-2 rounded">
      <BButton size="sm" variant="light" class="ml-2" @click="emitCloseModal">
        <CancelIcon class="fs-1 text-white" />
      </BButton>

      <!-- 제목 및 수정 기능 -->
      <div class="d-flex align-items-center justify-content-center flex-grow-1 bg-primary text-white">
        <h4 v-if="!titleEdit" class="mb-0 text-center fs-2 cursor-pointer" @click="toggleEdit('titleEdit')">
          {{ editableTitle || "프로젝트 제목" }}
        </h4>
        <BFormInput
          v-else
          v-model="editableTitle"
          placeholder="프로젝트 제목을 입력하세요."
          class="text-center"
          @keyup.enter="toggleEdit('titleEdit')"
        />
        <BButton size="sm" variant="light" class="ml-2" @click.stop="toggleEdit('titleEdit')">
          <EditIcon v-if="!titleEdit" class="fs-1 text-white" />
          <CheckIcon v-else class="fs-1 text-white" />
        </BButton>
      </div>

      <div class="ml-2"></div>
    </div>

    <!-- 모달 본문 섹션 -->
    <div class="modal-body d-flex mt-3 flex-column">
      <div class="d-flex">
        <!-- 이미지 섹션 -->
        <ImageSlider
          :images="images"
          @show-image-uploader="showImageUploader"
          class="image-slider-section"
        />
      
        <!-- 프로젝트 설명 및 내용 섹션 -->
        <div class="content-section flex-grow-2">
          <BFormGroup class="mb-3">
            <label class="custom-label bg-primary">프로젝트 설명</label>
            <BFormTextarea
              v-model="description"
              rows="4"
              placeholder="프로젝트 설명을 입력하세요."
            ></BFormTextarea>
          </BFormGroup>
          
          <BFormGroup class="mb-3">
            <label class="custom-label bg-primary">프로젝트 내용</label>
            <BFormTextarea
              v-model="content"
              rows="10"
              placeholder="프로젝트 내용을 입력하세요."
            ></BFormTextarea>
          </BFormGroup>
        </div>
      </div>

      <!-- 링크 추가 및 제출 버튼 섹션 -->
      <div class="mt-auto d-flex justify-content-end">
        <LinkInput @add-link="handleAddLink" class="mr-2" />
        <BButton variant="secondary" @click="resetForm" class="mr-2">초기화</BButton>
        <BButton variant="point" @click="submitForm">등록</BButton>
      </div>
    </div>

    <!-- 이미지 업로더 모달 -->
    <ImageUploadModal
      ref="imageUploadModal"
      v-model="imageUploaderVisible"
      :initial-images="images"
      @images-submitted="handleImagesSubmitted"
    />
  </div>
</template>

<script>
import ImageSlider from "./ImageSlider.vue";
import ImageUploadModal from "./ImageUploadModal.vue";
import LinkInput from "./LinkInput.vue";
import MaterialSymbolsEdit from "~icons/material-symbols-light/edit";
import MaterialSymbolsCheck from "~icons/material-symbols-light/check";
import MaterialSymbolsCancel from "~icons/material-symbols-light/cancel";

export default {
  components: {
    ImageSlider,
    ImageUploadModal,
    LinkInput,
    EditIcon: MaterialSymbolsEdit,
    CheckIcon: MaterialSymbolsCheck,
    CancelIcon: MaterialSymbolsCancel,
  },
  data() {
    return {
      editableTitle: "",
      titleEdit: false,
      description: "",
      content: "",
      images: [], // 업로드된 이미지 저장
      links: [],
      imageUploaderVisible: false, // 이미지 업로더 모달 표시 여부
    };
  },
  methods: {
    toggleEdit(section) {
      this[section] = !this[section];
    },
    emitCloseModal() {
      this.$emit("close-modal");
    },
    handleAddLink(link) {
      this.links.push(link);
    },
    handleImagesSubmitted(newImages) {
      this.images = [...newImages]; // 이미지 업데이트
      this.imageUploaderVisible = false;
    },
    showImageUploader() {
      this.imageUploaderVisible = true;
    },
    submitForm() {
      this.emitCloseModal(); // 폼 제출 시 모달 닫기 이벤트 발행
    },
    resetForm() {
      if (confirm("정말로 모든 입력을 초기화하시겠습니까?")) {
        this.editableTitle = "";
        this.description = "";
        this.content = "";
        this.images = [];
        this.links = [];
        this.titleEdit = false;
        this.$refs.imageUploadModal.resetImages(); // 이미지 업로더 모달의 이미지도 초기화
      }
    },
  },
};
</script>

<style scoped>
.modal-body {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 150px); /* 모달 전체 높이를 유지하면서 footer 공간을 확보 */
  overflow-y: auto;
}

.image-slider-section {
  width: 400px;
  height: 400px;
  margin-right: 15px;
  flex-shrink: 0; /* 이미지 슬라이더의 크기를 고정 */
}

.content-section {
  flex-grow: 2;
  padding-left: 15px;
  height: 400px; /* 이미지 섹션과 동일한 높이 */
}

.fs-1 {
  font-size: 1.5rem;
}

.fs-2 {
  font-size: 2rem; 
}

.cursor-pointer {
  cursor: pointer;
}

.custom-label {
  background-color: primary;
  color: white;
  padding: 5px;
  border-radius: 4px;
  display: block;
  margin-bottom: 8px;
}

.mt-auto {
  margin-top: auto;
}

.mr-2 {
  margin-right: 0.5rem; /* 링크 추가 버튼과 등록 버튼 사이의 간격 */
}
</style>
