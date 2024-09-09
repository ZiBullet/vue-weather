<template>
    <div class="week__day">
        <div class="week__day-top">
            <h4 class="week__day-top-title">
                {{
                 dayOrder === 0 ? 'Сегодня' 
                : dayOrder === 1 ? 'Завтра'
                : getFullTime.weekday
                }}
            </h4>
            <p class="week__day-top-date">
                {{ getFullTime.day }} {{ getFullTime.month }}
            </p>
        </div>
        <div class="week__day-img">
            <img :src="getImg" :title="description" alt="">
        </div>
        <div class="week__day-bottom">
            <h5 class="week__day-bottom-title">
                +{{ Math.round(day.temp.max) }}°
            </h5>
            <p class="week__day-bottom-text">
                +{{ Math.round(day.temp.min) }}°
            </p>
            <p class="week__day-bottom-text">
                {{ description }}
            </p>
        </div>
    </div>
</template>

<script>
import { weatherName } from '@/icons'
import { getTime } from '@/utils/getTime'

export default {
    props: {
        day: Object,
        dayOrder: Number
    },
    computed: {
        description() {
            return this.day.weather[0].description
        },
        getImg() {
            return weatherName[this.description] || weatherName['ясно']
        },
        getFullTime() {
            return getTime(this.day.dt)
        }
    }
}
</script>