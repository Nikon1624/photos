import {HTTP} from '@/consts';

export default {
    namespaced: true,
    state: {
        photos: null
    },
    getters: {
        getPhotos(state) {
            return state.photos;
        },
        getUser: (state) => (id) => {
            return state.photos.find((photo) => photo.id === id);
        }
    },
    mutations: {
        setPhotos(state, photos) {
            state.photos = photos;
        }
    },
    actions: {
        fetchPhotos({commit}, page = 1) {
            return HTTP.get(`photos/?page=${page}`)
                .then((response) => {
                    commit('setPhotos', response.data);
                })
        }
    }
};