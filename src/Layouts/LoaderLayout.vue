<template>
    <div class="content-wrap">
        <transition name="wrap">
            <div v-if="data" class="content">
                <slot></slot>
            </div>
        </transition>
        <div v-if="!data" class="loading">
            <img src="@/assets/icons/sun.svg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: Object
    }
}
</script>

<style lang="scss">
@import './LoaderLayout.scss'
</style>