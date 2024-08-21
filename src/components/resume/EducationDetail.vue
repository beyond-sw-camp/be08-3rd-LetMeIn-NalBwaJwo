<template>
    <BCard>
        <BCardText>학교 : {{school}}</BCardText>
        <BCardText>전공 : {{stack }}</BCardText>
        <BCardText>학위 : {{job }}</BCardText>
        <BCardText>입학일 : {{startDate }}</BCardText>
        <BCardText>졸업(예정)일 : {{endDate }}</BCardText>
        <BCardText>평균 학점 : {{averageGPA}}</BCardText>
        <BCardText>최고 학점 : {{highestGPA}}</BCardText>
    </BCard>
</template>

<script>
    export default {
        data() {
            return {
                school: "서울대학교",    
                stack: "컴퓨터공학",     
                job: "학사",             
                startDate: "2018-03-02", 
                endDate: "2022-02-28",  
                averageGPA: "3.8/4.5",    
                highestGPA: "4.5/4.5"    
            }
        },
    };
</script>

<style lang="scss" scoped>

</style>