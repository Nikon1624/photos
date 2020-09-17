import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import photos from '@/store/modules/photos';

export default new Vuex.Store({
    modules: {
        photos
    }
});