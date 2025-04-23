<script setup>
import { db } from "@/api/db.js";

function createURL(src) {
  const url = new URL(`../assets/images/` + src, import.meta.url).href;
  return url;
}
</script>

<template>
  <header>
    <div class="titulo"><h1>Pokédexia</h1></div>
  </header>
  <div>
    <div v-for="(pokemon, id) in db.pokemons" :key="id">
      <!-- {{ pokemon.image }} -->
      <img :src="createURL(pokemon.image)" alt="">
    </div>
  </div>
  <footer>ooiiiii</footer>
</template>

<style scoped>
*{
  max-width: 100%;
}
header{
  width: 100vw;
  height: 10vh;
  background-color: red;
}
.titulo h1{
  font-family: "Jockey One", sans-serif;
  font-weight: 400;
  font-style: normal;
}
 footer{
  width: 100vw;
  height: 10vh;
  background-color: red;
}
</style>
