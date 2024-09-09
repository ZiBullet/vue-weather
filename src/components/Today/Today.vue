<template>
    <section class="today">
        <TodayTemp />
        <TodayInfo />
    </section>
</template>

<script>
import TodayTemp from '@/components/TodayTemp/TodayTemp.vue';
import TodayInfo from '@/components/TodayInfo/TodayInfo.vue';


    export default {
        components: {
            TodayTemp,
            TodayInfo
        },
    }
</script>

<style lang="scss">
@import "./Today.scss";
</style>