<template lang="html">
  <BContainer class="pt-5">
    <div class="header">
      <h1 class="text-bold">이력서 관리</h1>
      <RouterLink to="/@yongun/resume/1" class="resume-insert" v-if="isLogin">등록하기</RouterLink>
    </div>
    <br>
    <ResumeList />
  </BContainer>
</template>

<script>
import ResumeList from "@components/resume/ResumeList.vue";
import { RouterLink } from "vue-router";

export default {
  components: {
    ResumeList,
    RouterLink
  },
  computed:{
    isLogin() {
      return this.$store.state.Auth.isLogin
    },
  }
};
</script>

<style>
.text-bold {
  font-weight: bold;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.resume-insert {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #5f9bdb;
  color: rgba(1, 0, 0, 0.608);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none; /* Remove underline */
  display: inline-block; /* Ensure proper styling */
  transition: background-color 0.3s ease;
}

.resume-insert:hover {
  background-color: #0056b3;
}
</style>
