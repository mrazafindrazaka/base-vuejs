<template>
    <div class="row bg-dark text-white text-center">
        <div class="col-sm-6 p-5">
            <h1>Hello tu es dans le composant test :D !</h1>
            <router-link class="btn btn-danger mt-3" :to="{name: 'home'}">Retour à la page d'accueil</router-link>
        </div>
        <div class="col-sm-6 p-5">
            <label for="test">écrivez quelque chose</label>
            <input id="test" @input="changed" name="test">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Test",
        methods: {
            changed: function(event) {
                this.$store.commit('change', event.target.value);
            }
        }
    }
</script>

<style scoped>
    .row {
        height: 100vh;
    }
</style>
