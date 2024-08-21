<template lang="html">
  <BCard bg-variant="primary" text-variant="white" title="계용운">
    <BCardGroup class="d-flex align-items-center flex-nowrap mb-2">
      <MainIcon />
      <div
        v-if="isEmailEdit"
        class="edit-form ms-2 d-flex flex-grow-1 flex-nowrap justify-content-between"
      >
        <BFormInput class="w-75" />

        <!-- 저장 버튼 -->
        <BButton>저장</BButton>
      </div>
      <div
        v-else
        class="d-flex flex-grow-1 flex-nowrap align-items-center justify-content-between"
      >
        <div>
          <BCardText class="ps-2"> rpdyddns3620@gmail.com </BCardText>
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
        <BFormInput class="w-75" />
        <!-- 저장 버튼 -->
        <BButton>저장</BButton>
      </div>
      <div
        v-else
        class="d-flex flex-grow-1 flex-nowrap align-items-center justify-content-between"
      >
        <div>
          <BCardText class="ps-2"> 010-3333-4444 </BCardText>
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
export default {
  components: {
    MainIcon: MaterialSymbolsLightMailOutline,
    PhoneIcon: MaterialSymbolsLightPhoneAndroidOutlineRounded,
  },
  data() {
    return {
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
  },
  computed:{
    isLogin() {
      return this.$store.state.Auth.isLogin
    },
  },
};
</script>
<style scoped>
.edit-form {
  height: 40px;
}
</style>
