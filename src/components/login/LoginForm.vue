<template lang="html">
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
</template>
<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import {AUTH_MUTATION_TYPES} from "@store/modules/auth/mutaion.js"
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      id: "",
      password: "",
      target: {
        id: "yongun",
        password: "qwer1234!"
      }
    };
  },
  methods: {
    async onSubmit() {
      const isFormCorrect = await this.v$.$validate();

      if (isFormCorrect) {
        if (this.id === this.target.id && this.password === this.target.password) {
            this.$store.commit(AUTH_MUTATION_TYPES.LOGIN);
            localStorage.setItem("ACCESS_TOKEN", "login");
            localStorage.setItem("CURRENT_USER", {id: 1, name: "@yongun"})
            this.$router.push("/@yongun")
        }
      }
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
<style lang=""></style>
