<template>
    <div class="image-container" @mouseover="hover = true" @mouseleave="hover = false">
        <img :src="imageUrl" alt="Circle Image" class="circle-image" />
        <div class="overlay" v-if="hover">
            <span>{{ grade }}</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            hover: false,
        };
    },
    props: {
        imageUrl: String,
        grade: String
    },
};
</script>

<style scoped>
.image-container {
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
}

.circle-image {
    width: 80px;
    height: auto;
    max-height: 100%;
    object-fit: cover;
    /* border-radius: 50%; */
    /* object-position: center; */
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    /* 어두워지는 효과 */
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 12px;
    border-radius: 50%;
    transition: background-color 0.3s ease;
}
</style>