<template>
  <div>
    <!-- Link 추가 버튼 -->
    <b-button variant="primary" @click="showLinkModal">링크 추가</b-button>

    <!-- Link 추가 모달 -->
    <b-modal v-model="linkModalVisible" title="링크 추가" @ok="addLink">
      <b-form-group label="링크를 입력하세요">
        <b-form-input v-model="newLink" placeholder="URL을 입력하세요"></b-form-input>
      </b-form-group>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linkModalVisible: false,
      newLink: "",
    };
  },
  methods: {
    showLinkModal() {
      this.linkModalVisible = true;
    },
    addLink() {
      if (this.newLink) {
        this.$emit("add-link", this.newLink);
        this.newLink = "";
        this.linkModalVisible = false;
      }
    },
  },
};
</script>
