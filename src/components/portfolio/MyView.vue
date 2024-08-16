<template>
    <div>
        <div class="my-view">
            <div class="title">
                <h1 class="view-title">My Views</h1>
            </div>
            <div class="about-me">
                <section id="about-me-title" class="about-me-title">
                    <h2 class="about-me-hedding">About Me</h2>
                </section>
                <aside id="about-me-section" class="about-me-section">
                <h2>소제목을 입력하세요.</h2>
                    <p>
                        내용을 입력합니다. 조금 긴 내용을 입력하고 싶은데 할 말이 없네요. 이 자리에는 자기소개 내용이 들어갑니다.
                        <br>조금 더 할 말을 정해야 하는데 진짜로 없네요. 컴포넌트 위치 설정을 어떻게 해야할 지 고민입니다.
                        <br>감사합니다.
                    </p>
                </aside>
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
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    align-items: center;    
    margin-top: 3rem;
    position: relative; 
    text-align: center; 
    width: 100%;
}

.view-title {
    box-sizing: border-box;
    position: relative; 
    display: flex;
    justify-content: center;
    width: 430px;
}
.about-me {
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    align-items: center;
    box-sizing: border-box;
    height: 300px;
    margin-bottom: 3rem;
}
.about-me-title {
    display: flex;
    width: 200px;
    height: 200px;
    object-fit: cover;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: aliceblue;
}

.about-me-content {
    margin-bottom: 4rem;
    margin-right: 2rem;
}

.view-title::before,
.view-title::after {
    content: "";
    position: absolute; 
    top: 50%; 
    width: 80px;
    height: 3px; 
    background-color: #000;
}

.view-title::before {
    left: 0; 
    transform: translateY(-50%); 
}

.view-title::after {
    right: 0; 
    transform: translateY(-50%); 
}

#about-me-title {
    float: left;
    /* width: 20%; */
    margin-left: 3rem;
    margin-right: 6rem;
}

#about-me-section {
    float: right;
}
</style>