<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { getOneProduct } from '@/utils/';
import { useCartStore, useToastStore, useWidthStore } from '@/stores';
import { AmountItems, ProductCard, ProductCardMobile, ProductCardUltraMobile } from '@/components';

const router = useRouter();
const cartStore = useCartStore();
const toastStore = useToastStore();
const widthStore = useWidthStore();
const products = ref([]);
const deliveryMethod = ref('');
const priceAll = computed(() => products.value.reduce((acc, p) => acc + (p.amount * p.price), 0));
const priceAllWithDelivery = computed(() => priceAll.value + ((deliveryMethod.value == 'premium') ? 22 : 15));

function removeOneAmount(productId) {
  const index = cartStore.findIndexProduct(productId);
  if (cartStore.productsInCart[index].amount == 1) {
    cartStore.removeItem(index);
    products.value.splice(index, 1);
    return;
  }
  cartStore.removeOneQuantity(index);
}

function removeItem(productId) {
  const index = cartStore.findIndexProduct(productId);
  
  cartStore.removeItem(index);
  products.value.splice(index, 1);
  toastStore.sucess("Produto removido com sucesso!");
}

onMounted(async() => {
  if (cartStore.productsInCart.length > 0) {
    for (let i = 0; i < cartStore.productsInCart.length; i++) {
      products.value.push(getOneProduct(cartStore.productsInCart[i].id));
      products.value[products.value.length - 1].amount = cartStore.productsInCart[i].amount;
    }
  }
})
</script>

<template>
    <div class="container-page">
      <div class="container-cart">
        <div class="container-left">
          <div class="container-header-cart">
            <h1 class="title">Carrinho</h1>
            <AmountItems :style="'font-weight: 300; font-size: 1.2rem;'" :upper-case="false"/>
          </div>
          <div v-if="products.length > 0" class="container-products">
            <div v-if="widthStore.width >= 550">
              <ProductCard v-for="(product, index) in products" :key="index" :product="product" @remove-one="removeOneAmount" @add-more-one="cartStore.updateCard" @remove-item="removeItem" />
            </div>
            <div v-else-if="widthStore.width >= 425">
              <ProductCardMobile v-for="(product, index) in products" :key="index" :product="product" @remove-one="removeOneAmount" @add-more-one="cartStore.updateCard" @remove-item="removeItem" />
            </div>
            <ProductCardUltraMobile v-else v-for="(product, index) in products" :key="index" :product="product" @remove-one="removeOneAmount" @add-more-one="cartStore.updateCard" @remove-item="removeItem" />
          </div>
          <div class="container-back">
            <img src="@/assets/icons/left-arrow.png" alt="">
            <p @click="router.push('/')">Voltar para a loja</p>
          </div>
        </div>
        <div class="container-right">
          <div class="container-title-summary">
            <h2 class="summary">Sumário</h2>
          </div>
          <div class="container-price-items">
            <AmountItems :style="'color: #40485A; font-weight: 600;'" :upper-case="true" />
            <p class="price-items">R$ {{ priceAll.toFixed(2).replace(".", ",") }}</p>
          </div>
          <div class="container-inputs">
            <div class="container-delivery">
              <p class="sub-title-summary">OPÇÕES DE ENTREGA</p>
              <select v-model="deliveryMethod" class="select-summary">
                <option value="" selected disabled>Escolha sua forma de entrega</option>
                <option value="default">Entrega Padrão - R$15,00 (5-7 dias)</option>
                <option value="premium">Entrega Rápida - R$22,00 (até 3 dias)</option>
              </select>
            </div>
            <div class="container-coupon">
              <p class="sub-title-summary">CÓDIGO DO CUPOM</p>
              <input type="text" class="input-summary" placeholder="Escreva seu código de cupom">
            </div>
          </div>
          <div class="container-final-price">
            <p class="final-price">PREÇO TOTAL</p>
            <p class="final-amount">R$ {{ priceAllWithDelivery.toFixed(2).replace(".", ",") }}</p>
          </div>
          <div class="container-payment">
            <button class="btn-payment" @click="router.push('sucess')">PAGAR</button>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
* {
  font-family: 'Poppins', Arial, Helvetica, sans-serif;
}
.container-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #DDDDDD;
}

.container-cart {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #DDDDDD;
  /* border: 1px solid #000; */
  box-shadow: 1px 1px 10px #959494;
}

.container-left {
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  padding: 40px;
}

.container-header-cart {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 40px;
}

.title {
  font-size: 2rem;
  font-weight: 400;
}

.container-products {
  flex-grow: 2;
  border-top: 1px solid #DDDDDD;
}

.container-back {
  display: flex;
  align-items: center;
  column-gap: 8px;
  margin-top: 20px;
}

.container-back > img {
  object-fit: contain;
}

.container-back > p {
  cursor: pointer;
}

.container-right {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 60px 30px;
  background-color: #DDDDDD;
}

.container-title-summary {
  border-bottom: 1px solid #a5a0a0;
}

.summary {
  font-size: 1.7rem;
  color: #40485A;
  margin-bottom: 20px;
}

.container-price-items {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.sub-title-summary {
  color: #40485A;
  font-weight: 600;
}

.container-inputs {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-top: 20px;
  margin-bottom: 40px;
}

.container-delivery, .container-coupon {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

.select-summary {
  width: 300px;
  height: 50px;
  padding: 8px;
  outline: none;
}

.input-summary {
  width: 300px;
  height: 40px;
  padding: 8px;
  outline: none;
}

.container-final-price {
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  border-top: 1px solid #a5a0a0;
  color: #40485A;
  font-weight: 600;
}

.container-payment {
  margin-top: 50px;
}

.btn-payment {
  width: 100%;
  height: 40px;
  background-color: #000;
  color: #FFFFFF;
  border: none;
  outline: none;
  cursor: pointer;
  /* transition: .45s; */
}

@media (max-width: 320px) {
  .container-right {
    padding: 60px 10px;
  }
}
</style>