import { createRouter, createWebHistory } from "vue-router";
import UsersHomeView from '../modules/user/views/UsersPage.vue';
import UserCreate from "../modules/user/views/UserCreate.vue";
import NotFound from "../modules/user/views/NotFound.vue";
import ManageUser from "../modules/user/views/ManageUser.vue";


const routes = [

    {
        path: '/', component: UsersHomeView,        

    },
    { path: '/add-user', name: 'Add User', component: UserCreate },

    {path: '/manage-user/:id', name: 'Manage User', component: ManageUser},

    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

export const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})