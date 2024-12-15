<template>
  <div class="flex h-screen w-full bg-gray-100">
    <!-- Sidebar -->
    <aside
      :class="{
        'transform -translate-x-full md:-translate-x-full': !isSidebarOpen,
        'transform translate-x-0': isSidebarOpen
      }"
      class="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 md:relative transition duration-200 ease-in-out z-40"
    >
      <nav>
        <a 
          href="/dashboard" 
          class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          Dashboard
        </a>
        <a 
          href="/career-path" 
          class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          Career Path
        </a>
        <a 
          href="/analytics" 
          class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          Analytics
        </a>
        <a 
          href="/tools" 
          class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          Tools
        </a>
        <a 
          href="/content-library" 
          class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          Content Library
        </a>
        <a 
          href="/ai-chat-support" 
          class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          AI Chat Support
        </a>
        <a 
          href="/study-timetable" 
          class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          Study Timetable
        </a>
        <a 
          href="/gamification" 
          class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          Gamification
        </a>
      </nav>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col overflow-hidden" >
      <!-- Header -->
      <header class="bg-white shadow-lg h-16 flex items-center justify-between z-50 relative">
        <div class="flex items-center px-4 ">
          <!-- Mobile menu button -->
          <button
            @click="toggleSidebar"
            class="text-gray-500 focus:outline-none focus:text-gray-700 z-50"
          >
            <svg class="h-6 w-6 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 class="text-xl font-semibold text-gray-700 ml-4">AI School Guidance</h1>
        </div>
        <div class="flex items-center pr-4 ">
          <button class="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <button class="ml-4 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
            <img class="h-8 w-8 rounded-full" src="https://via.placeholder.com/40" alt="User profile" />
          </button>
        </div>
      </header>

      <!-- Page Content -->
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200" :class="{'w-full': !isSidebarOpen}">
        <div class="container mx-auto px-6 py-8">
          <slot></slot>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseLayout',
  data() {
    return {
      isSidebarOpen: false
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
  }
};
</script>

<style>
/* Ensure the burger menu button remains visible */
header button {
  z-index: 50;
}
</style>
