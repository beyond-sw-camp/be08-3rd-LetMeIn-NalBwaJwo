<template>
    <!-- v-model을 통해 모달의 표시 여부를 제어 -->
    <b-modal
    v-model="localVisible"  
    title="프로젝트 추가 등록"
    hide-footer
  >
      <div>
        <h3 class="m-0">프로젝트 제목 <EditIcon class="fs-1" /></h3>
        <div class="d-flex mt-3">
          <div class="image-section flex-grow-1 text-center">
            <b-button variant="outline-secondary" class="w-100 h-100 d-flex justify-content-center align-items-center">
              <ImageIcon></ImageIcon>
              <span class="ml-2">사진 추가</span>
            </b-button>
          </div>
          <div class="ml-3 w-50">
            <div>
              <h5>프로젝트 개요 <EditIcon class="fs-1" /></h5>
              <b-form-textarea rows="3"></b-form-textarea>
            </div>
            <div class="mt-3">
              <h5>프로젝트 내용 <EditIcon class="fs-1" /></h5>
              <b-form-textarea rows="3"></b-form-textarea>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-end mt-3">
          <b-button variant="primary" class="mr-2">링크 추가</b-button>
          <b-button variant="primary">등록하기</b-button>
        </div>
      </div>
    </b-modal>
  </template>
  
  <script>
  import MaterialSymbolsEdit from "~icons/material-symbols-light/edit";
  import MaterialSymbolsImage from "~icons/material-symbols-light/image";
  export default {
    components: {
        EditIcon: MaterialSymbolsEdit,
        ImageIcon: MaterialSymbolsImage,
    },
    props: {
    modelValue: {
      type: Boolean,
      required: true
      }
    },
    computed: {
      localVisible: {
        get() {
          return this.modelValue;  // prop 값을 반환
        },
        set(value) {
          this.$emit('update:modelValue', value);  // 이벤트를 통해 부모에게 변경 사항 전달
        }
      }
    }
  };
  </script>  
  <style>
  .image-section {
    border: 1px solid #dee2e6;
    border-radius: 4px;
    height: 200px;
  }
  </style>
  