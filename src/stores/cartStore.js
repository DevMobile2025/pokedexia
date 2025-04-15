import { reactive, ref } from 'vue';
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', () => {
    const state = reactive({
        amountItems: 0
    });

    const findIndexProduct = (productId) => {
        return productsInCart.value.indexOf((product) => product.id == productId);
    }
  
    const updateCard = (productId) => {
        const index = findIndexProduct(productId);
        if (index != -1) {
          productsInCart.value[index].amountItems++;
        }
        else {
            productsInCart.value.push({id: productId, amountItems: 1});
        }
    }

    const removeOneQuantity = (productId) => {
        const index = findIndexProduct(productId);

        if (productsInCart.value[index].amountItems == 1) {
            productsInCart.value.splice(index, 1);
        } else {
            productsInCart.value[index].amountItems--;
        }
    }

    const removeItem = (productId) => {
        const index = findIndexProduct(productId);

        productsInCart.value.splice(index, 1);
    }
    
    const productsInCart = ref([{}]);

  return {
    state,
    findIndexProduct,
    updateCard,
    removeOneQuantity,
    removeItem,
    productsInCart,
  }
})