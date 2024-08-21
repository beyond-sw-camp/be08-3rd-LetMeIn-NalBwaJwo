<template lang="html">
  <resume-form-layout>
    <template v-slot:form>
      <BFormGroup class="mb-3" label="수상/취득내용">
        <BFormInput />
      </BFormGroup>
      <BFormGroup label="수상/취득년월">
        <BFormInput type="date" />
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
import { RESUME_MUTATION_TYPES } from "@store/modules/resume/mutation.js";
import { ResumeFormLayout } from "@components/index";
export default {
  props: {
    formId: {
      type: String,
      required: true,
    },
  },
  components: { ResumeFormLayout },
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
