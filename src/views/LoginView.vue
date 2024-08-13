<template lang="html">
  <div
    class="container max-width-lg vh-100 d-flex flex-column justify-content-center"
  >
    <div class="mb-3">
      <h1 class="text-center">Let me In</h1>
    </div>
    <BCard>
      <!-- 아이디, 비밀번호 입력받는 inputs -->
      <BFormGroup
        class="mb-3"
        label="ID"
        :invalid-feedback="'아이디를 입력해주세요'"
        :state="v$.id.$dirty ? !v$.id.$error : null"
      >
        <BFormInput v-model="id" />
      </BFormGroup>
      <BFormGroup
        class="mb-3"
        label="Password"
        :invalid-feedback="'비밀번호를 입력해주세요'"
        :state="v$.password.$dirty ? !v$.password.$error : null"
      >
        <BFormInput v-model="password" />
      </BFormGroup>
      <!-- 로그인 버튼 -->
      <BFormGroup>
        <BButton class="w-100 bg-black text-white" @click="onSubmit"
          >로그인</BButton
        >
      </BFormGroup>
      <!-- 비밀번호 찾기 네비게이션 -->
      <BNav class="mt-4">
        <BNavText class="text-decoration-underline">비밀번호 찾기</BNavText>
      </BNav>
    </BCard>
  </div>
</template>
<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      id: "",
      password: "",
    };
  },
  methods: {
    async onSubmit() {
      const isFormCorrect = await this.v$.$validate();
      console.log(isFormCorrect);
    },
  },
  validations() {
    return {
      id: { required },
      password: { required },
    };
  },
};
</script>
<style scoped>
h1 {
  font-size: 4rem;
}
.max-width-lg {
  max-width: 600px;
}
</style>
