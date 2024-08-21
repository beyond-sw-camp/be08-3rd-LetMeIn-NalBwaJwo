<template>
    <div class="project-list-view">
        <br><br><br>
        <h1 class="text-center">Projects</h1>
        <br>
        <ProjectList :projects="projects" />
    </div>
</template>

<script>
import ProjectList from '@components/project/ProjectList.vue'

/* 사진 파일 링크로 작성해서 좀 긺...*/

export default {
    components: {
        ProjectList
    },
    data() {
        return {
            projects: [
                { id: 1, title: 'kakaomap', description: 'Description A', image: 'https://i.namu.wiki/i/PJXhYEqwxDj8ck8vHS4zfbrur-ZxVdWSeKTuvAJnoDtLwky1YuZxN0DVu5DYCUwWfITmQGf0gB6km50-Yva3Cg.webp' },
                { id: 2, title: 'TMAP', description: 'Description B', image: 'https://newsimg.sedaily.com/2022/05/13/265YCDPXAM_1.jpg' },
                { id: 3, title: '배달의 민족', description: 'Description C', image: 'https://image.newdaily.co.kr/site/data/img/2021/06/08/2021060800063_0.jpg' },
                { id: 4, title: '치지직', description: 'Description D', image: 'https://kr.aving.net/news/photo/202404/1789380_724854_1624.jpg' },
                { id: 5, title: '트위치', description: 'Description E', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEVBGnE2rva5bDMpCoLVrM6c_y8U6nQttpSg&s' },
                { id: 6, title: '제목6', description: 'Description F', image: ''}

]
        }
    }
}
</script>

<style scoped>
h1 {
    font-size: 4rem;
    font-weight: bold;
}

.project-list-view {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px; 
}

.project-container {
    display: flex;
    flex-wrap: wrap;
    gap: 16px; 
}
</style>