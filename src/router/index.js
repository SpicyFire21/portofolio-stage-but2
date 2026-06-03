import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/Views/HomeView.vue";
import TechnicalView from "@/Views/TechnicalView.vue";
import ProjectView from "@/Views/ProjectView.vue";
import IntegrationView from "@/Views/IntegrationView.vue";
import Section from "@/components/Section.vue";


const routes =[
    {
        path: '/',
        name: '',
        component: HomeView
    },
    {
        path: '/tech',
        name: '',
        component: TechnicalView,
        children:[
            {
                path: ':nameTrace',
                name: '',
                component: Section
            },
        ]
    },
    {
        path: '/proj',
        name: '',
        component: ProjectView,
        children:[
            {
                path: ':nameTrace',
                name: '',
                component: Section
            },
        ]
    },
    {
        path: '/integration',
        name: '',
        component: IntegrationView,
        children:[
            {
                path: ':nameTrace',
                name: '',
                component: Section
            },
        ]
    },

]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})


export default router
