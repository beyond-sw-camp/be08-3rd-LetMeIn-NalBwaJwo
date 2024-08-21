<template lang="html">
  <BContainer class="pt-5">
    <div class="header">
      <h1 class="text-bold">이력서 관리</h1>
      <button class="resume-insert" @click="btnClick">등록하기</button>
    </div>
    <br>
    <ResumeList />
  </BContainer>
</template>

<script>
import ResumeList from "@components/resume/ResumeList.vue";
export default {
  components: {
    ResumeList,
  },
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

.resumeInsert {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #5f9bdb;
  color: rgba(1, 0, 0, 0.608);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.resumeInsert:hover {
  background-color: #0056b3;
}
</style>
