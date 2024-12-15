<template>
  <BaseLayout>
    <div class="space-y-6">
      <!-- Search and Filters -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Search careers..."
          class="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div class="mt-4 flex flex-wrap gap-2">
          <button
            class="px-4 py-2 bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300 transition duration-300"
          >
            Industry
          </button>
          <button
            class="px-4 py-2 bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300 transition duration-300"
          >
            Education Level
          </button>
          <button
            class="px-4 py-2 bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300 transition duration-300"
          >
            Skills
          </button>
        </div>
      </div>

      <!-- AI Job Suggestions -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4">AI Job Suggestions</h2>
        <div class="space-y-4">
          <div
            v-for="job in aiSuggestedJobs"
            :key="job.id"
            class="border-b pb-4"
          >
            <h3 class="text-xl font-semibold">{{ job.title }}</h3>
            <p class="text-gray-600">{{ job.company }}</p>
            <p class="mt-2">{{ job.description }}</p>
            <a href="#" class="text-blue-600 hover:underline mt-2 inline-block"
              >Learn more</a
            >
          </div>
        </div>
      </div>

      <!-- Education Timeline -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4">Education Timeline</h2>
        <div class="relative">
          <div class="absolute h-full w-0.5 bg-gray-200 left-6"></div>
          <ul class="space-y-6">
            <li
              v-for="event in educationTimeline"
              :key="event.id"
              class="ml-12"
            >
              <div class="flex items-center">
                <div
                  class="absolute left-4 w-4 h-4 bg-blue-500 rounded-full"
                ></div>
                <div class="font-semibold">{{ event.year }}</div>
              </div>
              <div class="mt-2">
                <h3 class="text-lg font-semibold">{{ event.title }}</h3>
                <p class="text-gray-600">{{ event.description }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from "../components/BaseLayout.vue";

export default {
  name: "CareerPath",
  components: {
    BaseLayout,
  },
  data() {
    return {
      aiSuggestedJobs: [
        {
          id: 1,
          title: "Software Engineer",
          company: "Tech Innovations Inc.",
          description:
            "Develop cutting-edge software solutions for various industries.",
        },
        {
          id: 2,
          title: "Data Scientist",
          company: "DataCrunch Analytics",
          description:
            "Analyze complex datasets to derive meaningful insights for business decisions.",
        },
        {
          id: 3,
          title: "UX Designer",
          company: "DesignMasters Co.",
          description:
            "Create intuitive and engaging user experiences for web and mobile applications.",
        },
      ],
      educationTimeline: [
        {
          id: 1,
          year: "2023",
          title: "Bachelor's Degree in Computer Science",
          description: "University of Technology",
        },
        {
          id: 2,
          year: "2025",
          title: "Master's Degree in Artificial Intelligence",
          description: "AI Institute",
        },
        {
          id: 3,
          year: "2026",
          title: "Professional Certification in Data Science",
          description: "DataTech Academy",
        },
      ],
    };
  },
};
</script>
