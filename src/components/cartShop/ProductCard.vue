<!-- eslint-disable vue/no-mutating-props -->
<template>
    <div class="container-product">
        <img :src="createURL(props.product.image)" alt="">
        <div class="container-name-product">
            <p>{{ props.product.name }}</p>
            <p class="special-card">Especial: {{ props.product.special }}</p>
        </div>
        <div class="container-amount-flex">
            <div class="container-amount">
                <span class="less" @click="(props.product.amount > 0) ? props.product.amount-- && $emit('removeOne', props.product.id) : ''">-</span>
                <span class="amount">{{ props.product.amount }}</span>
                <span class="more" @click="props.product.amount++ && $emit('addMoreOne', props.product.id)">+</span>
            </div>
        </div>
        <div class="container-price">
            <p class="price">R$ {{ (props.product.amount * props.product.price).toFixed(2).replace(".", ",") }}</p>
        </div>
        <span class="container-remove">
            <img @click="$emit('removeItem', props.product.id)" src="@/assets/icons/x.png" alt="">
        </span>
    </div>
</template>

<script setup>
import { createURL } from '@/utils';
const props = defineProps({
    product: Object
})

console.log(props.product);
</script>

<style scoped>

.container-product {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #DDDDDD;
  padding: 10px 10px 10px 10px;
}

.container-product > img {
  width: 80px;
}

.container-name-product {
    width: 110px;
}

.special-card {
  font-weight: 600;
  color: #676565;
}

.container-amount-flex {
    display: flex;
    justify-content: center;
    align-items: center;
}

.container-amount {
  display: flex;
  justify-content: space-between;
  width: 80px;
  /* margin-right: 40px; */
}

.less, .more {
    cursor: pointer;
}

.less, .amount, .more {
  font-weight: 500;
}

.amount {
  position: relative;
  bottom: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  border: 1px solid #DDDDDD;
}

.price {
  font-weight: 500;
}

.container-remove > img {
    width: 12px;
    cursor: pointer;
}
</style>