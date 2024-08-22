<template lang="html">
  <resume-form-layout>
    <template v-slot:form>
      <BFormGroup
        class="mb-3"
        label="학교"
        :invalid-feedback="'학교명을 입력해 주세요.'"
        :state="v$.form.school.$dirty ? !v$.form.school.$error : null"
      >
        <BFormInput :value="form.school" @input="onChangeSchool" />
      </BFormGroup>
      <BFormGroup
        class="mb-3"
        label="전공"
        :invalid-feedback="'전공을 입력해 주세요.'"
        :state="v$.form.stack.$dirty ? !v$.form.stack.$error : null"
      >
        <BFormInput :value="form.stack" @input="onChangeStack" />
      </BFormGroup>
      <BFormGroup
        class="mb-3"
        label="학위"
        :invalid-feedback="'학위를 입력해 주세요.'"
        :state="v$.form.job.$dirty ? !v$.form.job.$error : null"
      >
        <BFormInput :value="form.job" @input="onChangejob" />
      </BFormGroup>
      <div class="d-flex justify-content-around mb-3">
        <BFormGroup
          label="입학일"
          :invalid-feedback="'입학일을 입력해 주세요.'"
          :state="v$.form.startDate.$dirty ? !v$.form.startDate.$error : null"
        >
          <BFormInput
            type="date"
            :value="form.startDate"
            v-model="form.startDate"
          />
        </BFormGroup>
        <BFormGroup
          label="졸업(예정)일"
          :invalid-feedback="'졸업(예정)일을 입력해 주세요.'"
          :state="v$.form.endDate.$dirty ? !v$.form.endDate.$error : null"
        >
          <BFormInput
            type="date"
            :value="form.endDate"
            v-model="form.endDate"
          />
        </BFormGroup>
      </div>
      <BFormGroup
        class="mb-3"
        label="평균학점"
        :invalid-feedback="'평균 학점을 입력해 주세요.'"
        :state="v$.form.averageGPA.$dirty ? !v$.form.averageGPA.$error : null"
      >
        <BFormInput :value="form.averageGPA" @input="onChangeAverageGPA" />
      </BFormGroup>
      <BFormGroup
        label="최대학점"
        :invalid-feedback="'평균 학점을 입력해 주세요.'"
        :state="v$.form.highestGPA.$dirty ? !v$.form.highestGPA.$error : null"
      >
        <BFormInput :value="form.highestGPA" @input="onChangeHighestGPA" />
      </BFormGroup>
    </template>
    <template v-slot:buttons>
      <div class="d-flex justify-content-around">
        <BButton class="text-white" variant="dark" @click="onCancel">
          취소
        </BButton>
        <BButton class="text-white" variant="dark" @click="onSave"
          >저장</BButton
        >
      </div>
    </template>
  </resume-form-layout>
</template>
<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
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
  data() {
    return {
      form: {
        school: "",
        stack: "",
        job: "",
        startDate: "",
        endDate: "",
        averageGPA: "",
        highestGPA: "",
      },
    };
  },
  components: {
    ResumeFormLayout,
  },
  methods: {
    onCancel() {
      console.log(`[EducationForm] [onCancel] formId = ${this.formId}`);
      this.v$.$reset();
      this.form = {
        school: "",
        stack: "",
        job: "",
        startDate: "",
        endDate: "",
        averageGPA: "",
        highestGPA: "",
      };
      this.$emit("close-form", this.formId);
    },
    async onSave() {
      const isFormCorrect = await this.v$.$validate();
      if (isFormCorrect) {
        // 폼 검증 성공시 적용
        this.$store.commit(RESUME_MUTATION_TYPES.SAVE_EDUCATION, {
          resumeId: +this.$route.params.resumeId,
          formData: {
            ...this.form,
          },
        });
        this.onCancel();
      }
    },
    onChangeSchool(e) {
      this.form.school = e.target.value;
    },
    onChangeStack(e) {
      this.form.stack = e.target.value;
    },
    onChangejob(e) {
      this.form.job = e.target.value;
    },
    onChangeAverageGPA(e) {
      this.form.averageGPA = e.target.value;
    },
    onChangeHighestGPA(e) {
      this.form.highestGPA = e.target.value;
    },
  },
  validations() {
    return {
      form: {
        school: { required },
        stack: { required },
        job: { required },
        startDate: { required },
        endDate: { required },
        averageGPA: { required },
        highestGPA: { required },
      },
    };
  },
};
</script>
<style lang=""></style>
