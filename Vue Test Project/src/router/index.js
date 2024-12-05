import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PaidView from '@/views/PaidView.vue'
import UnpaidView from "@/views/UnpaidView.vue";
import OverdueView from '@/views/OverdueView.vue'
import ViewProfiles from '@/views/ViewProfiles.vue';
import EditUser from '@/views/EditUser.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Paid',
      name: 'paid',
      component: PaidView
    },
    {
      path: '/Unpaid',
      name: 'unpaid',
      component: UnpaidView
    },
    {
      path: '/Overdue',
      name: 'overdue',
      component: OverdueView
    },
    {
      path: '/viewProfiles/:id',
      name: 'viewprofiles',
      component: ViewProfiles
    },
    {
      path: '/editUser/:id',
      name: 'editUser',
      component: EditUser
    }

  ]
})

export default router
