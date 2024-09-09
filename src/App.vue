<template>
  <div class="wrapper container">
    <Header />
    <LoaderLayout :data="weather">
      <Today />
      <Week />
    </LoaderLayout>
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import Today from '@/components/Today/Today.vue'
import Week from '@/components/Week/Week.vue'
import LoaderLayout from '@/Layouts/LoaderLayout.vue'

import { mapActions, mapState } from 'vuex'

export default {
  components: {
    Header,
    Today,
    Week,
    LoaderLayout
  },
  computed: {
    ...mapState(['weather'])
  },
  methods: {
    ...mapActions(['getWeather'])
  },
  created() {
    setTimeout(() => this.getWeather('Ташкент'), 500);
  }
}
</script>

<style lang="scss" scoped></style>