<template>
    <div class="bg-green-500 rounded px-2 py-1 text-white ">
        <h1>Alert component</h1>
        <h4>Store value is ===== {{ store.count }}</h4>
    </div>
</template>

<script setup>
import { useCounterStore } from "~/stores/myStore"
const store = useCounterStore()

</script>

<style lang="scss" scoped>

</style>