import Vue from 'vue'
import VueRouter from 'vue-router'
import Details from "@/components/Details.vue";
import Board from "@/components/Board.vue";
import Boards from "@/components/Boards.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Boards,
  },
  {
    path: '/details/:id',
    component: Details,
  },
  {
    path: '/board/:id',
    component: Board,
    name: 'board',
    props: true
  },
  {
    path: '*',
    redirect: '/',
  },

]

const router = new VueRouter({
  routes
})

export default router
