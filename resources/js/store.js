require('es6-promise').polyfill();

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use( Vuex )

import { cafes } from './modules/cafes.js'

/*
  Exports our data store.
*/
export default new Vuex.Store({
    modules: {
        cafes
    }
});
