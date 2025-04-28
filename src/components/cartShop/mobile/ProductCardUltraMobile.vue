<script setup>
import { createURL } from '@/utils';
const props = defineProps({
    product: Object
})

console.log(props.product);
</script>

<!-- eslint-disable vue/no-mutating-props -->
<template>
    <div class="container-product">
        <img :src="createURL(props.product.image)" alt="">
        <div class="container-name-product">
            <div class="container-top-right">
                <p>{{ props.product.name }}</p>
                <p class="special-card">Especial: {{ props.product.special }}</p>
            </div>
            <div class="container-price">
                <p class="price">R$ {{ (props.product.amount * props.product.price).toFixed(2).replace(".", ",") }}</p>
            </div>
        </div>
        <div class="container-bottom-right">
            <div class="container-amount-flex">
                <div class="container-amount">
                    <span class="less" @click="(props.product.amount > 0) ? props.product.amount-- && $emit('removeOne', props.product.id) : ''">-</span>
                    <span class="amount">{{ props.product.amount }}</span>
                    <span class="more" @click="props.product.amount++ && $emit('addMoreOne', props.product.id)">+</span>
                </div>
            </div>
            <span class="container-remove">
                <img @click="$emit('removeItem', props.product.id)" src="@/assets/icons/x.png" alt="">
            </span>
        </div>
    </div>
</template>


<style scoped>

.container-product {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: center;
  column-gap: 30px;
  border-bottom: 1px solid #DDDDDD;
  padding: 10px 10px 10px 10px;
}

.container-info-right {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    flex-grow: 2;
}

.container-top-right {
    display: flex;
    column-gap: 10px;
}

.container-product > img {
  width: 100px;
}


.container-name-product {
    display: flex;
    flex-direction: column;
    align-items: center;
    column-gap: 30px;
}

.price {
    font-size: 1.3rem;
}

.container-bottom-right {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
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
    width: 14px;
    cursor: pointer;
}
</style>