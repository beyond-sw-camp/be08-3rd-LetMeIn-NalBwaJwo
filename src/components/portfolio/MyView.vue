<template>
    <div>
        <div class="my-view">
            <div class="title">
                <h1 class="view-title">About Me</h1>
            </div>
            <div class="about-me">
                <section id="about-me-title" class="about-me-title">
                    <h2 class="about-me-hedding">Attention!</h2>
                </section>
                <aside id="about-me-section" class="about-me-section">
                <h3 class="about-me-little-title">GREAT CHALLENGER</h3>
                    <p>
                        저는 일의 온전한 주인으로서 책임감 있게 결정하고 경쟁자보다 더 빠르게 움직이기 위해 미루지 않고 신속하게 행동합니다.
                        <br>또한 업계의 상식을 뒤엎는 대담한 목표를 가지며 한발 앞선 결과를 지속적으로 만들어 냅니다.
                        <br>시시각각 변화하는 시장에서 과거의 성과에 자만하지도 안주하지도 않습니다.
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
    margin-top: 1rem;
    margin-bottom: 4rem;
    
}
.about-me-title {
    display: flex;
    width: 200px;
    height: 200px;
    min-width: 200px;
    object-fit: cover;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: aliceblue;
}

.about-me-little-title {
    margin-bottom: 1rem;
}

.about-me-content {
    margin-bottom: 4rem;
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

#about-me-section {
    margin-left: 3rem;
    margin-right: 3rem;
    float: right;
}
</style>