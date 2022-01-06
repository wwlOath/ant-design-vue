import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/layouts/default.vue'

Vue.use(VueRouter)

let routes = [
  {
    path: '*',
    component: import('@/views/404.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/Home.vue')
      },
      {
        path: '/cartoon',
        name: 'cartoon',
        component: () => import(/* webpackChunkName: "about" */ '@/views/Cartoon.vue')
      },
      {
        path: '/cartoonDetail',
        name: 'cartoonDetail',
        component: () => import(/* webpackChunkName: "about" */ '@/views/cartoonDetail.vue')
      },
      {
        path: '/sign-in',
        name: 'sign-in',
        component: () => import(/* webpackChunkName: "about" */ '@/views/Sign-In.vue')
      },
      {
        path: '/sign-up',
        name: 'sign-up',
        component: () => import(/* webpackChunkName: "about" */ '@/views/Sign-Up.vue')
      },
    ]
  },

]

/*routes = routes.map((route) => {
 addLayoutToRoute(route);
})

function addLayoutToRoute(route, parentLayout = "defalult") {
  route.meta = route.meta || {};
  route.meta.layout = route.meta.layout || parentLayout;
  if(route.children) {
    route.children = route.children.map((val) => addLayoutToRoute(val,route.meta.layout));
  }
  return route;
}*/

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  /*scrollBehavior (to, from, savedPosition) {
    if ( to.hash ) {
      return {
        selector: to.hash,
        behavior: 'smooth',
      }
    }
    return {
      x: 0,
      y: 0,
      behavior: 'smooth',
    }
  }*/
})

export default router
