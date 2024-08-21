<template lang="html">
  <resume-form-layout>
    <template v-slot:form>
      <BFormGroup class="mb-3" label="학교">
        <BFormInput />
      </BFormGroup>
      <BFormGroup class="mb-3" label="전공">
        <BFormInput />
      </BFormGroup>
      <BFormGroup class="mb-3" label="학위">
        <BFormInput />
      </BFormGroup>
      <div class="d-flex justify-content-around mb-3">
        <BFormGroup label="입학일">
          <BFormInput />
        </BFormGroup>
        <BFormGroup label="졸업(예정)일">
          <BFormInput />
        </BFormGroup>
      </div>
      <BFormGroup class="mb-3" label="평균학점">
        <BFormInput />
      </BFormGroup>
      <BFormGroup label="최대학점">
        <BFormInput />
      </BFormGroup>
    </template>
    <template v-slot:buttons>
      <div class="d-flex justify-content-around">
        <BButton class="text-white" variant="dark" @click="onCancel">
          취소
        </BButton>
        <BButton class="text-white" variant="dark">저장</BButton>
      </div>
    </template>
  </resume-form-layout>
</template>
<script>
import { ResumeFormLayout } from "@components/index";
import { RESUME_MUTATION_TYPES } from "@store/modules/resume/mutation.js";

export default {
  props: {
    formId: {
      type: String,
      required: true,
    },
  },
  components: {
    ResumeFormLayout,
  },
  methods: {
    onCancel() {
      this.$store.commit({
        type: RESUME_MUTATION_TYPES.TOGGLE_FORM,
        formId: this.formId,
      });
    },
  },
};
</script>
<style lang=""></style>
