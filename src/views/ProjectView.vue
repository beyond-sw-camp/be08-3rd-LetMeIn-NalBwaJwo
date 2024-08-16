<template lang="html">
    <div
      class="container max-width-lg h-100 d-flex flex-column justify-content-center"
    >
      <div class="mb-3">
        <h1 class="text-center display-1">project</h1>
      </div>
      <BCard class="bg-dark">
        <!-- 전송 버튼 -->
        <div class="w-100 mb-3 d-flex justify-content-end">
          <BButton class="bg-primary text-white p-1" @click="onSubmit"
            ><span>send</span> <SendIcon class="fs-1" />
          </BButton>
        </div>
        <BFormGroup>
          <!-- 이름, 이메일, 제목 inputs -->
          <BFormGroup class="mb-3">
            <BFormInput
              class="bg-black mb-1 text-white"
              placeholder="Your name"
              v-model="name"
              :state="v$.name.$dirty ? !v$.name.$error : null"
            />
            <BFormInput
              class="bg-black mb-1 text-white"
              placeholder="Your email Address"
              v-model="email"
              :state="v$.email.$dirty ? !v$.email.$error : null"
            />
            <BFormInput
              class="bg-black text-white"
              placeholder="Subject"
              v-model="subject"
              :state="v$.subject.$dirty ? !v$.subject.$error : null"
            />
          </BFormGroup>
  
          <!-- 메세지 inputs -->
          <BFormGroup>
            <BFormTextarea
              class="bg-black text-white"
              placeholder="Message"
              v-model="message"
              :state="v$.message.$dirty ? !v$.message.$error : null"
            />
          </BFormGroup>
        </BFormGroup>
      </BCard>
    </div>
  </template>
  <script>
  import MaterialSymbolsLightSendOutline from "~icons/material-symbols-light/send-outline";
  import { useVuelidate } from "@vuelidate/core";
  import { required, email } from "@vuelidate/validators";
  
  export default {
    components: {
      SendIcon: MaterialSymbolsLightSendOutline,
    },
    setup() {
      return { v$: useVuelidate() };
    },
    data() {
      return {
        name: "",
        email: "",
        subject: "",
        message: "",
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
        name: { required },
        email: { required, email },
        subject: { required },
        message: { required },
      };
    },
  };
  </script>
  <style scoped>
  .max-width-lg {
    max-width: 720px;
  }
  
  input::placeholder {
    color: white;
  }
  
  textarea,
  textarea::placeholder {
    height: 240px;
    color: white;
    overflow-y: hidden;
  }
  </style>
  