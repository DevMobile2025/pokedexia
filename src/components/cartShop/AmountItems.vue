<template>
  <p v-if="props.upperCase == false" :style="props.style">{{ cartStore.amountItems }} {{(cartStore.amountItems > 1 || cartStore.amountItems == 0) ? 'Itens' : 'Item' }}</p>

  <p v-if="props.upperCase == true" :style="props.style">{{(cartStore.amountItems > 1 || cartStore.amountItems == 0) ? 'ITENS' : 'ITEM' }}: {{ cartStore.amountItems }}</p>
</template>

<script setup>
import { useCartStore } from '@/stores';

const cartStore = useCartStore();
const props = defineProps({
    style: String,
    upperCase: Boolean,
});
</script>

<style scoped>

</style>