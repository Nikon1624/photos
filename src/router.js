import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import store from '@/store/index';

import PhotosList from '@/components/PhotosList';
import UserPage from '@/components/UserPage';

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: PhotosList
        },
        {
            path: '/user/:id',
            component: UserPage,
            beforeEnter(to, from, next) {
                if (!store.getters['photos/getPhotos']) {
                    next('/');
                } else {
                    next();
                }
            }
        }
    ]
});