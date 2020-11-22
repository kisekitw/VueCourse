import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamFooter.vue';
import UsersFooter from './pages/UserFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(_, _2, savedPosision) {
    // console.log(to, from, savedPosision);

    if (savedPosision) {
      return savedPosision;
    }
    return { left: 0, top: 0 };
  },
  routes: [
    {
      path: '/',
      redirect: '/teams'
    },
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
      // component: TeamsList,
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true
        }
      ]
    },
    {
      path: '/users',
      // component: UsersList
      components: { default: UsersList, footer: UsersFooter },
      beforeEnter(to, from, next) {
        console.log('user beforEnter');
        next();
      }
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
});

router.beforeEach(function(to, from, next) {
  console.log('Global beforeEach');
  console.log(to, from);

  if (to.meta.needsAuth) {
    console.log('Needs auth!');
    next();
  } else {
    next();
  }
});

router.afterEach(function(to, from) {
  // sending analytics data
  console.log('Global afterEach');
  console.log(to, from);
});

export default router;
