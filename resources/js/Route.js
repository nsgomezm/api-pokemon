
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            name: 'pokemons',
            component: require('./components/Pokemons').default
        },
        {
            path: '/details/:id',
            name: 'pokemon',
            component: require('./components/Pokemon').default
        },
    ],
    // Quita el # de la ruta
    // mode: 'history'
})