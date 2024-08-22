<template lang="html">
  <resume-form-layout>
    <template v-slot:form>
      <BFormGroup
        class="mb-3"
        label="회사이름"
        :invalid-feedback="'회사 이름을 입력해 주세요.'"
        :state="v$.form.companyName.$dirty ? !v$.form.companyName.$error : null"
      >
        <BFormInput :value="form.companyName" @input="onChangeCompanyName" />
      </BFormGroup>
      <BFormGroup
        class="mb-3"
        label="사용스택"
        :invalid-feedback="'사용 스택을 입력해 주세요.'"
        :state="v$.form.stack.$dirty ? !v$.form.stack.$error : null"
      >
        <BFormInput :value="form.stack" @input="onChangeStack" />
      </BFormGroup>
      <BFormGroup
        class="mb-3"
        label="직무"
        :invalid-feedback="'직무를 입력해 주세요.'"
        :state="v$.form.job.$dirty ? !v$.form.job.$error : null"
      >
        <BFormInput :value="form.job" @input="onChangeJob" />
      </BFormGroup>
      <div class="d-flex justify-content-between">
        <BFormGroup
          label="업무시작"
          :invalid-feedback="'업무 기간을 입력해 주세요.'"
          :state="
            v$.form.startDate.$dirty || v$.form.endDate.$dirty
              ? !v$.form.startDate.$error || !v$.form.endDate.$error
              : null
          "
        >
          <BFormInput
            type="date"
            :value="form.startDate"
            v-model="form.startDate"
          />
        </BFormGroup>
        <BFormGroup label="업무종료">
          <BFormInput
            type="date"
            :value="form.endDate"
            v-model="form.endDate"
          />
        </BFormGroup>
      </div>
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
import { ResumeFormLayout } from "@components/index";
import { RESUME_MUTATION_TYPES } from "@store/modules/resume/mutation.js";

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
  components: {
    ResumeFormLayout,
  },
  data() {
    return {
      form: {
        companyName: "",
        stack: "",
        job: "",
        startDate: "",
        endDate: "",
      },
    };
  },
  methods: {
    onCancel() {
      console.log(`[WorkExperienceForm] [onCancel] formId = ${this.formId}`);
      // validation dirty state 리셋
      this.v$.$reset();
      // 폼 데이터 기본 값으로 초기화
      this.form = {
        companyName: "",
        stack: "",
        job: "",
        startDate: "",
        endDate: "",
      };
      this.$emit("close-form", this.formId);
    },
    async onSave() {
      const isFormCorrect = await this.v$.$validate();
      if (isFormCorrect) {
        // 폼 검증 성공시 적용
        this.$store.commit(RESUME_MUTATION_TYPES.SAVE_WORKEXPERIENCE, {
          resumeId: +this.$route.params.resumeId,
          formData: {
            ...this.form,
          },
        });
        this.onCancel();
      }
    },
    onChangeCompanyName(e) {
      this.form.companyName = e.target.value;
    },
    onChangeStack(e) {
      this.form.stack = e.target.value;
    },
    onChangeJob(e) {
      this.form.job = e.target.value;
    },
  },
  validations() {
    return {
      form: {
        companyName: { required },
        stack: { required },
        job: { required },
        startDate: { required },
        endDate: { required },
      },
    };
  },
};
</script>
<style lang=""></style>
