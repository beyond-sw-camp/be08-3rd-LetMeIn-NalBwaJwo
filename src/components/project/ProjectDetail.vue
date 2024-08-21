<template>
  <div>
    <!-- 프로젝트 제목과 헤더 섹션 -->
    <div class="d-flex align-items-center justify-content-between bg-primary text-white p-2 rounded">
      <BButton size="sm" variant="light" class="ml-2" @click="emitCloseModal">
        <CancelIcon class="fs-1 text-white" />
      </BButton>

      <div class="d-flex align-items-center justify-content-center flex-grow-1 bg-primary text-white">
        <h4 v-if="!titleEdit" class="mb-0 text-center fs-2">
          {{ localTitle || "프로젝트 제목" }}
        </h4>
        <BFormInput
          v-else
          v-model="localTitle"
          placeholder="프로젝트 제목을 입력하세요."
          class="text-center"
          @keyup.enter="toggleEdit('titleEdit')"
        />
        <BButton
          v-if="isLogin"
          size="sm"
          variant="light"
          class="ml-2"
          @click.stop="toggleEdit('titleEdit')"
        >
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
          <div class="align-items-center justify-content-center">
            <ImageSlider
            :images="localImages"
            class="image-slider-section"
          />
          <BButton v-if="isLogin" variant="primary" class="mt-2 mr-2" @click="showImageUploader">이미지 수정</BButton>
          </div>

        <!-- 프로젝트 설명 및 내용 섹션 -->
        <div class="content-section flex-grow-2">
          <BFormGroup class="mb-3">
            <label class="custom-label bg-primary">프로젝트 내용</label>
            <p v-if="!isLogin">{{ localContent }}</p>
            <BFormTextarea
              v-else
              v-model="localContent"
              rows="18"
              placeholder="프로젝트 내용을 입력하세요."
            ></BFormTextarea>
          </BFormGroup>
        </div>
      </div>
    </div>

    <!-- 링크 섹션 -->
    <div class="modal-footer d-flex flex-wrap justify-content-end">
      <template v-if="isLogin">
        <BButton variant="primary" class="mr-2" @click="showLinkModal">링크 수정</BButton>
        <LinkInput
          v-if="isLinkModalVisible"
          :modelValue="localLinks"
          @update:modelValue="updateLinks"
          @close="isLinkModalVisible = false"
        />
      </template>
      <template v-else>
        <BButton
          v-for="(link, index) in localLinks"
          :key="index"
          variant="primary"
          class="mr-2"
          :href="link.url"
          target="_blank"
        >
          {{ link.name }}
        </BButton>
      </template>
      <BButton v-if="isLogin" variant="danger" class="red-button" @click="deleteProject">삭제</BButton>
      <BButton v-if="isLogin" variant="primary" @click="saveChanges">저장</BButton>
    </div>

    <!-- 이미지 업로더 모달 -->
    <ImageUploadModal
      ref="imageUploadModal"
      v-model="imageUploaderVisible"
      :initial-images="localImages"
      @images-submitted="handleImagesSubmitted"
    />

  </div>
</template>

<script>
import ImageSlider from "@components/project/ProjectForm/ImageSlider.vue";
import ImageUploadModal from "./ProjectForm/ImageUploadModal.vue";
import LinkInput from "@components/project/ProjectForm/LinkInput.vue";
import MaterialSymbolsCancel from "~icons/material-symbols-light/cancel";
import MaterialSymbolsEdit from "~icons/material-symbols-light/edit";
import MaterialSymbolsCheck from "~icons/material-symbols-light/check";
import { BButton } from "bootstrap-vue-next";

export default {
  components: {
    ImageSlider,
    ImageUploadModal,
    LinkInput,
    CancelIcon: MaterialSymbolsCancel,
    EditIcon: MaterialSymbolsEdit,
    CheckIcon: MaterialSymbolsCheck,
  },
  props: {
    id: String, // id prop 추가
    title: String,
    content: String,
    images: {
      type: Array,
      default: () => []
    },
    links: {
      type: Array,
      default: () => []
    },
  },
  computed: {
    isLogin() {
      return this.$store.state.Auth.isLogin
    }
  },
  data() {
    return {
      titleEdit: false,
      localTitle: this.title,
      localContent: this.content,
      localImages: [...this.images],
      localLinks: [...this.links],
      isLinkModalVisible: false,
      imageUploaderVisible: false, // 이미지 업로더 모달 표시 여부
    };
  },
  methods: {
    emitCloseModal() {
      this.$emit("close-modal");
    },
    toggleEdit(section) {
      this[section] = !this[section];
    },
    showLinkModal() {
      this.isLinkModalVisible = true;
    },
    updateLinks(updatedLinks) {
      this.localLinks = updatedLinks;
    },
    deleteProject() {
      if (confirm("정말로 이 프로젝트를 삭제하시겠습니까?")) {
        this.$emit("delete-project", {
          id: this.id,
          title: this.localTitle,
          content: this.localContent,
          images: this.localImages,
          links: this.localLinks,
        });
        this.emitCloseModal();
      }
    },
    saveChanges() {
      if (confirm("저장하시겠습니까?")) {
        const updatedProject = {
          id: this.id,
          title: this.localTitle,
          content: this.localContent,
          images: this.localImages,
          links: this.localLinks,
        };
        console.log(`[ProjectDetail]`);
        console.log(updatedProject);
        
        
        this.$emit("save-project", updatedProject);
        this.emitCloseModal();
      }
    },
    showImageUploader() {
      this.imageUploaderVisible = true;
    },
    handleImagesSubmitted(newImages) {
      this.localImages = [...newImages]; // 이미지 업데이트
      this.imageUploaderVisible = false;
    },
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
    links(newLinks) {
      this.localLinks = [...newLinks];
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

.red-button {
  background-color: red;
  color: white;
  border: none;
}

.fs-1 {
  font-size: 1.5rem;
}

.fs-2 {
  font-size: 2rem; 
}

.custom-label {
  background-color: primary;
  color: white;
  padding: 5px;
  border-radius: 4px;
  display: block;
  margin-bottom: 8px;
}

.mr-2 {
  margin-right: 0.5rem;
}
</style>
