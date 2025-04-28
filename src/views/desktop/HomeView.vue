<script setup>
import { db } from "@/api/db.js";
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