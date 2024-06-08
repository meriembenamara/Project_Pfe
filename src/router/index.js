import { createRouter, createWebHistory } from 'vue-router'
import SignUpView from '@/views/SignUpView.vue'
import LogInView from '@/views/LogInView.vue' 
import navBar from '@/views/navBar.vue'
import GererProfil from '../views/GererProfil.vue'
import EssaiCode from '@/views/EssaiCode.vue'
import ForgetPassword from  '@/views/ForgetPassword.vue'
import NewPassword from '@/views/NewPassword.vue'
import history from '../components/historyPage.vue'
import feedback from '../components/feedbackPage.vue'
import help from '../components/helpPage.vue'
import home from '../components/homePage.vue'
import profile from '../components/profilePage.vue'
import FormCreation from '../pages/FormCreationPlan/formCreation.vue'
import FormCreationPlan from '../pages/FormCreationPlan/formCreationPlan.vue'
import SuiteFormCreation from '../pages/FormCreationPlan/suiteFormCreation.vue'
import SuiteFormCreation2 from '../pages/FormCreationPlan/suiteFormCreation2.vue'
import SuiteFormCreation3 from '../pages/FormCreationPlan/suiteFormCreation3.vue'
import SuiteFormCreation4 from '../pages/FormCreationPlan/suiteFormCreation4.vue'
import SuiteFormCreation5 from '../pages/FormCreationPlan/suiteFormCreation5.vue'
import PlanSelected from '../pages/FormEstimation/palnSelected.vue'
import EstimationParEtape from '../pages/FormEstimation/EstimationParEtape.vue'
import FormEstimationPlan from '../pages/FormEstimation/FormEstimationPlan.vue'
import Result from '../pages/FormCreationPlan/resultatVue.vue';
import FormGlobal from '../pages/FormEstimation/FormGlobal/FormGlobal.vue';
import Step1 from '../pages/FormData/stepOne.vue';

import Step2 from '../pages/FormData/stepTwo.vue';

import Step3 from '../pages/FormData/stepThree.vue';

import MultiStepForm from '../pages/FormData/MultiStepForm.vue';
import GlobalHome from '@/components/GlobalHome.vue';
import HeaderPage from '@/components/HeaderPage.vue';
import FooterPage from '@/components/FooterPage.vue';
import EstimatePlan from '@/components/EstimatePlan.vue';

import AboutPage from '@/components/AboutPage.vue';
import ProjectsPage from '@/components/ProjectsPage.vue';
import ServicesPage from '@/components/ServicesPage.vue';
import AvisPage from '@/components/AvisPage.vue';
const routes = [
  { path: '/', component: GlobalHome},
  { path: '/header', component: HeaderPage },
  { path: '/footer', component: FooterPage },
  { path: '/about', component: AboutPage },
  { path: '/projects', component: ProjectsPage },
  { path: '/services', component: ServicesPage },
  { path: '/avis', component: AvisPage },
  {
    path: '/estimateplan',
    name: 'EstimatePlan',
    component: EstimatePlan
  },
  {
    name: 'navBar',
      path: '/navbar',
      component: navBar,
      children: [
        {
          name: 'home',
          path: '/home',
          component:home
        },
        {
          name: 'PlanSelected',
          path: '/plan/:id',
          component:PlanSelected
        },
        {
          name: 'EstimationParEtape',
          path: '/estimationParEtape',
          component:EstimationParEtape
        },
        {
          name: 'profile',
          path: '/profile',
          component:profile
        },
        {
          name: 'history',
          path: '/history',
          component:history
        },
        {
          name: 'feedback',
          path: '/feedback',
          component:feedback
        },
        {
          name: 'help',
          path: '/help',
          component:help
        },
        {
          name: 'FormCreation',
          path: '/formCreation',
          component:FormCreation
        },
        {
          name: 'FormCreationPlan',
          path: '/formCreationPlan',
          component:FormCreationPlan
        },
        {
          name: 'SuiteFormCreation',
          path: '/SuiteFormCreation',
          component:SuiteFormCreation
        },
        {
          name: 'SuiteFormCreation2',
          path: '/SuiteFormCreation2',
          component:SuiteFormCreation2
        },
        {
          name: 'SuiteFormCreation3',
          path: '/SuiteFormCreation3',
          component:SuiteFormCreation3
        },
        {
          name: 'SuiteFormCreation4',
          path: '/SuiteFormCreation4',
          component:SuiteFormCreation4
        },
        {
          name: 'SuiteFormCreation5',
          path: '/SuiteFormCreation5',
          component:SuiteFormCreation5
        },
        {
          name: 'FormEstimationPlan',
          path: '/FormEstimationPlan',
          component:FormEstimationPlan
        },
        {
          name: 'Result',
          path: '/Result',
          component:Result
        },
        {
          name: 'Step1',
          path: '/step1',
          component:Step1
        },
        {
          name: 'Step2',
          path: '/step2',
          component:Step2
        },
        {
          name: 'Step3',
          path: '/step3',
          component:Step3
        },
        {
          name: 'MultiStepForm',
          path: '/MultiStepForm',
          component:MultiStepForm
        },
        {
          name: 'FormGlobal',
          path: '/FormGlobal',
          component:FormGlobal
        },
        
      ]
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
  }
    
  
    ]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router