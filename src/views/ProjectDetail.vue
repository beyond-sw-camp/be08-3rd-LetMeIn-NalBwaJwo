<template>
    <div>
      <!-- 프로젝트 제목과 헤더 섹션 -->
      <div class="d-flex align-items-center justify-content-between bg-primary text-white p-2 rounded">
        <BButton size="sm" variant="light" class="ml-2" @click="emitCloseModal">
          <CancelIcon class="fs-1 text-white" />
        </BButton>
  
        <div class="d-flex align-items-center justify-content-center flex-grow-1 bg-primary text-white">
          <h4 class="mb-0 text-center fs-2">
            {{ title || "프로젝트 제목" }}
          </h4>
        </div>
  
        <div class="ml-2"></div>
      </div>
  
      <!-- 모달 본문 섹션 -->
      <div class="modal-body d-flex mt-3 flex-column">
        <div class="d-flex">
          <!-- 이미지 섹션 -->
          <ImageSlider
            :images="images"
            class="image-slider-section"
          />
        
          <!-- 프로젝트 설명 및 내용 섹션 -->
          <div class="content-section flex-grow-2">
            <BFormGroup class="mb-3">
              <label class="custom-label bg-primary">프로젝트 설명</label>
              <p>{{ description }}</p>
            </BFormGroup>
            
            <BFormGroup class="mb-3">
              <label class="custom-label bg-primary">프로젝트 내용</label>
              <p>{{ content }}</p>
            </BFormGroup>
          </div>
        </div>
      </div>
  
      <!-- 링크 섹션 -->
      <div class="modal-footer d-flex flex-wrap justify-content-center">
        <BButton
          v-for="(link, index) in links"
          :key="index"
          variant="primary"
          class="mr-2"
          :href="link.url"
          target="_blank"
        >
          {{ link.name }}
        </BButton>
      </div>
    </div>
  </template>
  
  <script>
  import ImageSlider from "@components/project/ImageSlider.vue";
  import MaterialSymbolsCancel from "~icons/material-symbols-light/cancel";
  
  export default {
    components: {
      ImageSlider,
      CancelIcon: MaterialSymbolsCancel,
    },
    props: {
      title: String,
      description: String,
      content: String,
      images: {
        type: Array,
        default: () => []
      },
      links: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      emitCloseModal() {
        this.$emit("close-modal");
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
  