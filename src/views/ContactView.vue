<template lang="html">
  <div
    class="container max-width-lg h-100 d-flex flex-column justify-content-center"
  >
    <div class="mb-1 contact">
      <h1 class="text-center">Contact Me</h1>
      <p class="text-center mt-4">If you’re interested in collaborating with me or having a chat about anything, 
        <br>please leave your message :)</p><br>
    </div>
    <BCard class="bg-grey border-0 contact-box"
    :style="{ backgroundImage: `url(${background})` }">
      <!-- 전송 버튼 -->
      <div class="w-100 mb-3 d-flex justify-content-end">
        <BButton class="bg-transparent text-white border-0 p-1" @click="onSubmit"
          style="font-size: 1.5rem;"
          ><span></span> 
          <SendIcon class="fs-4" />
        </BButton>
      </div>
      <BFormGroup>
        <!-- 이름, 이메일, 제목 inputs -->
        <BFormGroup class="mb-3">
          <BFormInput
            class="bg-secondary-80 mb-2 text-black contact-field"
            placeholder="Your name"
            v-model="name"
            :state="v$.name.$dirty ? !v$.name.$error : null"
          />
          <BFormInput
            class="bg-secondary-20 mb-2 text-black contact-field"
            placeholder="Your email Address"
            v-model="email"
            :state="v$.email.$dirty ? !v$.email.$error : null"
          />
          <BFormInput
            class="bg-secondary-20 text-black contact-field"
            placeholder="Subject"
            v-model="subject"
            :state="v$.subject.$dirty ? !v$.subject.$error : null"
          />
        </BFormGroup>

        <!-- 메세지 inputs -->
        <BFormGroup>
          <BFormTextarea
            class="bg-secondary-20 text-black contact-field"
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
// import MaterialSymbolsLightSendOutline from "~icons/material-symbols-light/send-outline";
// import ArcticonsLibremmail from '~icons/arcticons/libremmail';
import MaterialSymbolsLightAlternateEmailRounded from '~icons/material-symbols-light/alternate-email-rounded';
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import background from "@assets/contact/background.jpg";

export default {
  components: {
    SendIcon: MaterialSymbolsLightAlternateEmailRounded,
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
      background: background,
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
.contact {
  margin-top: 3rem;
}

.contact-box {
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  background-size: auto 100%;
  background-position: center;
  margin-bottom: 5rem;
}

.contact-field {
  font-size: smaller;
  opacity: 0.7;
}

.max-width-lg {
  max-width: 720px;
}

input::placeholder {
  color: black;
}

textarea,
textarea::placeholder {
  height: 240px;
  color: black;
  overflow-y: hidden;
}
</style>
