<script setup>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'


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
  <Carousel :items-to-show="1" :wrap-around="true" class="carousel-custom">
    <Slide>
      <div class="carousel-slide" style="background-color: red;">Slide Vermelho <!--<img src="@/assets/images/sliderImage.jpeg" alt="" class="sliderImage">--> </div>
    </Slide>
    <Slide>
      <div class="carousel-slide" style="background-color: green;">Slide Verde</div>
    </Slide>
    <Slide>
      <div class="carousel-slide" style="background-color: yellow;">Slide Amarelo</div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>



  <div>
    <div v-for="(pokemon, id) in db.pokemons" :key="id">
      <!-- {{ pokemon.image }} -->
      <img :src="createURL(pokemon.image)" alt="" />
    </div>
  </div>
  <footer>
    <div class="footer-cima">
      <div class="left">
        <div class="title-footer">
          <h1><strong>Poké<span id="dexia">dexia</span></strong> </h1>
        </div>
      </div>

      <div class="center">
        <h2>Entre em contato</h2>
        <div class="contatos">
          <h4 id="email">
            <i class="bi bi-envelope"></i>
            podexia@pokemon.com
          </h4>
          <h4>
            <i class="bi bi-telephone"></i>
            (47)91234-5678
          </h4>
        </div>

      </div>

      <div class="right">
        <div class="contorno">
          <img src="@/assets/images/pokebola.png" alt="hhhhhhhhhhh" class="pokebola">
        </div>

      </div>


    </div>
    <hr>
    <p>Copyright © 2025 Pokedexia. Todos os direitos reservados </p>
  </footer>
</template>

<style>
.carousel__next, .carousel__prev {
  background-color: #FF8C9B;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  transition: background-color 0.3s;
}

/* Botão da direita */
.carousel__next {
  right: -25px; /* Metade do botão para fora */
}

/* Botão da esquerda */
.carousel__prev {
  left: -25px; /* Metade do botão para fora */
}

.carousel__next:hover, .carousel__prev:hover {
  background-color: #ff6f84;
}

.sliderImage {
  width: 100%;
  height: 100%;
  border-radius: 2vw;
  object-fit: cover; /* Faz a imagem preencher sem distorcer feio */
}
.carousel-custom {
  position: relative;
  width: 88%;
  height: 53vh;
  margin: auto;
  overflow: visible; /* deixa visível o que passar */
}


.carousel-slide {
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 2vw;
  color: white;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  border-radius: 2vw;
}



footer hr {
  width: 45%;
  margin-bottom: 1vh;
}

footer p {
  color: #D9D9D9;
  font-family: 'Inter', sans-serif;
}

.footer-cima {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 35vh;
  width: 100%;
  padding-left: 7vw;
  padding-right: 7vw;
}

.left {
  height: 100%;
  width: 20vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title-footer {
  font-size: 1.7vw;
  font-weight: bold;
  text-shadow:
    -2px -2px 0 #D9D9D9,
    2px -2px 0 #D9D9D9,
    -2px 2px 0 #D9D9D9,
    2px 2px 0 #D9D9D9,
    0px 2px 0 #D9D9D9,
    2px 0px 0 #D9D9D9,
    0px -2px 0 #D9D9D9,
    -2px 0px 0 #D9D9D9;


}

.title-footer h1 {
  font-family: 'Jockey One', sans-serif;
  font-weight: 800;
  font-style: normal;

}

.center {

  height: 100%;
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5vh;

}

.center h2 {
  font-family: "ADLaM Display", system-ui;
  font-size: 2.25vw;
  font-weight: 400;
  color: #D9D9D9;
}

.contatos {
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: first baseline;
  gap: 1.5vh;
}

.contatos h4 {
  font-family: "ADLaM Display", system-ui;
  font-size: 1.73vw;
  font-weight: 100;
  color: #D9D9D9;
}

.contatos i {
  margin-right: 1vw;
}

#email {
  text-decoration: underline;
}

.right {
  height: 100%;
  width: 20vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pokebola {
  height: 95%;
  width: 95%;
  object-fit: contain;
}

.contorno {
  background-color: #D9D9D9;
  width: 150px;
  height: 150px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

footer {
  background-color: #B30000;
  height: 40vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

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

header i {
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

.option {
  width: 6vw;
  display: flex;
  justify-content: space-around;
}

.linha-vertical {
  height: 2vh;
  /*Altura da linha*/
  border-left: 2px solid #D9D9D9;
  /* Adiciona borda esquerda na div como ser fosse uma linha.*/

}
</style>
