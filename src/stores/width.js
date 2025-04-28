import { defineStore } from "pinia";
import { ref } from "vue";

export const useWidthStore   = defineStore('width', () => {
    const width = ref(0);

    return {
        width
    }
});