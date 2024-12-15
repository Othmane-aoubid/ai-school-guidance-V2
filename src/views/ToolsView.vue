<template>
  <BaseLayout>
    <div class="space-y-6">
      <!-- Resume Builder -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4">Resume Builder</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 class="text-lg font-semibold mb-2">Personal Information</h3>
            <form class="space-y-4">
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-700"
                  >Full Name</label
                >
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700"
                  >Email</label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  for="phone"
                  class="block text-sm font-medium text-gray-700"
                  >Phone</label
                >
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
            </form>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-2">Preview</h3>
            <div
              class="border border-gray-300 p-4 rounded-md h-64 overflow-y-auto"
            >
              <!-- Resume preview content goes here -->
              <p>
                Your resume preview will appear here as you fill out the form.
              </p>
            </div>
          </div>
        </div>
        <button
          class="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
          Generate Resume
        </button>
      </div>

      <!-- Mock Interviews -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4">Mock Interviews</h2>
        <div class="space-y-4">
          <div>
            <label
              for="job-title"
              class="block text-sm font-medium text-gray-700"
              >Job Title</label
            >
            <input
              type="text"
              id="job-title"
              name="job-title"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label
              for="industry"
              class="block text-sm font-medium text-gray-700"
              >Industry</label
            >
            <select
              id="industry"
              name="industry"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            >
              <option>Technology</option>
              <option>Finance</option>
              <option>Healthcare</option>
              <option>Education</option>
            </select>
          </div>
          <button
            class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
          >
            Start Mock Interview
          </button>
        </div>
      </div>

      <!-- Feedback Panel -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4">Feedback Panel</h2>
        <div class="space-y-4">
          <div class="bg-yellow-100 border-l-4 border-yellow-500 p-4">
            <p class="font-semibold">Improvement Area: Communication Skills</p>
            <p>
              Practice articulating your thoughts more clearly and concisely.
            </p>
          </div>
          <div class="bg-green-100 border-l-4 border-green-500 p-4">
            <p class="font-semibold">Strength: Technical Knowledge</p>
            <p>
              Your understanding of key concepts in your field is impressive.
            </p>
          </div>
          <div class="bg-blue-100 border-l-4 border-blue-500 p-4">
            <p class="font-semibold">Suggestion: Body Language</p>
            <p>Work on maintaining eye contact and using confident gestures.</p>
          </div>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from "../components/BaseLayout.vue";

export default {
  name: "Tools",
  components: {
    BaseLayout,
  },
};
</script>
