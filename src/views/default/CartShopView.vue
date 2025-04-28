<script setup>
import { useWidthStore } from "@/stores";
import { CartShopDesktop, CartShopMobile } from "@/views";

const widthStore = useWidthStore();
</script>

<template>
    <CartShopDesktop v-if="widthStore.width >= 950" />
    <CartShopMobile v-else />
</template>

<style scoped>
</style>