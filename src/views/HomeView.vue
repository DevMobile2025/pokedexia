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
  <main>
    <Carousel :items-to-show="1" :wrap-around="true" class="carousel-custom">
      <Slide>
        <div class="carousel-slide">
          <img src="@/assets/images/carrossel-1.png" alt="" class="sliderImage">
        </div>
      </Slide>
      <Slide>
        <div class="carousel-slide">
          <img src="@/assets/images/carrossel-2.png" alt="" class="sliderImage">
        </div>
      </Slide>
      <Slide>
        <div class="carousel-slide">
          <img src="@/assets/images/carrossel-3.png" alt="" class="sliderImage">
        </div>
      </Slide>
      <Slide>
        <div class="carousel-slide">
          <img src="@/assets/images/carrossel-4.png" alt="" class="sliderImage">
        </div>
      </Slide>
      <Slide>
        <div class="carousel-slide">
          <img src="@/assets/images/carrossel-5.png" alt="" class="sliderImage">
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>

    <h2 id="titulos">Cartas Pokemon</h2>
    <div class="mais-vendidas">
      <div class="carta">
        <div class="carta-img">
          <img src="@/assets/images/clefairy.jpeg" alt="" class="img-pokemon" />
        </div>
        <div class="nome-preco">
          <p class="nome">Clefairy</p>
          <p class="preco">R$ 450,00</p>
        </div>
        <div class="add-carrinho">
          <button>Adicionar ao carrinho</button>
        </div>
      </div>
      <div class="carta">
        <div class="carta-img">
          <img src="@/assets/images/clefairy.jpeg" alt="" class="img-pokemon" />
        </div>
        <div class="nome-preco">
          <p class="nome">Clefairy</p>
          <p class="preco">R$ 450,00</p>
        </div>
        <div class="add-carrinho">
          <button>Adicionar ao carrinho</button>
        </div>
      </div>
      <div class="carta">
        <div class="carta-img">
          <img src="@/assets/images/clefairy.jpeg" alt="" class="img-pokemon" />
        </div>
        <div class="nome-preco">
          <p class="nome">Clefairy</p>
          <p class="preco">R$ 450,00</p>
        </div>
        <div class="add-carrinho">
          <button>Adicionar ao carrinho</button>
        </div>
      </div>
      <div class="carta">
        <div class="carta-img">
          <img src="@/assets/images/clefairy.jpeg" alt="" class="img-pokemon" />
        </div>
        <div class="nome-preco">
          <p class="nome">Clefairy</p>
          <p class="preco">R$ 450,00</p>
        </div>
        <div class="add-carrinho">
          <button>Adicionar ao carrinho</button>
        </div>
      </div>
    </div>
    <h2 id="titulos">Filtrar por tipo:</h2>

    <div class="carrossel-tipos">
      <div class="underline"></div>

      <Carousel :items-to-show="5" :wrap-around="true" class="carousel-tipos">
        <Slide>
          <div class="tipo-bola" style="background-color: #5c5c70"></div>
        </Slide>
        <Slide>
          <div class="tipo-bola" style="background-color: #f5d547"></div>
        </Slide>
        <Slide>
          <div class="tipo-bola" style="background-color: #2589d6"></div>
        </Slide>
        <Slide>
          <div class="tipo-bola" style="background-color: #f44336"></div>
        </Slide>
        <Slide>
          <div class="tipo-bola" style="background-color: #ec8eff"></div>
        </Slide>
        <Slide>
          <div class="tipo-bola" style="background-color: #ff9900"></div>
        </Slide>
        <Slide>
          <div class="tipo-bola" style="background-color: #8baeff"></div>
        </Slide>
        <Slide>
          <div class="tipo-bola" style="background-color: #a8a77a"></div>
        </Slide>
        <Slide>
          <div class="tipo-bola" style="background-color: #c22e28"></div>
        </Slide>
        <Slide>
          <div class="tipo-bola" style="background-color: #7ac74c"></div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>

    <h3
      style="color: #470000;margin-left: 10vw;margin-top: 10vh;font-size: 1.5rem;font-family:ADLaM Display,sans-serif;">
      Mais vendidos</h3>

    <div class="mais-vendidas">
      <div class="carta">
        <div class="carta-img">
          <img src="@/assets/images/clefairy.jpeg" alt="" class="img-pokemon" />
        </div>
        <div class="nome-preco">
          <p class="nome">Clefairy</p>
          <p class="preco">R$ 450,00</p>
        </div>
        <div class="add-carrinho">
          <button>Adicionar ao carrinho</button>
        </div>
      </div>
      <div class="carta">
        <div class="carta-img">
          <img src="@/assets/images/clefairy.jpeg" alt="" class="img-pokemon" />
        </div>
        <div class="nome-preco">
          <p class="nome">Clefairy</p>
          <p class="preco">R$ 450,00</p>
        </div>
        <div class="add-carrinho">
          <button>Adicionar ao carrinho</button>
        </div>
      </div>
      <div class="carta">
        <div class="carta-img">
          <img src="@/assets/images/clefairy.jpeg" alt="" class="img-pokemon" />
        </div>
        <div class="nome-preco">
          <p class="nome">Clefairy</p>
          <p class="preco">R$ 450,00</p>
        </div>
        <div class="add-carrinho">
          <button>Adicionar ao carrinho</button>
        </div>
      </div>
      <div class="carta">
        <div class="carta-img">
          <img src="@/assets/images/clefairy.jpeg" alt="" class="img-pokemon" />
        </div>
        <div class="nome-preco">
          <p class="nome">Clefairy</p>
          <p class="preco">R$ 450,00</p>
        </div>
        <div class="add-carrinho">
          <button>Adicionar ao carrinho</button>
        </div>
      </div>
      <div class="carta">
        <div class="carta-img">
          <img src="@/assets/images/clefairy.jpeg" alt="" class="img-pokemon" />
        </div>
        <div class="nome-preco">
          <p class="nome">Clefairy</p>
          <p class="preco">R$ 450,00</p>
        </div>
        <div class="add-carrinho">
          <button>Adicionar ao carrinho</button>
        </div>
      </div>
      <div class="carta">
        <div class="carta-img">
          <img src="@/assets/images/clefairy.jpeg" alt="" class="img-pokemon" />
        </div>
        <div class="nome-preco">
          <p class="nome">Clefairy</p>
          <p class="preco">R$ 450,00</p>
        </div>
        <div class="add-carrinho">
          <button>Adicionar ao carrinho</button>
        </div>
      </div>
      <div class="carta">
        <div class="carta-img">
          <img src="@/assets/images/clefairy.jpeg" alt="" class="img-pokemon" />
        </div>
        <div class="nome-preco">
          <p class="nome">Clefairy</p>
          <p class="preco">R$ 450,00</p>
        </div>
        <div class="add-carrinho">
          <button>Adicionar ao carrinho</button>
        </div>
      </div>
      <div class="carta">
        <div class="carta-img">
          <img src="@/assets/images/clefairy.jpeg" alt="" class="img-pokemon" />
        </div>
        <div class="nome-preco">
          <p class="nome">Clefairy</p>
          <p class="preco">R$ 450,00</p>
        </div>
        <div class="add-carrinho">
          <button>Adicionar ao carrinho</button>
        </div>
      </div>
    </div>
    <div class="ver-mais">
      <button>Ver Mais...</button>
    </div>

    <h2 id="titulos">Pokemon do dia</h2>
    <div class="pokemon-dia">
      <div class="pokemon-day">
        <div class="pokemon-info">
          <h3>Pikachu #0025</h3>
          <p><strong>Tipo:</strong> Elétrico</p>
          <p><strong>Altura:</strong> 0,4 m</p>
          <p><strong>Peso:</strong> 6 kg</p>
          <button class="see-cards">Ver cartas...</button>
        </div>
        <div class="pokemon-image">
          <img src="@/assets/images/pikachu.png" alt="Pikachu" />
        </div>
      </div>
    </div>

    <div class="newsletter">
      <div class="chamado">
        <h3>Assine nossa newsletter e seja
          avisado das novidades!</h3>
        <div class="email">
          <i class="bi bi-envelope"></i><input type="email" placeholder="seu email...">
        </div>
      </div>
      <div class="pokemons">
        <img src="@/assets/images/pokemons.png" alt="">
      </div>
    </div>
    <!-- <div>
      <div v-for="(pokemon, id) in db.pokemons" :key="id">
       {{ pokemon.image }} 
        <img :src="createURL(pokemon.image)" alt="" />
      </div>
    </div>-->

  </main>

  <footer>
    <div class="footer-cima">
      <div class="left">
        <div class="title-footer">
          <h1>
            <strong>Poké<span id="dexia">dexia</span></strong>
          </h1>
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
          <img src="@/assets/images/pokebola.png" alt="" class="pokebola" />
        </div>
      </div>
    </div>
    <hr />
    <p>Copyright © 2025 Pokedexia. Todos os direitos reservados</p>
  </footer>
</template>

<style>
.email {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5vw;
  margin-top: 1vh;
}

.email i {
  font-size: 1.5rem;
  color: #fff;
}

.email input {
  border: none;
  padding-left: .5vw;
  background-color: #d9d9d9;
  width: 12vw;
  height: 5vh;
  border-radius: 2vw;
}

.pokemons {
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pokemons img {
  width: 230px;
  height: 230px;
  object-fit: contain;
  width: 100%;
}

.chamado {
  padding-left: 3vw;
  padding-right: 3vw;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.chamado h3 {
  font-family: 'Jockey One', sans-serif;
  font-size: 1.7vw;
  color: #d9d9d9;
  font-weight: 400;
}

.newsletter {
  margin-top: 20vh;
  height: 35vh;
  width: 70vw;
  margin-left: 15vw;
  margin-right: 15vw;
  border-radius: 2vw;
  background-color: #7a0000;
  display: flex;
  flex-direction: row;
  margin-bottom: 20vh;
}

.pokemon-dia {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5vh;
}

.pokemon-day {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #F8DD72;
  border: 5px solid #E39B00;
  border-radius: 2vw;
  padding: 20px;
  width: 60vw;
  height: 60vh;
}

.pokemon-info {
  height: 40vh;
  display: flex;
  flex-direction: column;
  font-family: 'ADLaM Display', sans-serif;

  justify-content: space-around;
}

.pokemon-info h3 {
  font-size: 2.3vw;
}

.pokemon-info p {
  font-size: 1.3vw;
}

.pokemon-image {
  background-color: #FFAE00;
  border-radius: 50%;
  width: 380px;
  height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pokemon-image img {
  width: 75%;
  height: 75%;
  object-fit: cover;
  position: relative;
  left: 1.2vw;
}

.pokemon-dia button {
  padding: 15px 30px;
  font-size: 24px;
  cursor: pointer;
  background-color: #E39B00;
  color: white;
  border: none;
  border-radius: 1vw;
  font-family: 'ADLaM Display', sans-serif;
}

.ver-mais {
  text-align: center;
  margin-bottom: 10vh;
}

.ver-mais button {
  padding: 15px 30px;
  font-size: 24px;
  cursor: pointer;
  background-color: #8b0000;
  color: white;
  border: none;
  border-radius: 10px;
  font-family: 'ADLaM Display', sans-serif;
  transition: background-color 0.3s;
}

.ver-mais button:hover {
  background-color: #7a0000;
}

.carrossel-tipos {
  margin-top: 5vh;
  text-align: center;
}

.filtrar-titulo {
  font-size: 2vw;
  font-family: 'ADLaM Display', sans-serif;
}

.carousel-tipos {
  width: 80%;
  margin: 0 auto;
}

.tipo-bola {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: auto;
}

.nome-preco {
  text-align: center;
  margin-top: 3.5%;
}

.nome {
  font-family: 'Actor', sans-serif;
  font-weight: 400;
  font-size: 1.2vw;
}

.preco {
  font-family: 'Actor', sans-serif;
  color: #bd0000;
  font-weight: 400;
  font-size: 1.2rem;
}

.img-pokemon {
  width: 212px;
  height: 296px;
}

.mais-vendidas {
  margin-top: 7vh;
  margin-bottom: 3vh;
  padding-left: 10vw;
  padding-right: 10vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}

.carta {
  width: 17vw;
  border-radius: 23px;
  margin-bottom: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d9d9d9;
  padding-top: 3vh;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding-bottom: 3vh;
}

.carta:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
  transform: translateY(-2px);
  transition: 0.3s;
}

#titulos {
  font-size: 2rem;
  font-family: 'ADLaM Display', sans-serif;
  text-decoration: underline #f50606 6px;
  margin-left: 10vw;
}

.add-carrinho {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.add-carrinho button {
  padding: 10px 20px;
  background-color: #7a0000;
  color: white;
  border: none;
  border-radius: 8px;
  font-family: 'ADLaM Display', sans-serif;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 1vh;

}

.add-carrinho button:hover {
  background-color: #5c0000;
}

main {
  background-color: #f7f7f7;
}

.carousel__prev svg,
.carousel__next svg {
  width: 30px;
  height: 30px;
}


.carousel__pagination {
  position: relative;
  bottom: 5vh;
  display: flex;
  justify-content: center;
  gap: 10px;
  padding-right: 45vw;

}

.carousel__pagination-button {
  width: 15px;
  height: 15px;
  background-color: #fff;
  border-radius: 50%;
  transition: background-color 0.3s;
}

.carousel__pagination-button:hover {
  background-color: #d9d9d9;
}

.carousel__pagination-button--active {
  width: 60px;
  background-color: #fff;
  border-radius: 1vw;
}


.carousel-custom .carousel__next,
.carousel-custom .carousel__prev {
  background-color: #ff8c9b;
  border: none;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8b0000;
  position: absolute;
  top: 50%;
  z-index: 2;
  transition: 0.3s;
}

.carousel__next {
  right: -50px;
}

.carousel__prev {
  left: -50px;
}

.carousel__next:hover,
.carousel__prev:hover {
  background-color: #fa7286;
}

.sliderImage {
  width: 100%;
  height: 100%;
  border-radius: 2vw;
  object-fit: cover;
}

.carousel-custom {
  position: relative;
  width: 88%;
  height: 50vh;
  margin: 5vh auto;
  overflow: visible;
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
  color: #d9d9d9;
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
    -2px -2px 0 #d9d9d9,
    2px -2px 0 #d9d9d9,
    -2px 2px 0 #d9d9d9,
    2px 2px 0 #d9d9d9,
    0px 2px 0 #d9d9d9,
    2px 0px 0 #d9d9d9,
    0px -2px 0 #d9d9d9,
    -2px 0px 0 #d9d9d9;
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
  font-family: 'ADLaM Display', system-ui;
  font-size: 2.25vw;
  font-weight: 400;
  color: #d9d9d9;
}

.contatos {
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: first baseline;
  gap: 1.5vh;
}

.contatos h4 {
  font-family: 'ADLaM Display', system-ui;
  font-size: 1.5vw;
  font-weight: 100;
  color: #d9d9d9;
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
  background-color: #d9d9d9;
  width: 150px;
  height: 150px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

footer {
  background-color: #b30000;
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
  font-size: 0.8vw;
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
  border-left: 2px solid #d9d9d9;
}

@media (max-width: 768px) {


  .newsletter {
    flex-direction: row;
    /* Itens lado a lado */
    justify-content: center;
    /* Centralizar */
    align-items: center;
    width: 90vw;
    margin: 10vh auto;
    gap: 2vw;
    /* Espaçamento entre os itens */
  }

  .newsletter .input-container {
    width: 60%;
    /* Tamanho menor do input */
    padding: 10px;
  }

  .newsletter input {
    width: 100%;
    padding: 8px 16px;
    font-size: 1.5vw;
    /* Tamanho adequado */
    border-radius: 1vw;
    background-color: #d9d9d9;
    font-family: 'Actor', sans-serif;
  }

  .pokemons {
    width: 45vw;
    
  }

  .pokemons img {
    width: 100%;
  }

  /* Ajustando o título da newsletter */
  .newsletter h3 {
    text-align: center;
    width: 100%;
    margin-bottom: 3vh;
    font-size: 1.3rem;
    color: #d9d9d9;
  }

  .pokemon-day {
    flex-direction: column;
    height: auto;
    width: 90vw;
    padding: 10px;
  }

  .pokemon-info h3,
  .pokemon-info p {
    font-size: 5vw;
  }

  .mais-vendidas {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 5vw;
    /* ou ajuste o valor conforme necessário */
  }

  .carta {
    width: 45%;
    /* duas cartas por linha (100% / 2 = 50%, mas com gap fica 45% para ajustes) */
    height: auto;
    /* ajuste a altura das cartas conforme necessário */
  }


  .sliderImage {
    object-fit: cover;
    background-color: red;
  }



  .add-carrinho button {
    padding: 8px 16px;
    /* Reduzindo o padding */
    font-size: 0.8rem;
    /* Diminuindo o tamanho da fonte */
    border-radius: 6px;
    /* Ajustando o border-radius */
  }


  /* Aumentando o tamanho do nome da carta e do preço */
  .nome {
    font-size: 2.4vw;
    /* Aumentando o tamanho do nome da carta */
  }



  .footer-cima {
    flex-direction: column;
    height: auto;
    padding: 5vh 5vw;
  }

  footer {
    height: 45vh;
  }

  .title-footer h1 {
    font-size: 5vw;
  }

  .footer-cima {
    display: flex;
    flex-direction: row;
  }

  .pokebola {
    height: 95%;
    width: 95%;
    object-fit: contain;
  }

  .contorno {
    background-color: #d9d9d9;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .center h2 {
    font-size: 3.5vw;
  }

  .contatos h4 {
    font-size: 2.5vw;
  }

  .contatos {
    margin-bottom: 5vh;
  }



  .carousel-slide {
    font-size: 1.5vw;
    /* Reduzindo o tamanho da fonte nos slides para telas menores */
    padding: 0 2vw;
    /* Adicionando um pouco de padding para dar espaço nos lados */
  }

  .carousel__pagination {
    display: none;
  }

  .carousel-custom {
    width: 87%;
    height: 26vh;
    margin: 5vh auto;
    position: relative;
  }

  .carousel-custom .carousel__next,
  .carousel-custom .carousel__prev {
    width: 60px;
    height: 60px;
    font-size: 18px;
    top: 50%;
    transform: translateY(-50%);
    background-color: #fa7286;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .carousel__next {
    right: -17px;
    /* Colocando o botão direito para fora do carrossel */
    position: absolute;
  }

  .carousel__prev {
    left: -17px;
    /* Colocando o botão esquerdo para fora do carrossel */
    position: absolute;
  }

  /* Mudança de cor ao passar o mouse */
  .carousel__next:hover,
  .carousel__prev:hover {
    background-color: #e46b7b;
    /* Cor de destaque ao passar o mouse */
  }

  .pokemon-dia {
    margin-top: 5vh;
    width: 100%;
  }

  .pokemon-day {
    flex-direction: row;
    /* Mudando para exibir lado a lado */
    align-items: center;
    justify-content: space-around;
    height: auto;
    width: 90vw;
    padding: 2vh 4vw;
    gap: 2vw;
    /* Ajuste do espaçamento */
  }

  .pokemon-info {
    height: auto;
    width: 45vw;
    /* Diminuindo para ficar proporcional */
    align-items: flex-start;
    text-align: left;
    gap: 0.5vh;
  }

  .pokemon-info h3 {
    font-size: 4vw;
  }

  .pokemon-info p {
    font-size: 3.5vw;
  }

  .pokemon-dia button {
    font-size: 3.5vw;
    padding: 6px 12px;
    border-radius: 2vw;
  }

  .pokemon-image {
    width: 40vw;
    /* Menor para ajustar lado a lado */
    height: 40vw;
  }

  .pokemon-image img {
    width: 70%;
    height: 70%;
    object-fit: cover;
    position: relative;
    left: 4vw;
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
    font-size: 1.7vw;
    font-weight: bold;
  }

  .title h1 {
    font-family: 'Jockey One', sans-serif;
    font-weight: 400;
    font-style: normal;
  }


  header i {
    font-size: 2.3vw;
  }

  .search-container {
    flex: 1;
    margin: 0 40px;
    max-width: 50vw;
  }

  .search-container input {
    width: 100%;
    padding: 10px 16px 10px 36px;
    border: 1px solid red;
    border-radius: 20px;
    outline: none;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }


  .user-options p {
    display: none;
  }




  .option {
    width: 6vw;
    display: flex;
    justify-content: space-around;
  }

  .linha-vertical {
    height: 2vh;
    border-left: 2px solid #d9d9d9;
  }
}
@media (max-width: 425px) {

/* Newsletter */
.newsletter {
  flex-direction: column;
  align-items: center;
  width: 90vw;
  margin: 5vh auto;
  gap: 2vh;
}

.newsletter .input-container {
  width: 90%;
  padding: 10px;
}

.newsletter input {
  width: 100%;
  padding: 10px 16px;
  font-size: clamp(0.9rem, 4vw, 1.1rem);
  border-radius: 1rem;
  background-color: #d9d9d9;
  font-family: 'Actor', sans-serif;
}

.newsletter h3 {
  text-align: center;
  width: 100%;
  font-size: 1.1rem;
  color: #d9d9d9;
  margin-bottom: 2vh;
}

/* Pokémons */
.pokemons {
  width: 90vw;
}

.pokemons img {
  width: 100%;
}

/* Cartas populares */
.mais-vendidas {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4vh;
}

.carta {
  width: 90%;
  height: auto;
}

.nome {
  font-size: clamp(1rem, 4vw, 1.2rem);
}

.add-carrinho button {
  padding: 8px 14px;
  font-size: clamp(0.9rem, 3.5vw, 1rem);
  border-radius: 6px;
}

/* Pokémon do Dia */
.pokemon-dia {
  margin-top: 5vh;
  width: 100%;
}

.pokemon-day {
  flex-direction: column;
  align-items: center;
  width: 90vw;
  padding: 2vh 4vw;
  gap: 3vh;
}

.pokemon-image {
  width: 60vw;
  height: 60vw;
}

.pokemon-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.pokemon-info {
  width: 90%;
  text-align: center;
  align-items: center;
  gap: 1vh;
}

.pokemon-info h3 {
  font-size: clamp(1.1rem, 5vw, 1.3rem);
}

.pokemon-info p {
  font-size: clamp(1rem, 4vw, 1.2rem);
}

.pokemon-dia button {
  font-size: clamp(1rem, 4vw, 1.1rem);
  padding: 6px 12px;
  border-radius: 10px;
}

/* Carousel */
.carousel-slide {
  font-size: 0.9rem;
  padding: 0 1rem;
}

.carousel__pagination {
  display: none;
}

.carousel-custom {
  width: 95%;
  height: 30vh;
  margin: 5vh auto;
  position: relative;
}

.carousel-custom .carousel__next,
.carousel-custom .carousel__prev {
  width: 40px;
  height: 40px;
  font-size: 14px;
  top: 50%;
  transform: translateY(-50%);
  background-color: #fa7286;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
}

.carousel__next {
  right: -10px;
}

.carousel__prev {
  left: -10px;
}

.carousel__next:hover,
.carousel__prev:hover {
  background-color: #e46b7b;
}

/* Header */
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.5vh 5vw;
  background-color: #f7f7f7;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: clamp(1.2rem, 4vw, 1.5rem);
  font-weight: bold;
}

header i {
  font-size: 6vw;
}

.search-container {
  flex: 1;
  max-width: 85vw;
  margin: 0 10px;
}

.search-container input {
  width: 100%;
  padding: 10px 16px 10px 36px;
  border: 1px solid red;
  border-radius: 20px;
  outline: none;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.user-options p {
  display: none;
}

.option {
  width: 8vw;
  display: flex;
  justify-content: center;
}

.linha-vertical {
  height: 2vh;
  border-left: 2px solid #d9d9d9;
}

/* Footer */
footer {
  height: auto;
  padding-bottom: 5vh;
}

.footer-cima {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4vh;
  padding: 5vh 5vw;
}

.title-footer h1 {
  font-size: clamp(1.5rem, 5vw, 2rem);
}

.pokebola {
  width: 90px;
  height: 90px;
  object-fit: contain;
}

.contorno {
  background-color: #d9d9d9;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.center h2 {
  font-size: clamp(1.1rem, 4vw, 1.4rem);
}

.contatos h4 {
  font-size: clamp(1rem, 3.5vw, 1.2rem);
}

.contatos {
  margin-bottom: 4vh;
  text-align: center;
}
.newsletter img {
    display: none;
  }

  .footer-cima > *:not(.left) {
    display: none;
  }

  .footer-cima {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 4vh 0;
  }

  footer hr {
    width: 80%;
    border: 1px solid #d9d9d9;
    margin: 2vh auto;
  }

  footer p {
    text-align: center;
    font-size: 0.9rem;
    color: #d9d9d9;
  }
  /* Deixa os botões de navegação maiores e mais afastados */

  .carrossel-tipos .carousel__next {
    right: -20px;
    position: absolute;
  }

  .carrossel-tipos .carousel__prev {
    left: -20px;
    position: absolute;
  }

  .tipo-bola{
    height: 50px;
    width: 50px;
  }
 
  /* Deixa as bolinhas de paginação menores e alinhadas */
  .carrossel-tipos .carousel__pagination-button,
  .carrossel-tipos .carousel__pagination .carousel__pagination-item {
    width: 8px;
    height: 8px;
    margin: 0 4px;
  }
}






</style>