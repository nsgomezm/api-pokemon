<template>
    <div class="container">
        <router-link to="/">Listado de pokemons</router-link>
        <div class="card w-100">
            <div class="card-header">Pokemon: {{ pokemon.name }}</div>
            <div class="card-body">
                <div class="content-pokemon">
                    <div>
                        <ul class="list-group">
                            <li class="list-group-item active">Habilidades</li>
                            <li class="list-group-item" v-for="(ability, index) in pokemon.abilities" :key="index">
                                {{ability.ability.name}}
                            </li>
                        </ul>
                    </div>
                    <div>
                        <img :src="pokemon.sprites.back_default" alt="" v-if="pokemon.sprites">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    .content-pokemon{
        display: grid;
        grid-template-columns: 1fr 2fr;
        div:nth-child(2) {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>
<script>
    export default {
        data(){
            return{
                id: this.$root.$route.params.id,
                pokemon: {}
            }
        },
        created(){
            this.getPokemon()
        },
        mounted(){
            console.log(this.pokemon)
        },

        methods: {
            async getPokemon(){
                await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}/`)
                .then((res) => {
                    this.pokemon = res.data
                })
            }
        },
    }
</script>
