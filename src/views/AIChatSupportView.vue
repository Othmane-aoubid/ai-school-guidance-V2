<template>
  <BaseLayout>
    <div class="flex h-[calc(100vh-4rem)]">
      <!-- Chat Interface -->
      <div
        class="flex-1 flex flex-col bg-white rounded-lg shadow-md overflow-hidden"
      >
        <!-- Chat Messages -->
        <div class="flex-1 p-4 overflow-y-auto">
          <div
            v-for="message in chatMessages"
            :key="message.id"
            :class="[
              'mb-4',
              message.sender === 'ai' ? 'text-left' : 'text-right',
            ]"
          >
            <div
              :class="[
                'inline-block p-3 rounded-lg',
                message.sender === 'ai' ? 'bg-blue-100' : 'bg-green-100',
              ]"
            >
              {{ message.text }}
            </div>
          </div>
        </div>

        <!-- Chat Input -->
        <div class="border-t p-4">
          <form @submit.prevent="sendMessage" class="flex">
            <input
              v-model="newMessage"
              type="text"
              placeholder="Type your message..."
              class="flex-1 px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              class="px-6 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      <!-- Quick Actions Sidebar -->
      <div class="w-64 bg-gray-100 p-4 overflow-y-auto">
        <h3 class="text-lg font-semibold mb-4">Quick Actions</h3>
        <div class="space-y-2">
          <button
            @click="quickAction('career')"
            class="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            Career Advice
          </button>
          <button
            @click="quickAction('resume')"
            class="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            Resume Help
          </button>
          <button
            @click="quickAction('interview')"
            class="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            Interview Tips
          </button>
          <button
            @click="quickAction('skills')"
            class="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            Skill Development
          </button>
        </div>

        <h3 class="text-lg font-semibold mt-8 mb-4">Contextual Tips</h3>
        <div class="bg-yellow-100 p-4 rounded-md">
          <p class="text-sm">
            Tip: Be specific about your goals and challenges when asking for
            advice. This helps the AI provide more targeted and useful
            responses.
          </p>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from "../components/BaseLayout.vue";

export default {
  name: "AIChatSupport",
  components: {
    BaseLayout,
  },
  data() {
    return {
      chatMessages: [
        { id: 1, sender: "ai", text: "Hello! How can I assist you today?" },
      ],
      newMessage: "",
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim()) {
        this.chatMessages.push({
          id: this.chatMessages.length + 1,
          sender: "user",
          text: this.newMessage,
        });
        this.newMessage = "";
        // Simulate AI response (replace with actual AI integration)
        setTimeout(() => {
          this.chatMessages.push({
            id: this.chatMessages.length + 1,
            sender: "ai",
            text: "Thank you for your message. I'm processing your request and will respond shortly.",
          });
        }, 1000);
      }
    },
    quickAction(action) {
      let message = "";
      switch (action) {
        case "career":
          message = "I need advice on choosing a career path.";
          break;
        case "resume":
          message = "Can you help me improve my resume?";
          break;
        case "interview":
          message = "What are some tips for successful job interviews?";
          break;
        case "skills":
          message = "How can I develop skills that are in high demand?";
          break;
      }
      this.chatMessages.push({
        id: this.chatMessages.length + 1,
        sender: "user",
        text: message,
      });
      // Simulate AI response (replace with actual AI integration)
      setTimeout(() => {
        this.chatMessages.push({
          id: this.chatMessages.length + 1,
          sender: "ai",
          text: `I'd be happy to help you with ${action}. Let's discuss this in more detail.`,
        });
      }, 1000);
    },
  },
};
</script>
