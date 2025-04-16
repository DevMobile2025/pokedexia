<script setup>
import { reactive } from 'vue';

const usuario = reactive({
  nick: '',
  email: '',
  senha: '',
  confirmSenha: ''
})
function confirmCadastro() {
  let error = false
  if (usuario.nome == '') {
    alert("Faltou o nome")
    error = true
  }
  if (usuario.email == '') {
    alert("Faltou o email")
    error = true
  }
  if (usuario.senha == '') {
    alert("Faltou a senha")
    error = true
  }
  if (usuario.confirmSenha == '') {
    alert("Faltou a confirmação de senha")
    error = true
  }
  if (usuario.senha !== usuario.confirmSenha) {
    alert("Senhas não conferem")
    error = true
  }


}
</script>

<template>
  <div class="Cadastro">
    <h1 class="title">Cadastre-se agora!</h1>
    <form @submit.prevent="confirmCadastro">
      <div class="campo">
        <label for="">Nick:</label>
        <div class="linha">
          <input type="text" class="form-control" v-model="usuario.nome" placeholder="Digite seu nick">
        </div>
      </div>
      <div class="campo">
        <label for="">Email:</label>
        <div class="linha">
          <input type="email" class="form-control" v-model="usuario.email" placeholder="Digite seu email">
        </div>
      </div>
      <div class="campo">
        <label for="">Senha:</label>
        <div class="linha">
          <input type="passaword" class="form-control" v-model="usuario.senha" placeholder="Digite sua senha">
        </div>
      </div>
      <div class="campo">
        <label for="">Confirme sua Senha:</label>
        <div class="linha">
          <input type="passaword" class="form-control" v-model="usuario.nome" placeholder="Confirme a senha">
        </div>
      </div>
      <button type="submit">Confirmar</button>
    </form>
  </div>
</template>

<style scoped>
</style>