import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/Views/HomeView.vue";
import TechnicalView from "@/Views/technical/TechnicalView.vue";
import ProjectView from "@/Views/project/ProjectView.vue";
import IntegrationView from "@/Views/integration/IntegrationView.vue";
import Section from "@/components/Section.vue";
import IntegrationDetailView from "@/Views/integration/IntegrationDetailView.vue";
import ProjectDetailView from "@/Views/project/ProjectDetailView.vue";
import TechnicalDetailView from "@/Views/technical/TechnicalDetailView.vue";
import TechnicalBilanView from "@/Views/technical/TechnicalBilanView.vue";
import ProjectBilanView from "@/Views/project/ProjectBilanView.vue";
import IntegrationBilanView from "@/Views/integration/IntegrationBilanView.vue";


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
                component: TechnicalDetailView
            },
            {
                path: 'bilan',
                name: '',
                component: TechnicalBilanView
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
                component: ProjectDetailView
            },
            {
                path: 'bilan',
                name: '',
                component: ProjectBilanView
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
                component: IntegrationDetailView
            },
            {
                path: 'bilan',
                name: '',
                component: IntegrationBilanView
            },
        ]
    },

]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})


export default router
