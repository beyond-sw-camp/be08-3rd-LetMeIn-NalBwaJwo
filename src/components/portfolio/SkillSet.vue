<template>
    <div class="container">
        <img :src="imageUrl" alt="Circle Image" class="circle-image" />
        <div class="overlay">
            <span>{{ grade }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imageUrl: String,
        grade: String
    },
};
</script>

<style scoped>
.container {
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
}

.circle-image {
    width: 80px;
    height: auto;
    max-height: 100%;
    object-fit: cover;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 13px;
    border-radius: 50%;
    transition: background-color 0.25s ease, opacity 0.25s ease;
    opacity: 0;
}

.container:hover .overlay {
    background-color: rgba(0, 0, 0, 0.35);
    opacity: 1;
}
</style>