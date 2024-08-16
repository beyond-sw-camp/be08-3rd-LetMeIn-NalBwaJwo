<template>
    <div>
        <div class="my-link">
            <div class="title">
                <h2 class="link-title">저를 조금 더 알고 싶으신가요?</h2>
                <p>
                    아래 링크도 방문해 보세요. 구독과 좋아요, 알림설정까지!
                </p>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.title {
    position: relative; 
    padding: 120px; 
    margin: 40px 0; 
    text-align: center; 
}

.title::before,
.title::after {
    content: "";
    position: absolute; 
    top: 50%; 
    width: 80px;
    height: 3px; 
    background-color: #000;
}

.title::before {
    left: 0; 
    transform: translateY(-50%); 
}

.title::after {
    right: 0; 
    transform: translateY(-50%); 
}

.link-title {
    margin: 0; 
}
</style>