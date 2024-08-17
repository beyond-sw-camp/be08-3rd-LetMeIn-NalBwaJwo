<template>
    <h1>이력서 관리</h1>
    <hr class="first-hr">
    <div v-for="(list, i) in data" :key="i" class="resume">
      <div class="info">
        <div class="icons-wrapper">
          <i class="icon icon-1"><penIcon/></i>  <!-- 작성 아이콘 -->
          <i class="icon icon-2">🔍</i>  <!-- 검색 아이콘 -->
          <i class="icon icon-3">⭐</i>  <!-- 즐겨찾기 아이콘 -->
          <i class="icon icon-4">⚙️</i>  <!-- 설정 아이콘 -->
        </div>
        <h3 class="text-bold">{{ list.title }}</h3>
        <p>{{list.date}}</p>
        <hr class="last-hr">
      </div>
    </div>
    <Modal/>
  </template>
  
  <script>
    import data from './assets/resume';
    import SolarPenBroken from '~icons/solar/pen-broken';
    export default {
      name : 'ResumeList',
      data() {
        return{
          data: data,
        }
      },
      methods: {
        increseLike(i){
          this.data[i].like += 1;
        }
      },
      components: {
        PenIcon: SolarPenBroken,
  
  
      },
    }
  </script>
  
  <style>
  
  * {
  box-sizing: border-box;
  margin: 0;
  }
  
  body {
  max-width: 768px;
  margin: 0 auto;
  padding: 20px;
  }
  
  hr {
    width: 700px;
  }
  
  .first-hr {
    margin-left: 1rem;
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
  
  .text-bold{
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
  