<template>
  <div>
    <!-- 프로젝트 제목과 헤더 섹션 -->
    <div class="d-flex align-items-center justify-content-between bg-primary text-white p-2 rounded">
      <BButton size="sm" variant="light" class="ml-2" @click="emitCloseModal">
        <CancelIcon class="fs-1 text-white" />
      </BButton>

      <!-- 제목 및 수정 기능 -->
      <div class="d-flex align-items-center justify-content-center flex-grow-1">
        <h4 v-if="!titleEdit" class="mb-0 text-center fs-2 cursor-pointer" @click="toggleEdit('titleEdit')">
          {{ editableTitle || "프로젝트 제목" }}
        </h4>
        <BFormInput
          v-else
          v-model="editableTitle"
          placeholder="프로젝트 제목을 입력하세요."
          class="text-center"
        />
        <BButton size="sm" variant="light" class="ml-2" @click.stop="toggleEdit('titleEdit')">
          <EditIcon v-if="!titleEdit" class="fs-1 text-white" />
          <CheckIcon v-else class="fs-1 text-white" />
        </BButton>
      </div>

      <div class="ml-2"></div> <!-- 오른쪽 여백을 위해 빈 div 추가 -->
    </div>


    <!-- 모달 본문 섹션 -->
    <div class="modal-body d-flex mt-3">
      <!-- 이미지 섹션 -->
      <div class="image-section flex-grow-1 text-center mr-3">
        <ImageUpload @image-uploaded="handleImageUpload" />
        <ul class="list-unstyled mt-2">
          <li v-for="(image, index) in images" :key="index">
            {{ image.name }}
          </li>
        </ul>
      </div>
      
      <!-- 프로젝트 설명 및 내용 섹션 -->
      <div class="content-section flex-grow-2">
        <BFormGroup class="mb-3">
          <label class="custom-label bg-primary">프로젝트 설명</label>
          <BFormTextarea
            v-model="description"
            rows="3"
            placeholder="프로젝트 설명을 입력하세요."
          ></BFormTextarea>
        </BFormGroup>
        
        <BFormGroup class="mb-3">
          <label class="custom-label bg-primary">프로젝트 내용</label>
          <BFormTextarea
            v-model="content"
            rows="5"
            placeholder="프로젝트 내용을 입력하세요."
          ></BFormTextarea>
        </BFormGroup>
      </div>
    </div>

    <!-- 링크 추가 및 제출 버튼 섹션 -->
    <div class="modal-footer d-flex justify-content-end">
      <LinkInput @add-link="handleAddLink" />
      <BButton variant="primary" @click="submitForm">등록</BButton>
    </div>
  </div>
</template>

<script>
import ImageUpload from "./ImageUpload.vue";
import LinkInput from "./LinkInput.vue";
import MaterialSymbolsEdit from "~icons/material-symbols-light/edit";
import MaterialSymbolsCheck from "~icons/material-symbols-light/check";
import MaterialSymbolsCancel from "~icons/material-symbols-light/cancel";

export default {
  components: {
    ImageUpload,
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
      images: [],
      links: []
    };
  },
  methods: {
    toggleEdit(section) {
      this[section] = !this[section];
    },
    emitCloseModal() {
      this.$emit('close-modal'); // 부모 컴포넌트에 모달 닫기 이벤트 발행
    },
    handleAddLink(link) {
      this.links.push(link);
    },
    handleImageUpload(image) {
      this.images.push(image);
    },
    submitForm() {
      this.emitCloseModal(); // 폼 제출 시 모달 닫기 이벤트 발행
    }
  }
};
</script>

<style scoped>
.custom-modal .modal-dialog {
  width: 100%; /* 모달 너비 설정 */
  margin: 30px auto;
}

.custom-modal .modal-content {
  max-width: 100%;
  padding: 20px;
  border-radius: 8px;
}

.modal-header {
  color: white;
  padding: 10px;
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-body {
  display: flex;
}

.image-section {
  border: 1px solid #dee2e6;
  border-radius: 4px;
  height: 300px;
  width: 35%; /* 이미지 섹션 너비 조정 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.content-section {
  flex-grow: 2;
  padding-left: 15px;
}

.modal-footer {
  margin-top: 15px;
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
  color: white;
  padding: 5px;
  border-radius: 4px;
  display: block;
  margin-bottom: 8px;
}

BButton {
  font-size: 1rem;
  padding: 0.25rem 0.5rem;
}
</style>
