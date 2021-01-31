<template>
    <div class="container">
        <div class="d-flex justify-content-end p-4">
            <div class="btn-group" role="group" aria-label="">
                <button type="button" class="btn btn-primary" v-on:click.prevent="getPreviousProkemon()" :disabled="(pokemons.previous == null)">Atras</button>
                <button type="button" class="btn btn-primary" v-on:click.prevent="getNextProkemon()"  :disabled="(pokemons.next == null)">Adelante</button>
            </div>
        </div>
        <div class="row content-list">
            <router-link :to="{name:'pokemon', params: {id: index+1}}" v-for="(pokemon, index) in pokemons.results" :key="index">
                {{ pokemon.name }}
            </router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<style lang="scss">
    .content-list{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        grid-auto-rows: minmax(100px, auto);
        grid-gap: 1em;
        a{
            display: flex;
            justify-content: center;
            align-items: center;
            list-style-type: none;
            background-color: #38C172;
            color:white;
            cursor: pointer;
        }
    }
</style>
<script>
    export default {
        data(){
            return {
                pokemons: {},
            }
        },
        created(){
            this.getListPokemon()
        },
        methods: {
            async getListPokemon(){
                await axios.get('https://pokeapi.co/api/v2/pokemon/')
                .then((res) => {
                    this.pokemons = res.data
                })
            },
            async getNextProkemon(){
                await axios.get(this.pokemons.next)
                .then((res) => {
                    this.pokemons = res.data
                })
            },
            async getPreviousProkemon(){
                await axios.get(this.pokemons.previous)
                .then((res) => {
                    this.pokemons = res.data
                })
            }
        },
    }
</script>
