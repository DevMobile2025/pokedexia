<script setup>
import { RouterView } from 'vue-router';
import { useWidthStore } from '@/stores';
import { onMounted } from 'vue';

const widthStore = useWidthStore();
onMounted(() => {
    widthStore.width = window.innerWidth;
})
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>

<style scoped>

</style>