<template>
    <b-container>
    <!-- 프로젝트 제목 -->
    <b-form-group label="프로젝트 제목">
        <b-form-input v-model="projectTitle" placeholder="프로젝트 제목을 입력하세요"></b-form-input>
    </b-form-group>

    <!-- 이미지 업로드 -->
    <b-form-group>
        <b-card class="text-center">
        <b-icon icon="image" font-scale="4"></b-icon>
        <p>사진 추가</p>
        <b-form-file
            v-model="projectImage"
            placeholder="파일을 선택하세요"
            drop-placeholder="여기에 파일을 드롭하세요"
        ></b-form-file>
        </b-card>
    </b-form-group>

    <!-- 프로젝트 개요 -->
    <b-form-group label="프로젝트 개요">
        <b-form-textarea
        v-model="projectOverview"
        placeholder="프로젝트 개요를 입력하세요"
        rows="3"
        ></b-form-textarea>
    </b-form-group>

    <!-- 프로젝트 내용 -->
    <b-form-group label="프로젝트 내용">
        <b-form-textarea
        v-model="projectContent"
        placeholder="프로젝트 내용을 입력하세요"
        rows="6"
        ></b-form-textarea>
    </b-form-group>

    <!-- 링크 추가 버튼 -->
    <b-button variant="info" @click="addLink">링크 추가</b-button>

    <!-- 등록하기 버튼 -->
    <b-button variant="primary" class="ml-2" @click="registerProject">등록하기</b-button>
    </b-container>
</template>

<script>
export default {
    data() {
    return {
        projectTitle: '',
        projectImage: null,
        projectOverview: '',
        projectContent: ''
    };
    },
    methods: {
    addLink() {
        // 링크 추가 기능 구현 (예: 모달을 열어 링크 입력)
        alert('링크 추가 기능을 구현하세요.');
    },
    registerProject() {
        // 등록하기 기능 구현
        // 폼 데이터를 제출하는 로직을 작성합니다.
        console.log('프로젝트 제목:', this.projectTitle);
        console.log('프로젝트 개요:', this.projectOverview);
        console.log('프로젝트 내용:', this.projectContent);
        console.log('프로젝트 이미지:', this.projectImage);
        alert('프로젝트가 등록되었습니다!');
    }
    }
};
</script>

<style scoped>
  /* 프로젝트 폼 스타일 */
.text-center {
    margin-bottom: 1rem;
}
</style>
