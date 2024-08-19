<template>
    <div>
        <div class="image-grid">
            <div v-for="(post, index) in posts" :key="post.id" class="grid-item" :style="{ order: index + 1 }">
                <div class="button-container" v-if="isEditMode">
                    <button type="button" class="btn btn-primary" @click="editPost(index)">Edit</button>
                    <button type="button" class="btn btn-primary" @click="deletePost(index)">Delete</button>
                </div>

                <div class="post-container">
                    <BImg :src="post.image" thumbnail fluid :alt="post.title" class="post-image"/>
                    <p><a class="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover" :href="post.link">{{ post.title }}</a></p>
                    <div class="title-overlay">{{ post.title }}</div>
                </div>
            </div>

            <div v-if="isEditMode" class="grid-item add-post-container" :style="{ order: posts.length + 1 }">
                <BButton type="button" class="add-post-btn" @click="showModal = true">
                    + Add Post
                </BButton>
            </div>
        </div>

        <BModal v-model="showModal" :title="editMode ? 'Edit Post' : 'Add New Post'" @ok="editMode !== null ? updatePost() : addNewPost()"
                @hide="resetForm">
            <BForm @submit.prevent="editMode !== null ? updatePost() : addNewPost()">
                <BFormGroup label="Image URL" label-for="image-url">
                    <BFormInput
                        id="image-url"
                        v-model="newImageUrl"
                        required
                        placeholder="Enter image URL"
                    ></BFormInput>
                </BFormGroup>

                <BFormGroup label="Post Title" label-for="post-title">
                    <BFormInput
                        id="post-title"
                        v-model="newImageTitle"
                        required
                        placeholder="Enter post title"
                    ></BFormInput>
                </BFormGroup>

                <BFormGroup label="Post URL" label-for="post-url">
                    <BFormInput
                        id="post-url"
                        v-model="newPostUrl"
                        required
                        placeholder="Enter post url"
                    ></BFormInput>
                </BFormGroup>
            </BForm>
        </BModal>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showModal: false,
            newImageUrl: '',
            newImageTitle: '',
            newPostUrl: '',
            editMode: null,
        };
    },
    props: {
        posts: Array,
        isEditMode: Boolean,
    },
    methods: {
        addNewPost() {
            if (this.newImageUrl && this.newImageTitle && this.newPostUrl) {
                this.posts.push({
                    id: this.posts.length + 1,
                    image: this.newImageUrl,
                    title: this.newImageTitle,
                    link: this.newPostUrl,
                });

                this.resetForm();
            }
        },
        deletePost(index) {
            this.posts.splice(index, 1);
        },
        editPost(index) {
            this.editMode = index;
            const post = this.posts[index];
            this.newImageUrl = post.image;
            this.newImageTitle = post.title;
            this.newPostUrl = post.link;
            this.showModal = true;
        },
        updatePost() {
            if (this.newImageUrl && this.newImageTitle && this.newPostUrl && this.editMode !== null) {
                const post = this.posts[this.editMode];
                post.image = this.newImageUrl;
                post.title = this.newImageTitle;
                post.link = this.newPostUrl;

                this.resetForm();
            }
        },
        resetForm() {
            this.newImageUrl = '';
            this.newImageTitle = '';
            this.newPostUrl = '';
            this.editMode = null;
            this.showModal = false;
        },
    },
};
</script>

<style scoped>
    .image-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: auto;
        gap: 20px;
    }

    .btn {
        margin-left: 10px;
        margin-bottom: 10px;
    }
    
    .button-container {
        text-align: center;
        margin-bottom: 10px;
    }

    .post-container {
        position: relative;
        text-align: center;
    }

    .post-image {
        width: 400px;
        height: 350px;
        transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease;
    }

    .post-image:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        filter: brightness(0.8);
        margin-bottom: 15px;
    }

    .post-container:hover .title-overlay {
        opacity: 1;
    }

    .title-overlay {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        padding: 30px 80px;
        border-radius: 5px;
        border: 2px solid white; 
        opacity: 0;
    }

    .add-post-container {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .add-post-btn {
        width: 400px;
        height: 350px;
        border: 2px dashed #ccc;
        background-color: #f9f9f9;
        color: #333;
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        cursor: pointer;
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    .add-post-btn:hover {
        background-color: #e0e0e0;
        color: #000;
    }

    .link-body-emphasis{
        font-size: 20px;
    }
</style>
