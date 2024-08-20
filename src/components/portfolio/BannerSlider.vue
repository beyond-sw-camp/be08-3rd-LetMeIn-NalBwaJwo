<template lang="html">
    <div>
        <h1 class="title">Welcome! Developer 이름입니다.</h1>
        <div class="slider">
            <div class="slides" :style="{ transform: 'translateX(' + currentTranslateX + '%)' }">
                <div class="slide" v-for="(slide, index) in slides" :key="index">
                    <img :src="slide" alt="Slide Image" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import main1 from '@assets/portfolio/main1.jpg';
import main2 from '@assets/portfolio/main2.jpg';
import main3 from '@assets/portfolio/main3.jpg';
export default {
    data() {
        return {
            slides: [
                main1, main2, main3
            ],
            currentIndex: 0,
        };
    },
    computed: {
        currentTranslateX() {
            return -this.currentIndex * 100;
        },
    },
    mounted() {
        this.startSlider();
    },
    methods: {
        startSlider() {
            setInterval(() => {
                this.nextSlide();
            }, 3000);
        },
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        },
    },
};

</script>
<style scoped>
.title {
    position: absolute;
    top: 50%;
    left: 50%; 
    transform: translateX(-50%);
    color: white;
    padding: 0 10px; 
    text-align: center;
    font-size: 38pt;
    z-index: 10;
}

.slider {
    overflow: hidden;
    width: 100%; 
    height: 860px; 
    position: relative;
}

.slides {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.slide {
    min-width: 100%;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ccc;
}

.slide img {
    width: 100%; 
    height: 860px;
    object-fit: cover; 
    object-position: center;
}
</style>
