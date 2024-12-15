<template>
  <div id="app" class="min-h-screen bg-gray-100">
    

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "./store/auth";

export default {
  name: "App",
  setup() {
    const router = useRouter();
    const authStore = useAuthStore();

    const sidebarOpen = ref(true);
    const showLoginModal = ref(false);
    const email = ref("");
    const password = ref("");

    const isAuthenticated = computed(() => authStore.isAuthenticated);

    const routes = [
      { path: "/", name: "Home" },
      { path: "/dashboard", name: "Dashboard" },
      { path: "/career-path", name: "Career Path" },
      { path: "/analytics", name: "Analytics" },
      { path: "/tools", name: "Tools" },
      { path: "/content-library", name: "Content Library" },
      { path: "/ai-chat-support", name: "AI Chat Support" },
      { path: "/study-timetable", name: "Study Timetable" },
      { path: "/gamification", name: "Gamification" },
    ];

    const toggleSidebar = () => {
      sidebarOpen.value = !sidebarOpen.value;
    };

    const login = async () => {
      try {
        const success = await authStore.login(email.value, password.value);
        if (success) {
          showLoginModal.value = false;
          router.push("/dashboard");
        } else {
          // Handle login error (e.g., show error message to user)
          console.error("Login failed:", authStore.error);
        }
      } catch (error) {
        console.error("Login failed:", error);
      }
    };

    const logout = async () => {
      try {
        await authStore.logout();
        router.push("/");
      } catch (error) {
        console.error("Logout failed:", error);
        // Handle logout error
      }
    };

    return {
      sidebarOpen,
      showLoginModal,
      email,
      password,
      isAuthenticated,
      routes,
      toggleSidebar,
      login,
      logout,
    };
  },
};
</script>
