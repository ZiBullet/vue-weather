<template>
    <header class="header">
        <nav class="header__nav">
            <a href="#" class="header__nav-logo">
                <img src="@/assets/icons/logo.svg" alt="logo">
                <span>vue weather</span>
            </a>
            <div class="header__nav-right">
                <button class="header__nav-right-theme" @click="changeTheme">
                    <img src="@/assets/icons/drop.svg" alt="drop">
                </button>
                <input type="text" v-model="city" placeholder="Выбрать город" class="header__nav-right-search"
                    @keydown.enter="getWeather(city), city = ''">
            </div>
        </nav>
    </header>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            city: ''
        }
    },
    methods: {
        ...mapActions(['getWeather']),
        changeTheme() {
            let value = document.body.style.getPropertyValue('--theme')

            if (value == 'var(--white)') {
                document.body.style.setProperty('--theme', 'var(--black-theme)');
                document.body.style.setProperty('--shadow', '2px 5px 25px -3px rgb(53, 48, 48)')
                document.body.style.setProperty('--text-color', 'var(--white)')
            } else {
                document.body.style.setProperty('--theme', 'var(--white)');
                document.body.style.setProperty('--shadow', '2px 5px 25px -3px #B4B4B440')
                document.body.style.setProperty('--text-color', 'var(--black)')
            }
        }
    },
    created() {
        document.body.style.setProperty('--theme', 'var(--white)');
        document.body.style.setProperty('--shadow', '2px 5px 25px -3px #B4B4B440')
        document.body.style.setProperty('--text-color', 'var(--black)')
    }
}
</script>

<style lang="scss">
@import "./Header.scss";
</style>