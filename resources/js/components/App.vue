<template>
    <div class="container">
        <div class="row justify-content-center">
            <!-- <div class="card-body"> -->
                <!-- <router-link :to="{name: 'pokemons'}">home</router-link> -->
                <!-- <router-link :to="{name: 'pokemon'}">otro</router-link> -->
            <!-- </div> -->
            <!-- <div > -->
                <router-view></router-view>
            <!-- </div> -->
            <!-- <div> -->

                <!-- {{users }} -->
            <!-- </div> -->
        </div>
    </div>
</template>

<script>
    export default {
        props:['users']
    }
</script>

<style lang="scss">
</style>