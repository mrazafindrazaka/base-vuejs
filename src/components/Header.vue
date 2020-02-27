<template>
    <nav v-if="this.$store.getters.test !== 'test'" class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">écris test dans le composant test pour me faire disparaître :D</a>
    </nav>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>
