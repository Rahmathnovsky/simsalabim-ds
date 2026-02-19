import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Landing',
        component: () => import('./views/LandingPage.vue')
    },
    {
        path: '/admin',
        name: 'Admin',
        component: () => import('./views/admin/AdminLayout.vue'),
        children: [
            {
                path: '',
                name: 'AdminDashboard',
                component: () => import('./views/admin/AdminDashboard.vue')
            },
            {
                path: 'hero',
                name: 'AdminHero',
                component: () => import('./views/admin/AdminHero.vue')
            },
            {
                path: 'services',
                name: 'AdminServices',
                component: () => import('./views/admin/AdminServices.vue')
            },
            {
                path: 'portfolio',
                name: 'AdminPortfolio',
                component: () => import('./views/admin/AdminPortfolio.vue')
            },
            {
                path: 'team',
                name: 'AdminTeam',
                component: () => import('./views/admin/AdminTeam.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
