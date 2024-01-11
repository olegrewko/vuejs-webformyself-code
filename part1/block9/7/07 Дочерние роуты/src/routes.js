import VueRouter from 'vue-router'
import Home from './pages/Home'
import Cars from './pages/Cars'
import Car from './pages/Car'
import CarFull from './pages/CarFull'
import ErrorComp from './pages/Error'

export default new VueRouter({
  routes: [
    {
      path: '',
      component: Home
    },
    {
      path: '/cars',
      component: Cars
    },
    {
      path: '*',
      component: ErrorComp
    },
    {
      path: '/none',
      redirect: '/'
    },
    {
      path: '/car/:id',
      component: Car,
      children: [
        {
          path: 'full', // localhost:8080/car/10/full
          component: CarFull,
          name: 'carFull'
        }
      ]
    }
  ],
  mode: 'history',
    scrollBehavior (to, from, savePosition) {
    return {
      x: 0,
      y: 700
    }
  }
})
