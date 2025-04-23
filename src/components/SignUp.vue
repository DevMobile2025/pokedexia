<script setup>
import { reactive } from 'vue';

const emit = defineEmits(['confirmCadastro'])
const usuario = reactive({
  nick: '',
  email: '',
  senha: '',
  confirmSenha: '',
  termo: []
})
function confirmCadastro() {
  let error = false
  if (usuario.nick == '') {
    alert("Faltou o nickname")
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
  if (usuario.termo == ''){
    alert ("Termo de Uso não aceito")
  }


}
</script>

<template>
  <div class="Cadastro">
    <h1 class="title">Cadastre-se agora!</h1>
    <form @submit.prevent="confirmCadastro">
      <div class="campo">
        <label for="">Criar nickname:</label>
        <div class="linha">
          <input type="text" class="form-control" v-model="usuario.nome">
        </div>
      </div>
      <div class="campo">
        <label for="">Email:</label>
        <div class="linha">
          <input type="email" class="form-control" v-model="usuario.email" >
        </div>
      </div>
      <div class="campo">
        <label for="">Senha:</label>
        <div class="linha">
          <input type="passaword" class="form-control" v-model="usuario.senha" >
        </div>
      </div>
      <div class="campo">
        <label for="">Confirmar Senha:</label>
        <div class="linha">
          <input type="passaword" class="form-control" v-model="usuario.nome" >
        </div>
      </div>
      <div class="checkbox">
       <input type="checkbox" v-model="usuario.termo"> <p><a href="@/views/TermoView.vue">Li e concordo com os Termos de Uso</a></p>
      </div>

      <button type="submit">Criar Conta</button>
    </form>
  </div>
</template>

<style scoped></style>