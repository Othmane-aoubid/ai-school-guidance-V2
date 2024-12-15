<template>
  <BaseLayout>
    <div class="space-y-6">
      <!-- User Profile and Level -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <div class="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/100"
            alt="User Avatar"
            class="w-20 h-20 rounded-full"
          />
          <div>
            <h2 class="text-2xl font-semibold">John Doe</h2>
            <p class="text-gray-600">Level 5 Scholar</p>
          </div>
        </div>
        <div class="mt-4">
          <div class="text-sm font-medium text-gray-500">Experience</div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 mt-1">
            <div
              class="bg-blue-600 h-2.5 rounded-full"
              style="width: 70%"
            ></div>
          </div>
          <div class="text-sm text-gray-600 mt-1">
            3500 / 5000 XP to next level
          </div>
        </div>
      </div>

      <!-- Achievements -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-4">Achievements</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            v-for="achievement in achievements"
            :key="achievement.id"
            class="text-center"
          >
            <div class="bg-gray-100 rounded-full p-4 mb-2">
              <font-awesome-icon
                :icon="achievement.icon"
                class="text-3xl text-blue-600"
              />
            </div>
            <p class="font-medium">{{ achievement.name }}</p>
            <p class="text-sm text-gray-600">{{ achievement.description }}</p>
          </div>
        </div>
      </div>

      <!-- Leaderboard -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-4">Leaderboard</h3>
        <table class="w-full">
          <thead>
            <tr class="text-left text-gray-600 border-b">
              <th class="pb-2">Rank</th>
              <th class="pb-2">Name</th>
              <th class="pb-2">Level</th>
              <th class="pb-2">XP</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(user, index) in leaderboard"
              :key="user.id"
              class="border-b last:border-b-0"
            >
              <td class="py-2">{{ index + 1 }}</td>
              <td class="py-2">{{ user.name }}</td>
              <td class="py-2">{{ user.level }}</td>
              <td class="py-2">{{ user.xp }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Challenges -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-4">Daily Challenges</h3>
        <div class="space-y-4">
          <div
            v-for="challenge in dailyChallenges"
            :key="challenge.id"
            class="flex items-center justify-between"
          >
            <div>
              <p class="font-medium">{{ challenge.name }}</p>
              <p class="text-sm text-gray-600">{{ challenge.description }}</p>
            </div>
            <button
              class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
            >
              Complete
            </button>
          </div>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from "../components/BaseLayout.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrophy,
  faStar,
  faGraduationCap,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

library.add(faTrophy, faStar, faGraduationCap, faBook);

export default {
  name: "Gamification",
  components: {
    BaseLayout,
    FontAwesomeIcon,
  },
  data() {
    return {
      achievements: [
        {
          id: 1,
          name: "First Steps",
          description: "Complete your profile",
          icon: "trophy",
        },
        {
          id: 2,
          name: "Quick Learner",
          description: "Finish 5 courses",
          icon: "star",
        },
        {
          id: 3,
          name: "Scholar",
          description: "Maintain a 3.5 GPA",
          icon: "graduation-cap",
        },
        {
          id: 4,
          name: "Bookworm",
          description: "Read 20 articles",
          icon: "book",
        },
      ],
      leaderboard: [
        { id: 1, name: "Alice Smith", level: 8, xp: 8200 },
        { id: 2, name: "Bob Johnson", level: 7, xp: 7500 },
        { id: 3, name: "Charlie Brown", level: 7, xp: 7100 },
        { id: 4, name: "David Lee", level: 6, xp: 6800 },
        { id: 5, name: "Emma Davis", level: 6, xp: 6500 },
      ],
      dailyChallenges: [
        { id: 1, name: "Study Sprint", description: "Study for 2 hours today" },
        {
          id: 2,
          name: "Quiz Master",
          description: "Score 90% or higher on a practice quiz",
        },
        {
          id: 3,
          name: "Network Boost",
          description: "Connect with 2 new peers",
        },
      ],
    };
  },
};
</script>
