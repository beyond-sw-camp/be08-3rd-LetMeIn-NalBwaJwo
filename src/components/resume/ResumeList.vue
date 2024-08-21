<template>
  <hr class="first-hr" />
  <div v-for="(list, index) in resumes" :key="list.resumeId" class="resume">
    <div class="info">
      <div class="icons-wrapper">
        <span @click="editResume(list.resumeId)"><EditIcon class="icon" /></span>
        <span @click="onClickDetail(list.resumeId)">
          <!-- <RouterLink :to="`resume/${list.resumeId}`"> -->
          <PageViewIcon class="icon" />

          <!-- </RouterLink> -->
        </span>
        <span @click="copyResume(projectId)"><CopyIcon class="icon" /></span>
        <!-- 삭제 아이콘 클릭 시 삭제 확인 절차 -->
        <span @click="confirmDelete(projectId)"><DeleteIcon class="icon" /></span>
      </div>
      <h3 class="text-bold">
        <span @click="confirmSelect(projectId)" class="click-text">{{ list.title }}</span>
        <!-- 별 아이콘 위치설정 -->
        <span class="star-box">
          <StarIcon v-if="selectedIndex === projectId" class="icon star-icon"/>
        </span>
      </h3>
      <p>{{ list.date }}</p>
      <hr class="last-hr" />
    </div>
  </div>
  <Modal />
</template>

<script>
import MaterialSymbolsLightEditOutline from "~icons/material-symbols-light/edit-outline";
import MaterialSymbolsLightPageviewOutline from "~icons/material-symbols-light/pageview-outline";
import MaterialSymbolsLightFileCopyOutlineRounded from "~icons/material-symbols-light/file-copy-outline-rounded";
import MaterialSymbolsLightDeleteOutline from "~icons/material-symbols-light/delete-outline";
import MeteoconsStarFill from '~icons/meteocons/star-fill';
import { RouterLink } from "vue-router";

export default {
  name: "ResumeList",
  
  data() {
    return {
      selectedIndex: null, // 선택된 이력서 인덱스
      resumes: [
        { resumeId: 1, title: "일등", date: "2023-03-23" },
        { resumeId: 2, title: "이등", date: "2023-03-23" },
        { resumeId: 3, title: "삼등", date: "2023-03-23" }
      ],
    };
  },
  methods: {
    confirmSelect(resumeId) {
      if (this.selectedIndex === resumeId) {
        // 이미 선택된 이력서가 다시 클릭되었을 때 경고 메시지
        alert("이미 선택된 이력서입니다.");
      } else {
        // 새로운 이력서 선택
        if (confirm("이 이력서를 대표 이력서로 설정하시겠습니까?")) {
          this.selectItem(resumeId);
        }
      }
    },
    selectItem(resumeId) {
      this.selectedIndex = resumeId; // 선택된 인덱스를 업데이트
    },
    confirmDelete(resumeId) {
      // 삭제 확인
    if (confirm("정말 이 이력서를 삭제하시겠습니까?")) {
      this.deleteResume(resumeId); // 확인 시 삭제 수행
    }
      
    },
    deleteResume(resumeId) {
      // 특정 인덱스의 이력서를 삭제
      this.resumes.splice(resumeId, 1);
      
      // 이력서가 삭제되면 선택된 이력서를 초기화
      if (this.selectedIndex === resumeId) {
        this.selectedIndex = null;
      } else if (this.selectedIndex > resumeId) {
        this.selectedIndex--;
      }
    },
    onClickDetail(resumeId) {
      console.log(resumeId);
      this.$router.push(`resume/${resumeId}`);
    },
    editResume(resumeId) {
    },
    viewResume(resumeId) {
    },
    copyResume(resumeId) {
    }
  },
  components: {
    EditIcon: MaterialSymbolsLightEditOutline,
    PageViewIcon: MaterialSymbolsLightPageviewOutline,
    CopyIcon: MaterialSymbolsLightFileCopyOutlineRounded,
    DeleteIcon: MaterialSymbolsLightDeleteOutline,
    StarIcon: MeteoconsStarFill,
  },
  computed: {
    selectedItem() {
      return this.selectedIndex !== null
              ? this.resumes[this.selectedIndex]
              : null;
    },
  },
};
</script>


<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
}

body {
  max-width: 768px;
  margin: 0 auto;
  padding: 20px;
}

.last-hr {
  margin-top: 1rem;
}

h1,
h2,
h3 {
  margin-bottom: 1rem;
}

p {
  margin-bottom: 0.5rem;
}

button {
  margin-right: 10px;
  margin-top: 1rem;
}

.text-bold {
  font-weight: bold;
}

.resume {
  width: 100%;
  display: flex;
  padding: 1rem;
}

.resume .info {
  position: relative;
  width: 100%;
}

.icons-wrapper {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 10px;
}

.icon {
  font-size: 24px;
  cursor: pointer;
}

.click-text {
  cursor: pointer;
}

/* Star 아이콘 공간 */
.star-box {
  display: inline-block;
  width: 24px; /* 아이콘의 너비와 동일하게 설정 */
  height: 24px; /* 아이콘의 높이와 동일하게 설정 */
  vertical-align: middle;
  margin-left: 10px; /* 텍스트와 아이콘 사이의 간격 */
  position: relative; /* 아이콘을 텍스트와 같은 줄에 위치시키기 위함 */
}

/* Star 아이콘의 스타일 고정 */
.star-icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
