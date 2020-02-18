<template>
    <div class="row bg-dark text-white text-center">
        <div class="col-sm-12 vertical-center">
            Hello tu es dans le composant test :D ! <br/>
            <router-link class="btn btn-danger mt-3" :to="{ name: 'home'}">Retour à la page d'accueil</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Test"
    }
</script>

<style scoped>
    .row {
        height: 100vh;
    }

    .vertical-center {
        position: absolute;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }
</style>
