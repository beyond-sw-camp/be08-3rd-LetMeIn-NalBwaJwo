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
        <div class="card-list">
            <BCard class="card-git"
                title="Github"
                :img-src="githubImage"
                img-alt="Github"
                img-top
                tag="article"
                style="max-width: 20rem;
                    margin-right: 1rem;
                    box-shadow: 0 4px 13px rgba(255, 255, 255, 0.4);"
                >
                <BCardText>
                    프로젝트에 사용된 코드가 궁금하다면 깃허브에서 확인하세요.
                    <br><br>
                </BCardText>

                <BButton href="https://github.com/" variant="primary" target="_blank" rel="noopener noreferrer">Go myspace</BButton>
            </BCard>
            <BCard class="card-blog"
                title="Velog"
                :img-src="blogImage"
                img-alt="Velog"
                img-top
                tag="article"
                style="max-width: 20rem;
                    box-shadow: 0 4px 13px rgba(255, 255, 255, 0.4);"
                >
                <BCardText>
                    저의 일상과 작업 과정이 공개되어 있습니다. 블로그를 방문해 보세요.
                    <br><br>
                </BCardText>

                <BButton href="https://velog.io/" variant="primary" target="_blank" rel="noopener noreferrer">Go myblog</BButton>
            </BCard>
        </div> 
    </div>

</template>

<script>
    import githubImage from '@assets/portfolio/github.jpg';
    import blogImage from '@assets/portfolio/blog.jpg';

    export default {
    data() {
        return {
            githubImage, blogImage
        }
    }
    }

</script>

<style scoped>
.title {
    position: relative; 
    padding: 0 120px; 
    margin: 40px 0; 
    text-align: center; 
    color: white;
}

.title::before,
.title::after {
    content: "";
    position: absolute; 
    top: 50%; 
    width: 80px;
    height: 3px; 
    background-color: white;
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

.card-list { 
    display: flex;
    padding: 1rem 0 3rem;
}
</style>