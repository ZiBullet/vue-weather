<template>
    <div class="today__info">
        <div class="today__info-bg">
            <img src="@/assets/icons/headerBg.svg" alt="">
        </div>
        <div class="today__info-rows">
            <div class="today__info-row">
                <div class="today__info-row-left">
                    <div class="today__info-row-left-icon">
                        <img src="@/assets/icons/temp.svg" alt="">
                    </div>
                    <p class="today__info-row-left-text">
                        Температура
                    </p>
                </div>
                <p class="today__info-row-text">
                    {{ Math.round(weather.current.temp) }}° - ощущается как {{ Math.round(weather.current.feels_like) }}°
                </p>
            </div>
            <div class="today__info-row">
                <div class="today__info-row-left">
                    <div class="today__info-row-left-icon">
                        <img src="@/assets/icons/pressure.svg" alt="">
                    </div>
                    <p class="today__info-row-left-text">
                        Давление
                    </p>
                </div>
                <p class="today__info-row-text">
                    {{ weather.current.pressure }} мм ртутного столба - нормальное
                </p>
            </div>
            <div class="today__info-row">
                <div class="today__info-row-left">
                    <div class="today__info-row-left-icon">
                        <img src="@/assets/icons/osadki.svg" alt="">
                    </div>
                    <p class="today__info-row-left-text">
                        Осадки
                    </p>
                </div>
                <p class="today__info-row-text">
                    {{
                        weather.current.clouds ? 'Наблюдаются осадки'
                        : 'Без осадков'
                    }}
                </p>
            </div>
            <div class="today__info-row">
                <div class="today__info-row-left">
                    <div class="today__info-row-left-icon">
                        <img src="@/assets/icons/wind.svg" alt="">
                    </div>
                    <p class="today__info-row-left-text">
                        Ветер
                    </p>
                </div>
                <p class="today__info-row-text">
                    3 м/с юго-запад - легкий ветер
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState(['weather']),
    }
}
</script>