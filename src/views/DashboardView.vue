<template>
  <BaseLayout>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Quick Links -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4">Quick Links</h2>
        <ul class="space-y-2">
          <li>
            <a href="/career-path" class="text-blue-600 hover:underline"
              >Career Path</a
            >
          </li>
          <li>
            <a href="/analytics" class="text-blue-600 hover:underline"
              >Analytics</a
            >
          </li>
        </ul>
      </div>

      <!-- Progress Overview -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4">Progress Overview</h2>
        <ul class="space-y-2">
          <li class="flex items-center">
            <input type="checkbox" class="mr-2" checked disabled />
            <span class="line-through">Complete career assessment</span>
          </li>
          <li class="flex items-center">
            <input type="checkbox" class="mr-2" />
            <span>Update resume</span>
          </li>
          <li class="flex items-center">
            <input type="checkbox" class="mr-2" />
            <span>Practice interview skills</span>
          </li>
        </ul>
      </div>

      <!-- Notifications -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4">Notifications</h2>
        <ul class="space-y-4">
          <li class="flex items-start">
            <div class="bg-blue-100 rounded-full p-2 mr-3">
              <font-awesome-icon
                :icon="['fas', 'bell']"
                class="text-blue-500"
              />
            </div>
            <div>
              <p class="font-semibold">New career opportunity</p>
              <p class="text-sm text-gray-600">
                A new internship matching your profile is available.
              </p>
            </div>
          </li>
          <li class="flex items-start">
            <div class="bg-green-100 rounded-full p-2 mr-3">
              <font-awesome-icon
                :icon="['fas', 'check-circle']"
                class="text-green-500"
              />
            </div>
            <div>
              <p class="font-semibold">Goal achieved</p>
              <p class="text-sm text-gray-600">
                You've completed your weekly study goal!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from "../components/BaseLayout.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBell, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faBell, faCheckCircle);

export default {
  name: "Dashboard",
  components: {
    BaseLayout,
    FontAwesomeIcon,
  },
};
</script>
