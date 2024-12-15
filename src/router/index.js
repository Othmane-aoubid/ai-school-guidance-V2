import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Dashboard from "../views/DashboardView.vue";
import CareerPath from "../views/CareerPathView.vue";
import Analytics from "../views/AnalyticsView.vue";
import Tools from "../views/ToolsView.vue";
import ContentLibrary from "../views/ContentLibraryView.vue";
import AIChatSupport from "../views/AIChatSupportView.vue";
import StudyTimetable from "../views/StudyTimetableView.vue";
import Gamification from "../views/GamificationView.vue";
import { useAuthStore } from "../store/auth";

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: { requiresAuth: false }
    },
    {
      path: '/career-path',
      name: 'CareerPath',
      component: CareerPath,
      meta: { requiresAuth: false }
    },
    {
      path: '/analytics',
      name: 'Analytics',
      component: Analytics,
      meta: { requiresAuth: false }
    },
    {
      path: '/tools',
      name: 'Tools',
      component: Tools,
      meta: { requiresAuth: false }
    },
    {
      path: '/content-library',
      name: 'ContentLibrary',
      component: ContentLibrary,
      meta: { requiresAuth: false }
    },
    {
      path: '/ai-chat-support',
      name: 'AIChatSupport',
      component: AIChatSupport,
      meta: { requiresAuth: false }
    },
    {
      path: '/study-timetable',
      name: 'StudyTimetable',
      component: StudyTimetable,
      meta: { requiresAuth: false }
    },
    {
      path: '/gamification',
      name: 'Gamification',
      component: Gamification,
      meta: { requiresAuth: false }
    }
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  router.beforeEach((to, from, next) => {
    const authStore = useAuthStore()
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  
    if (requiresAuth && !authStore.isAuthenticated) {
      next('/')
    } else {
      next()
    }
  })
  
  export default router