<template>
    <div class="image-upload">
      <b-button
        variant="outline-secondary"
        class="w-100 h-100 d-flex justify-content-center align-items-center"
        @click="triggerFileUpload"
      >
        <ImageIcon></ImageIcon>
        <span class="ml-2">사진 추가</span>
      </b-button>
      <input
        type="file"
        ref="fileInput"
        class="d-none"
        @change="handleFileUpload"
      />
    </div>
  </template>
  
  <script>
  import ImageIcon from "~icons/material-symbols-light/image";
  
  export default {
    components: {
      ImageIcon,
    },
    methods: {
      triggerFileUpload() {
        this.$refs.fileInput.click();
      },
      handleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {
          this.$emit('file-selected', file);  // 부모 컴포넌트로 파일 전송
        }
      }
    }
  };
  </script>
  
  <style>
  .image-upload {
    border: 1px solid #dee2e6;
    border-radius: 4px;
    height: 200px;
  }
  </style>
  