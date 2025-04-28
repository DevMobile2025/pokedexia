import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', () => {
    const productsInCart = ref([{id: 0, amount: 3}, {id: 1, amount: 1}]);

    const amountItems = computed(() => productsInCart.value.length);

    const findIndexProduct = (productId) => {
        return productsInCart.value.findIndex((product) => product.id == productId);
    }
  
    const updateCard = (productId) => {
        const index = findIndexProduct(productId);
        console.log(index);
        if (index != -1) {
          productsInCart.value[index].amount++;
        }
        else {
            productsInCart.value.push({id: productId, amount: 1});
        }
    }

    const removeOneQuantity = (index) => {
        productsInCart.value[index].amount--;
    }

    const removeItem = (index) => {
        productsInCart.value.splice(index, 1);
    }
    

  return {
    productsInCart,
    amountItems,
    findIndexProduct,
    updateCard,
    removeOneQuantity,
    removeItem,
  }
})