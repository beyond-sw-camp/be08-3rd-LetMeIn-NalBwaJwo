<template>
  <hr class="first-hr" />
  <div v-for="(list, i) in data" :key="i" class="resume">
    <div class="info">
      <div class="icons-wrapper">
        <EditIcon class="icon" />
        <PageViewIcon class="icon" />
        <CopyIcon class="icon" />
        <DeleteIcon class="icon" />
      </div>
      <h3 class="text-bold">{{ list.title }}</h3>
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
export default {
  name: "ResumeList",
  data() {
    return {
      data: [
        {
          title: "hello",
          date: "2023-03-23",
        },
        {
          title: "hello",
          date: "2023-03-23",
        },
        {
          title: "hello",
          date: "2023-03-23",
        },
      ],
    };
  },
  methods: {
    increseLike(i) {
      this.data[i].like += 1;
    },
  },
  components: {
    EditIcon: MaterialSymbolsLightEditOutline,
    PageViewIcon: MaterialSymbolsLightPageviewOutline,
    CopyIcon: MaterialSymbolsLightFileCopyOutlineRounded,
    DeleteIcon: MaterialSymbolsLightDeleteOutline,
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
