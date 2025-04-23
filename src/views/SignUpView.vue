<script setup>
import { reactive } from 'vue';
import SignUp from '@/components/SignUp.vue';

const usuario = reactive({
  nick: '',
  email: '',
  senha: '',
  confirmSenha: ''
  })

function salvarCadastro(novoCadastro) {
  Object.assign(usuario, novoCadastro)
  }
</script>
<template>

  <SignUp @confirmCadastro="salvarCadastro"/>

</template>

<style scoped></style>