<template>
  <hr class="first-hr" />
  <div v-for="(list, index) in resumes" :key="list.resumeId" class="resume">
    <div class="info">
      <div class="icons-wrapper">
        <span v-if="isLogin" @click="confirmSelect(list.resumeId)" class="click-text icon"><emptyStar /></span>
        <span v-if="isLogin" @click="confirmDelete(index)" class="click-text icon"><DeleteIcon /></span>
      </div>
      <h3 class="text-bold resume-title" @click="onClickDetail(list.resumeId)">
        <span>{{ list.title }}</span>
        <span class="star-box">
          <StarIcon v-if="selectedIndex === list.resumeId" class="icon star-icon" />
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
import MaterialSymbolsLightStarOutline from '~icons/material-symbols-light/star-outline';

export default {
  name: "ResumeList",
  data() {
    return {
      selectedIndex: null,
      resumes: [
        { resumeId: 1, title: "그 회사에 꼭 필요한 지원자 길동이여유", date: "2024-03-23" },
        { resumeId: 2, title: "일등을 위해 달린다...! Victory...!", date: "2023-02-25" },
        { resumeId: 3, title: "새해를 맞이하며 이력서를 씁니다...", date: "2023-01-01" }
      ],
    };
  },
  methods: {
    confirmSelect(resumeId) {
      if (this.selectedIndex === resumeId) {
        alert("이미 선택된 이력서입니다.");
      } else {
        if (confirm("이 이력서를 대표 이력서로 설정하시겠습니까?")) {
          this.selectItem(resumeId);
        }
      }
    },
    selectItem(resumeId) {
      this.selectedIndex = resumeId;
    },
    confirmDelete(index) {
      if (confirm("정말 이 이력서를 삭제하시겠습니까?")) {
        this.deleteResume(index);
      }
    },
    deleteResume(index) {
      this.resumes.splice(index, 1);
      
      // 삭제된 후 selectedIndex 조정
      if (this.selectedIndex === this.resumes[index]?.resumeId) {
        this.selectedIndex = null;
      } else if (this.selectedIndex > this.resumes[index]?.resumeId) {
        this.selectedIndex--;
      }
    },
    onClickDetail(resumeId) {
      console.log(resumeId);
      this.$router.push(`resume/${resumeId}`);
    },
  },
  components: {
    EditIcon: MaterialSymbolsLightEditOutline,
    PageViewIcon: MaterialSymbolsLightPageviewOutline,
    CopyIcon: MaterialSymbolsLightFileCopyOutlineRounded,
    DeleteIcon: MaterialSymbolsLightDeleteOutline,
    StarIcon: MeteoconsStarFill,
    emptyStar: MaterialSymbolsLightStarOutline
  },
  computed: {
    selectedItem() {
      return this.selectedIndex !== null
        ? this.resumes.find(item => item.resumeId === this.selectedIndex)
        : null;
    },
    isLogin() {
      return this.$store.state.Auth.isLogin
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
  flex-direction: column;
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
  transition: color 0.2s ease, transform 0.2s ease;
}

.icon:hover {
  color: #084485; /* 아이콘 색상 변경 */
  transform: scale(1.1); /* 아이콘 크기 증가 */
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

/* 반응형 효과 추가 */
.resume-title {
  transition: transform 0.2s ease, color 0.2s ease;
  cursor: pointer;
  max-width: calc(100% - 40px); /* 아이콘과의 간격 고려 */
  overflow: hidden;
  text-overflow: ellipsis; /* 텍스트가 길어지면 생략부호 추가 */
  white-space: nowrap; /* 텍스트가 줄바꿈되지 않도록 설정 */
}

.resume-title:hover {
  color: #084485; /* 커서가 올라갈 때 변경할 색상 */
  transform: scale(1.02); /* 커서가 올라갈 때 크기 증가 효과 */
}
</style>
