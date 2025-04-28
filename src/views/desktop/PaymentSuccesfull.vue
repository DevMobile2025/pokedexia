<script setup>
</script>

<template>
    <div class="container-sucessfull">
        <img class="gif" src="@/assets/gifs/sucess-one.gif" alt="">
        <h1 class="text">Pagamento concluído com sucesso</h1>
    </div>
</template>

<style scoped>
.container-sucessfull {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 80px;
}

.gif {
    width: 30vw;
}

.text {
    font-weight: 800;
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
}

@media (max-width: 1024px) {
    .gif {
        width: 50vw;
    }
}

@media (max-width: 768px) {
    .gif {
        width: 70vw;
    }
}

@media (max-width: 425px) {
    .gif {
        width: 100vw;
    }
    .text {
        font-size: 1.5rem;
        text-align: center;
    }
}
</style>