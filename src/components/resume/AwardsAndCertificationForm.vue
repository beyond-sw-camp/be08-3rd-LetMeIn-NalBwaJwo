<template lang="html">
  <resume-form-layout>
    <template v-slot:form>
      <BFormGroup
        class="mb-3"
        label="수상 / 자격명"
        :invalid-feedback="'수상 및 자격증명을 입력해 주세요.'"
        :state="
          v$.form.certificationTitle.$dirty
            ? !v$.form.certificationTitle.$error
            : null
        "
      >
        <BFormInput :value="form.certificationTitle" @input="onChangeTitle" />
      </BFormGroup>
      <BFormGroup
        class="mb-3"
        label="수상 / 자격 취득 내용"
        :invalid-feedback="'수상 및 자격증명을 입력해 주세요.'"
        :state="
          v$.form.certificationContent.$dirty
            ? !v$.form.certificationContent.$error
            : null
        "
      >
        <BFormInput
          :value="form.certificationContent"
          @input="onChangeContent"
        />
      </BFormGroup>
      <BFormGroup
        label="수상 / 자격 취득일"
        :invalid-feedback="'수상 및 자격증명을 입력해 주세요.'"
        :state="
          v$.form.certificationDate.$dirty
            ? !v$.form.certificationDate.$error
            : null
        "
      >
        <BFormInput
          type="date"
          :value="form.certificationDate"
          v-model="form.certificationDate"
        />
      </BFormGroup>
    </template>
    <template v-slot:buttons>
      <div class="d-flex justify-content-around">
        <BButton class="text-white" variant="dark" @click="onCancel">
          취소
        </BButton>
        <BButton class="text-white" variant="dark" @click="onSave">
          저장
        </BButton>
      </div>
    </template>
  </resume-form-layout>
</template>
<script>
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { RESUME_MUTATION_TYPES } from "@store/modules/resume/mutation.js";
import { ResumeFormLayout } from "@components/index";
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  props: {
    formId: {
      type: String,
      required: true,
    },
  },
  components: { ResumeFormLayout },
  data() {
    return {
      form: {
        certificationTitle: "",
        certificationContent: "",
        certificationDate: "",
      },
    };
  },
  methods: {
    onCancel() {
      console.log(
        `[AwardsAndCertificationForm] [onCancel] formId = ${this.formId}`
      );
      this.v$.$reset();
      this.form = {
        certificationTitle: "",
        certificationContent: "",
        certificationDate: "",
      };
      this.$emit("close-form", this.formId);
    },
    async onSave() {
      const isFormCorrect = await this.v$.$validate();
      if (isFormCorrect) {
        // 폼 검증 성공시 적용
        this.$store.commit(
          RESUME_MUTATION_TYPES.SAVE_AWARDS_AND_CERTIFICATIONS,
          {
            resumeId: +this.$route.params.resumeId,
            formData: {
              ...this.form,
            },
          }
        );
        this.onCancel();
      }
    },
    onChangeTitle(e) {
      this.form.certificationTitle = e.target.value;
    },
    onChangeContent(e) {
      this.form.certificationContent = e.target.value;
    },
  },
  validations() {
    return {
      form: {
        certificationTitle: { required },
        certificationContent: { required },
        certificationDate: { required },
      },
    };
  },
};
</script>
<style lang=""></style>
