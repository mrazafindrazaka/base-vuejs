<template>
    <div class="row text-center text-white bg-dark pt-3 pb-3">
        <div class="col-12">
            <h1>Exemple de page avec bootstrap</h1>
        </div>
        <div class="col-6">
            <button v-on:click="alert_message" type="button" class="btn btn-danger">Show alert</button>
        </div>
        <div class="col-6">
            <button v-on:click="axios_message" type="button" class="btn btn-success">Show alert with axios</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        methods: {
            alert_message: function () {
                this.$swal({
                    title: 'Message avec sweetalert2',
                    text: 'Tu aimes ça ?',
                    icon: 'question',
                    showCancelButton: true,
                    showCloseButton: true,
                    confirmButtonText: 'Oui',
                    cancelButtonText: 'Non'
                }).then((check) => {
                    if (check.value) {
                        this.$swal('Trop cool');
                    } else {
                        this.$swal('Dommage');
                    }
                });
            },
            axios_message: function () {
                const url = 'https://financialmodelingprep.com/api/v3/company/profile/AAPL';

                this.axios.get(url).then((response) => {
                    this.$swal("Voici le prix d'un " + response.data.symbol + " : " + response.data.profile.price);
                });
            }
        }
    }
</script>

<style scoped>

</style>
