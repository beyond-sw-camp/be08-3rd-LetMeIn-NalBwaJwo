<template>
    <div class="blog-container">
        <div class="header">
            <h1 class="text-center display-1">Blog</h1>
        </div>

        <div class="button-container">
            <BButton @click="toggleEditMode" class="custom-button" variant="dark">
                {{ isEditMode ? 'Save' : 'Edit' }}
            </BButton>
        </div>
        
        <PostView :posts="posts" :isEditMode="isEditMode"/>
        
        
    </div>
</template>

<script>
    import PostView from './PostView.vue';

    export default {
        name: 'BlogView',
        components: {
            PostView,
        },
        data() {
            return {
                posts: [
                    { id: 1, title: 'Post 1', link: 'https://www.naver.com', image: 'https://picsum.photos/250/250/?image=54' },
                    { id: 2, title: 'Post 2', link: 'https://www.naver.com', image: 'https://picsum.photos/250/250/?image=58' },
                    { id: 3, title: 'Post 3', link: 'https://www.naver.com', image: 'https://picsum.photos/250/250/?image=59' },
                    { id: 4, title: 'Post 4', link: 'https://www.naver.com', image: 'https://picsum.photos/250/250/?image=59' },
                    { id: 5, title: 'Post 5', link: 'https://www.naver.com', image: 'https://picsum.photos/250/250/?image=54' },
                    { id: 2, title: 'Post 6', link: 'https://www.naver.com', image: 'https://picsum.photos/250/250/?image=58' }
                ],
                isEditMode: false, 
            }
        },
        methods: {
        toggleEditMode() {
            this.isEditMode = !this.isEditMode;
        },
    },
    }
</script>

<style scoped>
.text-center {
    margin-bottom: 30px;
}
.custom-button {
    float: right;
    margin-top: 30px;
    margin-bottom: 20px;
    margin-right: 20px;
}
.button-container {
    margin-bottom: 120px;
}
.post-view-margin {
    margin-top: 40px;
}

</style>
