<template lang="html">
  <BCard bg-variant="primary" text-variant="white" title="계용운">
    <BCardGroup class="d-flex align-items-center flex-nowrap mb-2">
      <MainIcon />
      <div
        v-if="isEmailEdit"
        class="edit-form ms-2 d-flex flex-grow-1 flex-nowrap justify-content-between"
      >
        <BFormInput class="w-75" :value="email" v-model="email" />

        <!-- 저장 버튼 -->
        <BButton @click="onEditEmail">저장</BButton>
      </div>
      <div
        v-else
        class="d-flex flex-grow-1 flex-nowrap align-items-center justify-content-between"
      >
        <div>
          <BCardText class="ps-2"> {{ detail.email }} </BCardText>
        </div>
        <!-- 수정 버튼 -->
        <BButton v-if="isLogin" @click="onClickEmailEdit">수정</BButton>
      </div>
    </BCardGroup>
    <BCardGroup class="d-flex flex-nowrap align-items-center">
      <PhoneIcon />
      <div
        v-if="isPhoneEdit"
        class="edit-form ms-2 d-flex flex-grow-1 flex-nowrap justify-content-between"
      >
        <BFormInput class="w-75" :value="phone" v-model="phone" />
        <!-- 저장 버튼 -->
        <BButton @click="onEditPhone">저장</BButton>
      </div>
      <div
        v-else
        class="d-flex flex-grow-1 flex-nowrap align-items-center justify-content-between"
      >
        <div>
          <BCardText class="ps-2">{{ detail.phone }} </BCardText>
        </div>
        <!-- 수정 버튼 -->
        <BButton v-if="isLogin" @click="onClickPhomeEdit">수정</BButton>
      </div>
    </BCardGroup>
  </BCard>
</template>
<script>
import MaterialSymbolsLightMailOutline from "~icons/material-symbols-light/mail-outline";
import MaterialSymbolsLightPhoneAndroidOutlineRounded from "~icons/material-symbols-light/phone-android-outline-rounded";
import { RESUME_MUTATION_TYPES } from "@store/modules/resume/mutation.js";

export default {
  components: {
    MainIcon: MaterialSymbolsLightMailOutline,
    PhoneIcon: MaterialSymbolsLightPhoneAndroidOutlineRounded,
  },

  data() {
    return {
      email: "",
      phone: "",
      isEmailEdit: false,
      isPhoneEdit: false,
    };
  },
  methods: {
    onClickEmailEdit() {
      this.isEmailEdit = true;
    },
    onClickPhomeEdit() {
      this.isPhoneEdit = true;
    },
    onEditEmail() {
      this.$store.commit(RESUME_MUTATION_TYPES.EDIT_EMAIL, {
        resumeId: +this.$route.params.resumeId,
        email: this.email,
      });
      this.email = "";
      this.isEmailEdit = false;
    },
    onEditPhone() {
      this.$store.commit(RESUME_MUTATION_TYPES.EDIT_PHONE, {
        resumeId: +this.$route.params.resumeId,
        phone: this.phone,
      });
      this.phone = "";
      this.isPhoneEdit = false;
    },
  },
  computed: {
    detail() {
      return this.$store.getters.getProfile(+this.$route.params.resumeId);
    },
    isLogin() {
      return this.$store.state.Auth.isLogin;
    },
  },
};
</script>
<style scoped>
.edit-form {
  height: 40px;
}
</style>
