import { createRouter, createWebHistory } from 'vue-router'
import SignUpView from '@/views/SignUpView.vue'
import LogInView from '@/views/LogInView.vue' 
import UsersList from '@/views/UsersList.vue'
import PlansList from '@/views/PlansList.vue'
import FeedbackList from '@/views/FeedbackList.vue'
import GererProfil from '@/views/GererProfil.vue'
import EssaiCode from '@/views/EssaiCode.vue'
import ForgetPassword from  '@/views/ForgetPassword.vue'
import NewPassword from '@/views/NewPassword.vue'
import DashAdmin from '@/views/DashAdmin.vue'
import NavBar from '@/views/NavBar.vue'
import FeedbackUser from '@/views/FeedbackUser.vue'
import UserHistory from '@/views/UserHistory.vue'
import MessagesList from '@/views/MessagesList.vue'
import NotificationList from '@/views/NotificationList.vue'
import SideBar from '@/views/SideBar.vue';
const routes = [
  {
    path: '/Sidebar',
    name: 'Sidebar',
    component: SideBar
  },
  {
    path: '/essai',
    name: 'essai',
    component: EssaiCode
  },
  
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView
  },
  {
    path: '/login', 
    name: 'login',
    component: LogInView 
  },
  {
    path: '/NavBar', 
    name: 'NavBar',
    component: NavBar,
    meta: { requiresAuth: true, isAdmin: true } ,
    children:
    [
      {
        path: '/users',
        name: 'users',
        component: UsersList
      },
      {
        path: '/plans',
        name: 'plans',
        component: PlansList
      },
      {
        path: '/feedback',
        name: 'feedback',
        component: FeedbackList
      },
      {
        path: '/DashAdmin',
        name: 'DashAdmin',
        component: DashAdmin
      },
      {
        path: '/gererprofil',
        name: 'GererProfil',
        component: GererProfil
      },
      {
       // path: '/:userId/history',
       path: '/history/:userId',
      name: 'userHistory',
        component: UserHistory,
        props: true // Activer le passage automatique des props
    },
    {
      path: '/MessagesList',
      name: 'MessagesList',
      component: MessagesList
    },
    {
      path: '/NotificationList',
      name: 'NotificationList',
      component: NotificationList
    }


     
    ]
  },  

  {
    path: '/gererprofil',
    name: 'GererProfil',
    component: GererProfil
  },
  
  {
    path: '/ForgetPassword',
    name: 'ForgetPassword',
    component: ForgetPassword
  },
  {
    path: '/NewPassword',
    name: 'NewPassword',
    component: NewPassword
  },
  {
    path: '/FeedbackUser',
    name: 'FeedbackUser',
    component: FeedbackUser
  }
  
    ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!token) {
          next({ path: '/login' });
      } else {
          const user = JSON.parse(atob(token.split('.')[1]));
          if (to.meta.role && to.meta.role !== user.role) {
              next({ path: '/' });
          } else {
              next();
          }
      }
  } else {
      next();
  }
});

export default router