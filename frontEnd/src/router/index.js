import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import Auth from '../views/AuthPage.vue'
import NewArticle from '../views/NewArticle.vue'
import NotFound from '../views/notFound.vue'
//import EditArticle from '../views/EditArticle.vue'
//import Article from '../views/Article.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/auth',
    name: 'auth',
    component: Auth

  },
  {
    path: '/new',
    name: 'NewArticle',
    component: NewArticle
  },
  {
    path: '/*',
    name: '404',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
