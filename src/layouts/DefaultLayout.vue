<template>
    <main>
        <DefaultHeader />
        <RouterView />
        <DefaultFooter />
    </main>
</template>
  
<script script>
import { DefaultHeader, DefaultFooter } from '@/components';
import { RouterView } from 'vue-router';
</script>

<style scoped>
main {
    height: 100vh;
}
</style>