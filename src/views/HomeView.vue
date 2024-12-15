<template>
  <div class="bg-gray-100 min-h-screen">
    <!-- Header -->
    <header class="bg-white shadow-lg">
      <nav class="container mx-auto px-6 py-3 flex justify-between items-center">
        <div class="flex items-center">
          <img src="#" alt="AI School Guidance Logo" class="h-8 w-auto">
          <span class="ml-3 text-xl font-semibold text-gray-800">AI School Guidance</span>
        </div>
        <div class="hidden md:flex items-center space-x-4">
          <a href="#" class="text-gray-800 hover:text-gray-600">Home</a>
          <a href="#" class="text-gray-800 hover:text-gray-600">Features</a>
          <a href="#" class="text-gray-800 hover:text-gray-600">About</a>
          <a href="#" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Sign Up</a>
          <button
            @click="showLoginModal = true"
            class="bg-gray-100 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100 transition duration-300 border border-blue-500"
          >
            Login
          </button>
        </div>
      </nav>
    </header>

    <!-- Hero Section -->
    <section class="bg-blue-600 text-white py-20">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">Your Future Made Simple with AI School Guidance</h1>
        <p class="text-xl mb-8">Unlock your potential with personalized career recommendations and AI-powered tools.</p>
        <div class="flex justify-center space-x-4">
          <a href="#" class="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-300">Sign Up</a>
          <a href="#" class="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition duration-300">Learn More</a>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-semibold text-center text-gray-800 mb-8">Key Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <font-awesome-icon :icon="['fas', 'chart-line']" class="text-4xl text-blue-500 mb-4" />
            <h3 class="text-xl font-semibold mb-2">Personalized Career Recommendations</h3>
            <p class="text-gray-600">Get tailored career suggestions based on your skills, interests, and goals.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <font-awesome-icon :icon="['fas', 'robot']" class="text-4xl text-blue-500 mb-4" />
            <h3 class="text-xl font-semibold mb-2">AI-Powered Tools</h3>
            <p class="text-gray-600">Access cutting-edge AI tools for resume building, interview practice, and more.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <font-awesome-icon :icon="['fas', 'chart-pie']" class="text-4xl text-blue-500 mb-4" />
            <h3 class="text-xl font-semibold mb-2">Interactive Analytics</h3>
            <p class="text-gray-600">Visualize your progress and make data-driven decisions about your education.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto px-6">
        <div class="flex flex-wrap justify-between items-center">
          <div class="w-full md:w-1/3 text-center md:text-left">
            <h4 class="text-lg font-semibold mb-2">AI School Guidance</h4>
            <p class="text-sm">Empowering students for a brighter future.</p>
          </div>
          <div class="w-full md:w-1/3 text-center mt-4 md:mt-0">
            <div class="flex justify-center space-x-4">
              <a href="#" class="text-gray-400 hover:text-white transition duration-300">
                <font-awesome-icon :icon="['fab', 'facebook']" />
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition duration-300">
                <font-awesome-icon :icon="['fab', 'twitter']" />
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition duration-300">
                <font-awesome-icon :icon="['fab', 'linkedin']" />
              </a>
            </div>
          </div>
          <div class="w-full md:w-1/3 text-center md:text-right mt-4 md:mt-0">
            <a href="#" class="text-sm text-gray-400 hover:text-white mr-4">Privacy Policy</a>
            <a href="#" class="text-sm text-gray-400 hover:text-white">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>

    <!-- Login Modal -->
    <div v-if="showLoginModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white p-8 rounded-lg w-96">
        <h2 class="text-2xl font-semibold mb-4">Login</h2>
        <form @submit.prevent="login">
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input v-model="email" type="email" id="email" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input v-model="password" type="password" id="password" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
          </div>
          <div class="flex justify-end">
            <button @click="showLoginModal = false" type="button" class="mr-2 py-2 px-4 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">Cancel</button>
            <button type="submit" class="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">Login</button>
          </div>
        </form>
      </div>
    </div>

    <footer class="bg-white shadow-md mt-8">
      <div class="container mx-auto px-6 py-3 text-center text-gray-600">
        &copy; 2023 AI School Guidance. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script>
import { ref } from "vue";
import { useAuthStore } from "../store/auth";
import { useRouter } from "vue-router";

export default {
  name: "Home",
  setup() {
    const showLoginModal = ref(false);
    const router = useRouter();
    const authStore = useAuthStore();
    const email = ref("user@example.com");
    const password = ref("password123");
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
    return {
      showLoginModal,
      email,
      password,
      login,
    };
  },
};
</script>
