<template>
    <div class="blog-container">
        <div class="header">
            <h1 class="text-center display-1">Blog</h1>
        </div>

        <div class="button-container">
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
.btn-primary {
    border: 3px solid;
    color: #2C3E50;
    float: right;
    margin-top: 30px;
    margin-bottom: 20px;
    margin-right: 20px;
    background-color: white;
    font-size: 25px;
}
.button-container {
    margin-bottom: 120px;
}
.post-view-margin {
    margin-top: 40px;
}

</style>
