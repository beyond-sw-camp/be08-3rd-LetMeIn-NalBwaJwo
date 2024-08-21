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
            <label class="custom-label bg-primary">프로젝트 내용</label>
            <BFormTextarea
              v-model="content"
              rows="10"
              placeholder="프로젝트 내용을 입력하세요."
            ></BFormTextarea>
          </BFormGroup>
        </div>
      </div>

      <div class="mt-auto d-flex flex-column">

        <div class="d-flex justify-content-end">
          <BButton variant="secondary" @click="confirmReset" class="mr-2">초기화</BButton>
          <BButton variant="point" @click="submitForm">등록</BButton>
        </div>
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
import { v4 as uuidv4 } from 'uuid'; // uuid 라이브러리에서 v4 함수 가져오기
import ImageSlider from "./ProjectForm/ImageSlider.vue";
import ImageUploadModal from "./ProjectForm/ImageUploadModal.vue";
import MaterialSymbolsEdit from "~icons/material-symbols-light/edit";
import MaterialSymbolsCheck from "~icons/material-symbols-light/check";
import MaterialSymbolsCancel from "~icons/material-symbols-light/cancel";

export default {
  components: {
    ImageSlider,
    ImageUploadModal,
    EditIcon: MaterialSymbolsEdit,
    CheckIcon: MaterialSymbolsCheck,
    CancelIcon: MaterialSymbolsCancel,
  },
  data() {
    return {
      editableTitle: "",
      titleEdit: false,
      content: "",
      images: [], // 업로드된 이미지 저장
      imageUploaderVisible: false, // 이미지 업로더 모달 표시 여부
      linkModalVisible: false, // 링크 모달 표시 여부
    };
  },
  methods: {
    toggleEdit(section) {
      this[section] = !this[section];
    },
    emitCloseModal() {
      this.$emit("close-modal");
    },
    handleLinksUpdated(updatedLinks) {
      this.links = updatedLinks;
    },
    handleImagesSubmitted(newImages) {
      this.images = [...newImages]; // 이미지 업데이트
      this.imageUploaderVisible = false;
    },
    showImageUploader() {
      this.imageUploaderVisible = true;
    },
    confirmReset() {
      if (confirm("정말로 모든 입력을 초기화하시겠습니까?")) {
        this.resetForm(); // 초기화 확인 시 폼 초기화
      }
    },
    submitForm() {
      // 부모 컴포넌트로 데이터 전달
      const newProject = {
        id: uuidv4(), // UUID로 고유 ID 생성
        title: this.editableTitle,
        content: this.content,
        images: this.images,
      };
      this.$emit("submit-project", newProject);
      this.resetForm();
      this.emitCloseModal(); // 폼 제출 시 모달 닫기 이벤트 발행
    },
    resetForm() {
      this.editableTitle = "";
      this.content = "";
      this.images = [];
      this.titleEdit = false;
      this.$refs.imageUploadModal.resetImages(); // 이미지 업로더 모달의 이미지도 초기화
      }
    },
  watch: {
    title(newTitle) {
      this.localTitle = newTitle;
    },
    content(newContent) {
      this.localContent = newContent;
    },
    images(newImages) {
      this.localImages = [...newImages];
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
  padding-left: 15px;
}

.mt-auto {
  margin-top: auto;
}

.mr-2 {
  margin-right: 0.5rem; /* 링크 추가 버튼과 등록 버튼 사이의 간격 */
}
</style>
