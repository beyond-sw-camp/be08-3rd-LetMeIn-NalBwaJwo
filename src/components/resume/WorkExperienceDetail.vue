<template>
    <BCard>

        <BCardText>회사명 : {{companyName }}</BCardText>
        <BCardText>사용 스택 : {{stack }}</BCardText>
        <BCardText>직무 : {{job }}</BCardText>
        <BCardText>입사일 : {{startDate }}</BCardText>
        <BCardText>퇴사일 : {{endDate }}</BCardText>
        <BCardText>재직 기간 : {{employmentDuration}}</BCardText>

    </BCard>
</template>

<script>
    export default {
        data() {
            return {
                companyName: "beyond",
                stack: "fdfjlskf",
                job: "adfs",
                startDate: "2020-02-28",
                endDate: "2024-04-08"
            }
        },
        computed: {
            employmentDuration() {
                const start = new Date(this.startDate);
                const end = new Date(this.endDate);

                let years = end.getFullYear() - start.getFullYear();
                let months = end.getMonth() - start.getMonth();
                let days = end.getDate() - start.getDate();

                if (days < 0) {
                    months--;
                    days += new Date(end.getFullYear(), end.getMonth(), 0).getDate();
                }

                if (months < 0) {
                    years--;
                    months += 12;
                }

                return `${years}년 ${months}개월 ${days}일`;
            },
        },
}
</script>

<style lang="scss" scoped>

</style>