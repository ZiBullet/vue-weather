<template>
    <section class="week">
        <WeekDay v-for="(day, i) in weather.daily" :dayOrder="i" :day="day" :key="i" />
    </section>
</template>

<script>
import { mapState } from 'vuex'
import WeekDay from '../WeekDay/WeekDay.vue'

export default {
    components: {
        WeekDay
    },
    computed: {
        ...mapState(['weather']),
    }
}

</script>

<style lang="scss">
@import './Week.scss';
</style>