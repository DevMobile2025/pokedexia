<script setup>
import { db } from "@/api/db.js";

function createURL(src) {
  const url = new URL(`../assets/images/` + src, import.meta.url).href;
  return url;
}
</script>

<template>
  <div>
    <div v-for="(pokemon, id) in db.pokemons" :key="id">
      <!-- {{ pokemon.image }} -->
      <img :src="createURL(pokemon.image)" alt="">
    </div>
  </div>
</template>

<style scoped>
</style>