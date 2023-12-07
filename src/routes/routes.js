import {createRouter, createWebHistory} from 'vue-router'
import SignUp from "@/components/auth/SignUp.vue";
import NotFound from '@/components/notfound/NotFound.vue'
import Home from "@/components/home/Home.vue";
import SignIn from "@/components/auth/SignIn.vue";
import AddRestaurant from "@/components/restaurant/AddRestaurant.vue"
import UpdateRestaurant from "@/components/restaurant/UpdateRestaurant.vue"


const routes = [
    {
        name: 'SignUp',
        path: '/sign-up',
        component: SignUp
    },  {
        name: 'SignIn',
        path: '/sign-in',
        component: SignIn
    }, {
        name: 'Home',
        path: '/',
        component: Home
    }, {
        name: 'AddRestaurant',
        path: '/add-restaurant',
        component: AddRestaurant
    }, {
        name: 'UpdateRestaurant',
        path: '/update-restaurant/:id',
        component: UpdateRestaurant
    },
    {
        name: 'NotFound',
        path: '/:notfound(.*)*',
        component: NotFound
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router
