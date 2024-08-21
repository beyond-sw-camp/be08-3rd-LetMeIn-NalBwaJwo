<template>
    <div class="blog-container">
        <div class="header">
            <h1 class="text-center ">Blog</h1>
            <p class="text-center mt-4">The road to success and the road to failure are almost exactly the same.</p>
        </div>

        <div class="button-container" v-if="isLogin">
            <button type="button" @click="toggleEditMode" class="btn btn-primary" variant="dark">
                {{ isEditMode ? 'Save' : 'Edit' }}
            </button>
        </div>
        
        <PostView :posts="posts" :isEditMode="isEditMode"/>
        
        
    </div>
</template>

<script>
    import PostView from '@components/blog/PostView.vue';

    export default {
        name: 'BlogView',
        components: {
            PostView,
        },
        data() {
            return {
                posts: [
                    { id: 1, title: '[Back-end] 백엔드 개발이란? 자바 추천 이유!', link: 'https://www.naver.com', image: 'https://i.ytimg.com/vi/Kp5wo7a4eAo/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCncErpVq3Vw46IR-uzQ55SuaC3Jw', content: `백엔드 개발자를 희망하는 취준생에게 자바를 추천하는 이유` },
                    { id: 2, title: '[Front-end] 반응형 웹을 적용해 보자!', link: 'https://www.naver.com', image: 'https://i0.wp.com/blog.bungee.work/wp-content/uploads/2023/11/blog_post_featured_image_developer-1.png?resize=1024%2C533&ssl=1', content: '화면 크기에 따른 화면 구성 반응형 웹으로 알아보자!' },
                    { id: 3, title: '[Front-end] 프론트엔드 개발자 필독!! 어떻게 준비해야할까?', link: 'https://www.naver.com', image: 'https://storage.googleapis.com/static.fastcampus.co.kr/prod/uploads/202305/104422-1040/%EA%B0%9C%EB%B0%9C%EC%9E%90-%EC%B7%A8%EC%97%85%EC%9D%84-%EC%9C%84%ED%95%9C-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B3%BC%EC%A0%9C-%EC%A4%80%EB%B9%84-tip5.png',
                            content: '프론트엔드 개발자를 희망하는 취준생에게 도움을 주는 Tip 5가지' },
                    { id: 4, title: '[Back-end] 비전공자도 바로 이해할 수 있는 백엔드의 모든것', link: 'https://www.naver.com', image: 'https://s3.ap-northeast-2.amazonaws.com/blog.spartacodingclub.kr/frontend-backend-1.png',
                            content: '비전공자도 개발자가 될 수 있다!! 쉽게 이해하는 백엔드' },
                    { id: 5, title: '[Front-end] 카카오 개발자 앤드류의 실무 이야기!', link: 'https://www.naver.com', image: 'https://grepp-programmers.s3.amazonaws.com/production/file_resource/712/%E1%84%8F%E1%85%A1%E1%84%8F%E1%85%A1%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%A6%E1%86%AB%E1%84%90%E1%85%A5%E1%84%91%E1%85%B3%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%B3.png',
                            content: '카카오 개발자 앤드류의 실무 이야기로 알 수 있는 개발자의 길' },
                    { id: 2, title: '[Front-end] 프론트엔드 개발자 희망...막막하다면?', link: 'https://www.naver.com', image: 'https://blog.hongparkedu.com/wp-content/uploads/2023/02/%EB%B9%84%EC%A0%84%EA%B3%B5%EC%9E%90-%EC%9B%B9-%EA%B0%9C%EB%B0%9C%EC%9E%90%EB%A1%9C-%EC%B7%A8%EC%97%85%ED%95%98%EB%8A%94-%EB%B2%95-%EB%B0%B1%EC%97%94%EB%93%9C%ED%8E%B8.jpeg',
                            content: '프론트엔드 개발자를 꼭 준비하기 위해 해야할 일!!' }
                ],
                isEditMode: false, 
                isLogin: localStorage.getItem("ACCESS_TOKEN") !== null,
            }
        },
        methods: {
        toggleEditMode() {
            this.isEditMode = !this.isEditMode;
        },
        computed: {
            isLogin() {
                return this.$store.state.Auth.isLogin
            }
        },
    },
    }
</script>

<style scoped>
.text-center {
    margin-top: 3rem;
    margin-bottom: 30px;
}
.btn-primary {
    border: 3px solid;
    color: #2C3E50;
    float: right;
    margin-top: 30px;
    margin-bottom: 20px;
    margin-right: 20px;
    background-color: white;
    font-size: 13px;
}
.button-container {
    margin-bottom: 120px;
}
.post-view-margin {
    margin-top: 40px;
}

</style>
