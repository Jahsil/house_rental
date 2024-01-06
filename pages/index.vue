<template>
    
  components: { alert },<div>
        <h1>index page</h1>
        <!-- <img src="~/assets/default.png" alt="profile">
        <img src="/favicon.ico" alt="favi">
        <IconsPerson /> -->

        <h2>The count is === {{  store.count }}</h2>
        <button @click="store.increment">Increment</button>
        <alert />
    </div>
</template>

<script setup>
// const {sayHello} = useUtils()
// sayHello("Eyouel")

// const { $hello } = useNuxtApp()
// $hello("Haile")

import alert from "~/components/alert.vue"
import { useCounterStore } from "~/stores/myStore"
const store = useCounterStore()
console.log("Store is ===>", store)
</script>

<style lang="scss" scoped>

</style>