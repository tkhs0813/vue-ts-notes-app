import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase/app';
import Main from '../views/Main.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// router.beforeResolve((to, from, next) => {
//   console.log(to);
//   if (to.path === '/login') {
//     next();
//   } else {
//     firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//         console.log('認証中');
//         next();
//       } else {
//         console.log('未認証');
//         next({ path: '/login' });
//       }
//     });
//   }
// });

export default router;
