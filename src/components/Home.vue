<template>
    <div class="row text-center text-white bg-dark pt-3 pb-3">
         <div class="col-12">
                <h1>Exemple de page avec bootstrap</h1>
            </div>
            <div class="col-12 mt-3">
                <button v-on:click="alert_message" type="button" class="btn btn-danger">Show alert</button>
                <button v-on:click="axios_message" type="button" class="btn btn-success mr-3 ml-3">Show alert with
                    axios
                </button>
                <button v-on:click="gototest" type="button" class="btn btn-info">Go to test</button>
            </div>
    </div>
</template>

<script>
    import router from "../../config/router";

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
            },
            gototest: function () {
                router.push({name: "test"});
            }
        }
    }
</script>

<style scoped>

</style>
