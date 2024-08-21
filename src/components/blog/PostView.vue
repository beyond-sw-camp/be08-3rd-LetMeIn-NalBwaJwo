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
                    <div class="title-overlay">{{ post.content }}</div>
                </div>
            </div>

            <div v-if="isEditMode" class="grid-item add-post-container" :style="{ order: posts.length + 1 }">
                <BButton type="button" class="add-post-btn" @click="showModal = true">
                    + Add Post
                </BButton>
            </div>
        </div>

        <BModal v-model="showModal" :title="editMode !== null ? 'Edit Post' : 'Add New Post'" @ok="editMode !== null ? updatePost() : addNewPost()"
                @hide="resetForm">
            <BForm @submit.prevent="editMode !== null ? updatePost() : addNewPost()">
                <BFormGroup>
                    <div 
                        class="drop-zone" 
                        @dragover.prevent 
                        @dragenter.prevent 
                        @drop="onDrop"
                    >
                        <p v-if="!imagePreview">이미지 파일을 드래그 앤 드롭하거나 클릭하여 업로드하세요.</p>
                        <img v-if="imagePreview" :src="imagePreview" alt="Image Preview" />
                    </div>
                </BFormGroup>

                <BFormGroup>
                    <BButton type="btn btn-primary" class = "addImage" @click="triggerFileInput">이미지 추가</BButton>
                    <input type="file" ref="fileInput" @change="onImageUpload" accept="image/*" class="d-none"/>
                </BFormGroup>

                <BFormGroup label="Post Title" label-for="post-title">
                    <BFormInput
                        id="post-title"
                        v-model="newPostTitle"
                        required
                        placeholder="Enter post title"
                    ></BFormInput>
                </BFormGroup>

                <BFormGroup label="Post Content" label-for="post-content">
                    <BFormInput
                        id="post-content"
                        v-model="newPostContent"
                        required
                        placeholder="Enter post content"
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
            newPostTitle: '',
            newPostUrl: '',
            newPostContent: '',
            editMode: null,
            imagePreview: null,
        };
    },
    props: {
        posts: Array,
        isEditMode: Boolean,
    },
    methods: {
        addNewPost() {
            if (this.newImageUrl && this.newPostTitle && this.newPostUrl && this.newPostContent) {
                this.posts.push({
                    id: this.posts.length + 1,
                    image: this.newImageUrl,
                    title: this.newPostTitle,
                    link: this.newPostUrl,
                    content: this.newPostContent
                    
                });

                this.resetForm();
            }
        },
        deletePost(index) {
            if(confirm("정말 삭제하시겠습니까?")){
                this.posts.splice(index, 1);
            }
            
        },
        editPost(index) {
            this.editMode = index;
            const post = this.posts[index];
            this.newImageUrl = post.image;
            this.newPostTitle = post.title;
            this.newPostUrl = post.link;
            this.imagePreview = post.image;
            this.showModal = true;
            this.image = null;
        },
        updatePost() {
            if (this.newImageUrl && this.newPostTitle && this.newPostUrl && this.newPostContent && this.editMode !== null) {
                const post = this.posts[this.editMode];
                post.image = this.newImageUrl;
                post.title = this.newPostTitle;
                post.link = this.newPostUrl;
                post.content = this.content;

                this.resetForm();
            }
        },
        resetForm() {
            this.newImageUrl = '';
            this.newPostTitle = '';
            this.newPostUrl = '';
            this.newPostContent = '';
            this.editMode = null;
            this.showModal = false;
            this.imagePreview = null;
        },
        onImageUpload(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();

                reader.onload = (e) => {
                    this.newImageUrl = e.target.result;
                    this.imagePreview = e.target.result;
                    this.image = e.target.result;
                };

                if(file.type.startsWith('image/')){
                    reader.readAsDataURL(file);
                }else{
                    alert('이미지 파일만 업로드가 가능합니다.');
                }
            }
        },
        triggerFileInput() {
            this.$refs.fileInput.click();
        },
        onDrop(event) {
            event.preventDefault();
            const file = event.dataTransfer.files[0];
            if (file) {
                this.newImageUrl = URL.createObjectURL(file);
                this.imagePreview = this.newImageUrl;
            }
        },
    },
};
</script>

<style scoped>
    .image-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: auto;
        gap: 10px;
        margin: 0 auto;
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
        padding-top: 25px;
        padding-bottom: 25px;
    }

    .post-image {
        width: 400px;
        height: 270px;
        transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease;
        margin-bottom: 15px;
    }

    .post-image:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        filter: brightness(0.5);
    }

    .post-container:hover .title-overlay {
        opacity: 1;
    }

    .title-overlay {
        position: absolute;
        width: 350px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -80%);
        color: white;
        font-weight: bold;
        padding: 10px 20px;
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
        height: 270px;
        border: 2px dashed #ccc;
        background-color: #f9f9f9;
        color: #333;
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        cursor: pointer;
        transition: background-color 0.4s ease, color 0.3s ease;
    }

    .add-post-btn:hover {
        background-color: #e0e0e0;
        color: #000;
    }

    .link-body-emphasis{
        font-size: 14px;
    }

    .drop-zone {
        width: 100%;
        height: 200px;
        margin-top: 10px;
        margin-bottom: 10px;
        border: 2px dashed #ccc;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        cursor: pointer;
        background-color: #f9f9f9;
        transition: background-color 0.3s ease;
    }

    .drop-zone:hover {
        background-color: #e0e0e0;
    }

    .drop-zone img {
        max-width: 100%;
        max-height: 100%;
    }

    .addImage{
        color: white;
        float: right;
        background-color: #2C3E50;
    }
</style>
