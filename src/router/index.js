import { createRouter, createWebHistory } from 'vue-router'
import SignUpView from '@/views/SignUpView.vue'
import LogInView from '@/views/LogInView.vue' 
import DashBoard from '@/views/DashBoard.vue'
import UsersList from '@/views/UsersList.vue'
import PlansList from '@/views/PlansList.vue'
import FeedbackList from '@/views/FeedbackList.vue'
import Navbar_Sidebar from '@/components/Navbar_Sidebar.vue'
import GererProfil from '@/views/GererProfil.vue'
import EssaiCode from '@/views/EssaiCode.vue'
import ForgetPassword from  '@/views/ForgetPassword.vue'
import NewPassword from '@/views/NewPassword.vue'


const routes = [
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
    path: '/dashboard', 
    name: 'dashboard',
    component: DashBoard
  },  
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
    path: '/gererprofil',
    name: 'GererProfil',
    component: GererProfil
  },
  
  {
    path: '/Navbar_Sidebar',
    name: 'Navbar_Sidebar',
    component: Navbar_Sidebar
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
  }


    ]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router