<template lang="html">
  <div>
    <BannerSlider />
    <MyView class="myView"/>
    <div class="skillset-title">
      <h1 class="skills">Skills</h1>
    </div>
    <div class="skillset-line1">
      <div v-for="(skill, index) in skillsLine1" :key="index" :style="getSkillSet(index)">
        <SkillSet :grade="skill.grade" :imageUrl="skill.imageUrl" />
      </div>
    </div>
    <div class="skillset-line2">
      <div v-for="(skill, index) in skillsLine2" :key="index" :style="getSkillSet(index)">
        <SkillSet :grade="skill.grade" :imageUrl="skill.imageUrl" />
      </div>
    </div>
    <div class="skillset-line3">
      <div v-for="(skill, index) in skillsLine3" :key="index" :style="getSkillSet(index)">
        <SkillSet :grade="skill.grade" :imageUrl="skill.imageUrl" />
      </div>
    </div>
    <MyLink class="myLink"/>
  </div>
</template>
<script>
import MainNavHeader from "@components/common/MainNavHeader.vue";
import BannerSlider from "@components/portfolio/BannerSlider.vue";
import SkillSet from "@components/portfolio/SkillSet.vue";
import MyView from "@components/portfolio/MyView.vue";
import MyLink from "@components/portfolio/MyLink.vue";


import html from '@assets/portfolio/icons/html.png';
import css from '@assets/portfolio/icons/css.png';
import javascript from '@assets/portfolio/icons/javascript.png';
import vue from '@assets/portfolio/icons/vue.png';
import react from '@assets/portfolio/icons/react.png';
import java from '@assets/portfolio/icons/java.png';
import python from '@assets/portfolio/icons/python.png';
import spring from '@assets/portfolio/icons/spring.png';
import django from '@assets/portfolio/icons/django.png';
import nodejs from '@assets/portfolio/icons/nodejs.png';
import docker from '@assets/portfolio/icons/docker.png';
import kubernetes from '@assets/portfolio/icons/kubernetes.png';
import aws from '@assets/portfolio/icons/aws.png';

export default {
  components: {
    MainNavHeader,
    BannerSlider,
    SkillSet,
    MyView,
    MyLink
  },
  data() {
    return {
      skillsLine1: [
        {grade: 'HTML: Familiar', imageUrl: html,},
        {grade: 'CSS: Familiar', imageUrl: css,},
        {grade: 'JavaScript: Familiar', imageUrl: javascript,},
        {grade: 'Vue: Tried', imageUrl: vue,},
      ],
      skillsLine2: [
        {grade: 'React: Tried', imageUrl: react,},
        {grade: 'Java: Expert', imageUrl: java,},
        {grade: 'Python: Familiar', imageUrl: python,},
        {grade: 'Spring: Familiar', imageUrl: spring,},
        {grade: 'Django: Tried', imageUrl: django,},
      ],
      skillsLine3: [
        {grade: 'Node.js: Familiar', imageUrl: nodejs,},
        {grade: 'Docker: Tried', imageUrl: docker,},
        {grade: 'Kubernetes: Tried', imageUrl: kubernetes,},
        {grade: 'AWS: Tried', imageUrl: aws,},
      ],
    }
  },
  methods: {
    getSkillSet(index) {
      return {
        position: 'relative',
        display: 'flex',
        width: 'auto',
        padding: '0.5rem'
      };
    }
  }
};

</script>
<style scoped>
.myView {
  display: flex;
  justify-content: center;
  background-color: gainsboro;
}
.skills {
  box-sizing: border-box;
  position: relative; 
  display: flex;
  justify-content: center;
  width: 350px;
}
.myLink {
  display: flex;
  justify-content: center;
}

.skillset-title {
  display: flex;
  padding: 20px; 
  margin-top: 3%; 
  justify-content: center;
  width: 100%;
}

.skillset-line1 {
  display: flex;
  margin-top: 3%; 
  justify-content: center;
}

.skillset-line2 {
  display: flex;
  justify-content: center;
}

.skillset-line3 {
  display: flex;
  justify-content: center;
}

.skills::before,
.skills::after {
    content: "";
    position: absolute; 
    top: 50%; 
    width: 80px;
    height: 3px; 
    background-color: #000;
}

.skills::before {
    left: 0; 
    transform: translateY(-50%); 
}

.skills::after {
    right: 0; 
    transform: translateY(-50%); 
}

.myLink {
  margin-top: 8%;
  width: auto;
  background-color: rgb(19, 19, 31);
  flex-direction: column;
  align-items: center;
  padding: 2rem 0 1rem 0;
}
</style>
