import { defineStore } from "pinia";
import { useToast } from 'vue-toastification';

export const useToastStore = defineStore('toast', () => {
    const toast = useToast();

    function info(text) {
        toast.info(text);
    }

    function sucess(text) {
        toast.success(text);
    }

    function error(text) {
        toast.error(text);
    }

    return { toast, info, sucess, error }
})