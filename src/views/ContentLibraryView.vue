<template>
  <BaseLayout>
    <div class="space-y-6">
      <!-- Search Bar -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Search articles, videos, and webinars..."
          class="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <!-- Content Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="item in contentItems"
          :key="item.id"
          class="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img
            :src="item.image"
            :alt="item.title"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">{{ item.title }}</h3>
            <p class="text-gray-600 mb-4">{{ item.description }}</p>
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-500">{{ item.type }}</span>
              <button
                class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
              >
                View
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="flex justify-center mt-8">
        <button
          class="mx-1 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition duration-300"
        >
          &laquo; Previous
        </button>
        <button
          class="mx-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
          1
        </button>
        <button
          class="mx-1 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition duration-300"
        >
          2
        </button>
        <button
          class="mx-1 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition duration-300"
        >
          3
        </button>
        <button
          class="mx-1 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition duration-300"
        >
          Next &raquo;
        </button>
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from "../components/BaseLayout.vue";

export default {
  name: "ContentLibrary",
  components: {
    BaseLayout,
  },
  data() {
    return {
      contentItems: [
        {
          id: 1,
          title: "Introduction to Machine Learning",
          description:
            "Learn the basics of machine learning and its applications in various industries.",
          type: "Video",
          image: "https://via.placeholder.com/300x200?text=Machine+Learning",
        },
        {
          id: 2,
          title: "Effective Resume Writing",
          description:
            "Tips and tricks for crafting a compelling resume that stands out to employers.",
          type: "Article",
          image: "https://via.placeholder.com/300x200?text=Resume+Writing",
        },
        {
          id: 3,
          title: "Networking Strategies for Career Growth",
          description:
            "Learn how to build and leverage professional networks to advance your career.",
          type: "Webinar",
          image: "https://via.placeholder.com/300x200?text=Networking",
        },
        // Add more content items as needed
      ],
    };
  },
};
</script>
