<template>
    <BCard>
        <BCardText>수상 및 자격 취득명 : {{certificationTitle}}</BCardText>
        <BCardText>수상 및 자격 취득 내용 : {{certificationContent}}</BCardText>
        <BCardText>수상 및 자격 취득일 : {{certificationDate}}</BCardText>
    </BCard>
</template>

<script>
    export default {
        data() {
            return {
                certificationTitle: "1종 대형 운전 면허",    
                certificationContent: "나는 이제 버스를 몰 수 있어요 !",    
                certificationDate: "2024-08-16",
            }
        },
    };
</script>

<style lang="scss" scoped>

</style>