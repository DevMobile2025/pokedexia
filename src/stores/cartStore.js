import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { useToastStore } from '@/stores';

export const useCartStore = defineStore('cart', () => {
    const productsInCart = ref([]);
    const toastStore = useToastStore();

    const amountItems = computed(() => productsInCart.value.length);

    const findIndexProduct = (productId) => {
        return productsInCart.value.findIndex((product) => product.id == productId);
    }
  
    const updateCard = (productId) => {
        const index = findIndexProduct(productId);
        console.log(index);
        if (index != -1) {
          productsInCart.value[index].amount++;
          toastStore.sucess(`Quantidade do produto aumentada para ${productsInCart.value[index].amount} com sucesso!`)
        }
        else {
            productsInCart.value.push({id: productId, amount: 1});
            toastStore.sucess("Produto adicionado ao carrinho com sucesso!")
        }
    }

    const removeOneQuantity = (index) => {
        productsInCart.value[index].amount--;
    }

    const removeItem = (index) => {
        productsInCart.value.splice(index, 1);
        toastStore.sucess("Produto removido com sucesso!");
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