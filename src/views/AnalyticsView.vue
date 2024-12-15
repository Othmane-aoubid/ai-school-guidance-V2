<template>
  <BaseLayout>
    <div class="space-y-6">
      <!-- Performance Metrics -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4">Performance Metrics</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 class="text-lg font-semibold mb-2">GPA Trend</h3>
            <canvas ref="gpaChart"></canvas>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-2">Skills Progress</h3>
            <canvas ref="skillsChart"></canvas>
          </div>
        </div>
      </div>

      <!-- Goal Tracking -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4">Goal Tracking</h2>
        <div class="space-y-4">
          <div v-for="goal in goals" :key="goal.id" class="flex items-center">
            <div class="w-full bg-gray-200 rounded-full h-2.5 mr-4">
              <div
                class="bg-blue-600 h-2.5 rounded-full"
                :style="{ width: `${goal.progress}%` }"
              ></div>
            </div>
            <span class="text-sm font-medium text-gray-700 w-32">{{
              goal.name
            }}</span>
            <span class="text-sm font-medium text-gray-500"
              >{{ goal.progress }}%</span
            >
          </div>
        </div>
      </div>

      <!-- Time Allocation -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4">Time Allocation</h2>
        <canvas ref="timeAllocationChart"></canvas>
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from "../components/BaseLayout.vue";
import Chart from "chart.js/auto";

export default {
  name: "Analytics",
  components: {
    BaseLayout,
  },
  data() {
    return {
      goals: [
        { id: 1, name: "Complete Python Course", progress: 75 },
        { id: 2, name: "Improve Public Speaking", progress: 60 },
        { id: 3, name: "Network with Professionals", progress: 40 },
      ],
    };
  },
  mounted() {
    this.createGPAChart();
    this.createSkillsChart();
    this.createTimeAllocationChart();
  },
  methods: {
    createGPAChart() {
      new Chart(this.$refs.gpaChart, {
        type: "line",
        data: {
          labels: ["Semester 1", "Semester 2", "Semester 3", "Semester 4"],
          datasets: [
            {
              label: "GPA",
              data: [3.2, 3.4, 3.6, 3.8],
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: false,
              min: 2.0,
              max: 4.0,
            },
          },
        },
      });
    },
    createSkillsChart() {
      new Chart(this.$refs.skillsChart, {
        type: "radar",
        data: {
          labels: [
            "Programming",
            "Data Analysis",
            "Problem Solving",
            "Communication",
            "Teamwork",
          ],
          datasets: [
            {
              label: "Current Skills",
              data: [70, 65, 80, 75, 85],
              fill: true,
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgb(75, 192, 192)",
              pointBackgroundColor: "rgb(75, 192, 192)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgb(75, 192, 192)",
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            r: {
              angleLines: {
                display: false,
              },
              suggestedMin: 0,
              suggestedMax: 100,
            },
          },
        },
      });
    },
    createTimeAllocationChart() {
      new Chart(this.$refs.timeAllocationChart, {
        type: "doughnut",
        data: {
          labels: ["Studying", "Projects", "Internship", "Extracurricular"],
          datasets: [
            {
              data: [40, 25, 20, 15],
              backgroundColor: [
                "rgba(255, 99, 132, 0.8)",
                "rgba(54, 162, 235, 0.8)",
                "rgba(255, 206, 86, 0.8)",
                "rgba(75, 192, 192, 0.8)",
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
