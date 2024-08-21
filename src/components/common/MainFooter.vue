<template>
    <footer class="footer-container">
        <div class="footer-center">
            <p>&copy; 2024 Your portfolio. All rights reserved.</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterComponent',
};
</script>

<style scoped>
.footer-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: rgb(19, 19, 31);
    color: white;
}

.footer-center {
    font-size: 14px;
    text-align: center;
    margin: 0 auto;
}


</style>
