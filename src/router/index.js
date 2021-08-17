import Vue from 'vue'
import VueRouter from 'vue-router'
import TaskCreator from "@/components/TaskCreator.vue";
import Board from "@/components/Board.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/taskcreator',
    component: TaskCreator,
  },
   {
     path: '/board',
     component: Board,
  },
   {
    path: '*',
    redirect: '/board',
  }
]

const router = new VueRouter({
  routes
})

export default router
