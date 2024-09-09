<template>
    <div class="today__temp">
        <div class="today__temp-weather">
            <img :src="getImg" :title="description" alt="">
        </div>
        <div class="today__temp-top">
            <h1 class="today__temp-top-title">
                {{ Math.round(weather.current.temp) }}°
            </h1>
            <p class="today__temp-top-text">
                Сегодня
            </p>
        </div>
        <div class="today__temp-bottom">
            <p class="today__temp-bottom-text">
                Время: {{ getTime }}
            </p>
            <p class="today__temp-bottom-text">
                Город: {{ weather.name }}
            </p>
        </div>

    </div>
</template>

<script>
import { mapState } from 'vuex'
import { weatherName } from '@/icons'
export default {

    computed: {
        ...mapState(['weather']),
        description() {
            return this.weather.current.weather[0].description
        },
        getImg() {
            return weatherName[this.description] || weatherName['ясно']
        },
        getTime() {
            return new Date().toLocaleString('en-US', {
                timeZone: this.weather.timeZone,
                timeStyle: 'short',
                hourCycle: 'h23'
            })
        }
    }
}
</script>