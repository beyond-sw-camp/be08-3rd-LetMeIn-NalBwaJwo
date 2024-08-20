<template>
  <hr class="first-hr" />
  <div v-for="(list, index) in data" :key="index" class="resume">
    <div class="info">
      <div class="icons-wrapper">
        <EditIcon class="icon" />
        <PageViewIcon class="icon" />
        <CopyIcon class="icon" />
        <DeleteIcon class="icon" />
      </div>
      <h3 @click="selectItem(index)">{{ list.title }}
        <!-- 조건에 따라 다른 컴포넌트 렌더링 -->
          <StarIcon v-if="selectedIndex === index" />
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
      selectedIndex: null, // 선택 이력서 인덱스
      data: [
        {
          index: 1,
          title: "일등",
          date: "2023-03-23",
        },
        {
          index: 2,
          title: "이등",
          date: "2023-03-23",
        },
        {
          index: 3,
          title: "삼등",
          date: "2023-03-23",
        },
      ],
    };
  },
  methods: {
    selectItem(index) {
      this.selectedIndex = index; // 선택된 인덱스를 업데이트
    },
  },
  components: {
    EditIcon: MaterialSymbolsLightEditOutline,
    PageViewIcon: MaterialSymbolsLightPageviewOutline,
    CopyIcon: MaterialSymbolsLightFileCopyOutlineRounded,
    DeleteIcon: MaterialSymbolsLightDeleteOutline,
    StarIcon: MeteoconsStarFill,
    HallStarIcon: MaterialSymbolsLightStarOutline,
  },
  computed: {
    selectedItem() {
      // 선택된 항목을 반환
      return this.selectedIndex !== null
        ? this.items[this.selectedIndex]
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
  top: 10px; /* 상단에서의 거리 */
  right: 10px; /* 우측에서의 거리 */
  display: flex;
  gap: 10px; /* 아이콘 간의 간격 */
}

.icon {
  font-size: 24px; /* 아이콘 크기 */
  cursor: pointer;
}
</style>
