<template>
  <BaseLayout>
    <div class="space-y-6">
      <!-- Calendar View -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4">Study Timetable</h2>
        <!-- Placeholder for a calendar component -->
        <div class="border border-gray-300 p-4 rounded-md h-96">
          <p class="text-center text-gray-500">Calendar component goes here</p>
          <!-- You would integrate a full-featured calendar component here -->
        </div>
      </div>

      <!-- Add Study Session Form -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-4">Add Study Session</h3>
        <form @submit.prevent="addStudySession" class="space-y-4">
          <div>
            <label for="subject" class="block text-sm font-medium text-gray-700"
              >Subject</label
            >
            <input
              type="text"
              id="subject"
              v-model="newSession.subject"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label for="date" class="block text-sm font-medium text-gray-700"
              >Date</label
            >
            <input
              type="date"
              id="date"
              v-model="newSession.date"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label
              for="startTime"
              class="block text-sm font-medium text-gray-700"
              >Start Time</label
            >
            <input
              type="time"
              id="startTime"
              v-model="newSession.startTime"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label
              for="duration"
              class="block text-sm font-medium text-gray-700"
              >Duration (minutes)</label
            >
            <input
              type="number"
              id="duration"
              v-model="newSession.duration"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <button
            type="submit"
            class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            Add Session
          </button>
        </form>
      </div>

      <!-- Study Analytics -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-4">Study Analytics</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 class="text-lg font-medium mb-2">Time Allocation by Subject</h4>
            <canvas ref="timeAllocationChart"></canvas>
          </div>
          <div>
            <h4 class="text-lg font-medium mb-2">Study Streak</h4>
            <p class="text-3xl font-bold text-blue-600">7 days</p>
            <p class="text-sm text-gray-600">Keep it up! You're on a roll!</p>
          </div>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from "../components/BaseLayout.vue";
import Chart from "chart.js/auto";

export default {
  name: "StudyTimetable",
  components: {
    BaseLayout,
  },
  data() {
    return {
      newSession: {
        subject: "",
        date: "",
        startTime: "",
        duration: 60,
      },
      studySessions: [], // This would be populated with actual study session data
    };
  },
  mounted() {
    this.createTimeAllocationChart();
  },
  methods: {
    addStudySession() {
      // Here you would typically send this data to your backend
      this.studySessions.push({ ...this.newSession });
      // Reset the form
      this.newSession = {
        subject: "",
        date: "",
        startTime: "",
        duration: 60,
      };
      // You might want to update the calendar and charts here
    },
    createTimeAllocationChart() {
      new Chart(this.$refs.timeAllocationChart, {
        type: "pie",
        data: {
          labels: ["Math", "Science", "History", "Language", "Programming"],
          datasets: [
            {
              data: [30, 25, 20, 15, 10],
              backgroundColor: [
                "rgba(255, 99, 132, 0.8)",
                "rgba(54, 162, 235, 0.8)",
                "rgba(255, 206, 86, 0.8)",
                "rgba(75, 192, 192, 0.8)",
                "rgba(153, 102, 255, 0.8)",
              ],
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "bottom",
            },
          },
        },
      });
    },
  },
};
</script>
