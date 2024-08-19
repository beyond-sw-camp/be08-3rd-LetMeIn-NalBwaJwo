<template lang="html">
  <resume-form-layout>
    <template v-slot:form>
      <BFormGroup class="mb-3" label="회사이름">
        <BFormInput />
      </BFormGroup>
      <BFormGroup class="mb-3" label="사용스택">
        <BFormInput />
      </BFormGroup>
      <BFormGroup class="mb-3" label="직무">
        <BFormInput />
      </BFormGroup>
      <div class="d-flex justify-content-between">
        <BFormGroup label="업무시작">
          <BFormInput type="date" />
        </BFormGroup>
        <BFormGroup label="업무종료">
          <BFormInput type="date" />
        </BFormGroup>
      </div>
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
      console.log(this.formId);

      this.$store.commit({
        type: RESUME_MUTATION_TYPES.TOGGLE_FORM,
        formId: this.formId,
      });
    },
  },
};
</script>
<style lang=""></style>
