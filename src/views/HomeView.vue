<script setup>
import { db } from '@/api/db.js'

function createURL(src) {
  const url = new URL(`../assets/images/` + src, import.meta.url).href
  return url
}
</script>

<template>
  <header>
    <div class="title">
      <h1>Poké<span id="dexia">dexia</span></h1>
    </div>

    <!-- Barra de busca -->
    <div class="search-container">
      <input type="text" />
      <i class="bi bi-search search-icon"></i>
    </div>

    <!-- Ícones de conta e carrinho -->
    <div class="user-options">
      <div class="option">
        <i class="bi bi-person"></i>
        <p>Sua Conta</p>
      </div>
      <div class="linha-vertical"></div>
      <div class="option">
        <i class="bi bi-cart"></i>
        <p>Carrinho</p>
      </div>
    </div>
  </header>
  <div>
    <div v-for="(pokemon, id) in db.pokemons" :key="id">
      <!-- {{ pokemon.image }} -->
      <img :src="createURL(pokemon.image)" alt="" />
    </div>
  </div>
  <footer>ooiiiii</footer>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: sans-serif;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.5vh 6vw;
  background-color: #f7f7f7;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 1.3vw;
  font-weight: bold;
 /* -webkit-text-stroke-width: 2px;
-webkit-text-stroke-color: #000;*/
}

.title h1 {
  font-family: 'Jockey One', sans-serif;
  font-weight: 400;
  font-style: normal;
}

#dexia {
  color: red;
}

i {
  color: red;
  font-size: 1.3vw;
}

.search-container {
  flex: 1;
  max-width: 600px;
  margin: 0 40px;
  position: relative;
}

.search-container input {
  width: 100%;
  padding: 10px 16px 10px 36px;
  border: 1px solid red;
  border-radius: 20px;
  outline: none;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: red;
  font-size: 16px;
}

.user-options {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1vw;
  font-size: .8vw;
  color: black;
  font-family: 'Actor', sans-serif;
  font-weight: 400;
}

.user-options div {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
}

.user-options div:hover {
  color: red;
}

.option{
  width: 6vw;
  display: flex;
  justify-content: space-around;
}
.linha-vertical {
  height: 2vh;/*Altura da linha*/
  border-left: 2px solid #D9D9D9;/* Adiciona borda esquerda na div como ser fosse uma linha.*/
  
}
</style>
