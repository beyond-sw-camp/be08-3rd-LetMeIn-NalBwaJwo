<template>
    <div class="content-section flex-grow-2">
      <BFormGroup class="mb-3">
        <label class="custom-label bg-primary">프로젝트 설명</label>
        <BFormTextarea
          v-model="localDescription"
          rows="3"
          placeholder="프로젝트 설명을 입력하세요."
          @input="updateDescription"
        ></BFormTextarea>
      </BFormGroup>
      
      <BFormGroup class="mb-3">
        <label class="custom-label bg-primary">프로젝트 내용</label>
        <BFormTextarea
          v-model="localContent"
          rows="5"
          placeholder="프로젝트 내용을 입력하세요."
          @input="updateContent"
        ></BFormTextarea>
      </BFormGroup>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      description: String,
      content: String,
    },
    data() {
      return {
        localDescription: this.description || '',
        localContent: this.content || ''
      };
    },
    methods: {
      updateDescription() {
        this.$emit('description-updated', this.localDescription);
      },
      updateContent() {
        this.$emit('content-updated', this.localContent);
      }
    }
  };
  </script>
  
  <style scoped>
  .content-section {
    flex-grow: 2;
    padding-left: 15px;
  }
  
  .custom-label {
    background-color: 'primary';
    color: white;
    padding: 5px;
    border-radius: 4px;
    display: block;
    margin-bottom: 8px;
  }
  </style>
  