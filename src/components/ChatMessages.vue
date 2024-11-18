<template>
  <div class="min-h-screen flex bg-gray-100 w-full max-w-screen-xl mx-auto">
    <div
      class="flex-grow flex flex-col bg-white border-l border-gray-200 overflow-hidden"
    >
      <header
        class="w-full p-4 flex items-center justify-between border-b border-gray-200"
        style="background: #0056b3"
      >
        <div class="flex items-center space-x-4">
          <h1 class="text-white text-3xl font-semibold cursor-pointer">
            {{ username }}
          </h1>
        </div>
        <div class="flex items-center space-x-4">
          <!-- Buttons -->
        </div>
      </header>

      <!-- Chat Messages -->
      <div
        class="flex-grow p-4 overflow-y-auto max-h-[calc(100vh-128px)]"
        ref="chatContainer"
      >
        <div class="space-y-4">
          <div v-for="(msg, index) in messages" :key="msg.message_id">
            <div
              v-if="shouldShowDate(index)"
              class="text-center text-gray-500 text-lg mb-2"
            >
              {{ formatDate(msg.date) }}
            </div>
            <div
              :class="{
                'text-right': msg.sender_id === currentUserId,
                'text-left': msg.sender_id !== currentUserId,
              }"
              class="flex items-start space-x-2"
            >
              <div v-if="msg.sender_id === currentUserId" class="ml-auto">
                <div
                  class="text-white p-3 rounded-lg max-w-xs break-words relative text-lg"
                  style="
                    background: linear-gradient(to right, #4e54c8, #8f94fb);
                  "
                >
                  {{ msg.text }}
                  <div
                    class="text-xs text-gray-200 mt-1 flex justify-end items-center space-x-2"
                  >
                    <span>{{ formatTime(msg.time) }}</span>
                    <i
                      :class="{
                        'fas fa-check': msg.status === 'sent',
                        'fas fa-check-double text-gray-400':
                          msg.status === 'delivered',
                        'fas fa-check-double text-blue-500':
                          msg.status === 'read',
                      }"
                    ></i>
                  </div>
                </div>
              </div>
              <div v-else class="mr-auto rounded-lg">
                <div
                  class="bg-gray-200 text-gray-700 p-3 rounded-lg max-w-xs break-words relative text-lg"
                >
                  {{ msg.text }}
                  <div class="text-xs text-gray-500 mt-1">
                    <span>{{ formatTime(msg.time) }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer - Input Area -->
      <footer
        class="bg-white p-4 flex items-center border-t border-gray-200 shadow-md space-x-4"
      >
        <button
          class="text-gray-500 hover:text-blue-500 transition duration-300"
          @click="handleClick"
        >
          <i class="fas fa-smile text-xl"></i>
        </button>
        <button
          class="text-gray-500 hover:text-blue-500 transition duration-300"
          @click="handleClick"
        >
          <i class="fas fa-paperclip text-xl"></i>
        </button>
        <button
          class="text-gray-500 hover:text-blue-500 transition duration-300"
          @click="handleClick"
        >
          <i class="fas fa-camera text-xl"></i>
        </button>

        <!-- Message Input and Send Button -->
        <input
          v-model="newMessage"
          type="text"
          placeholder="Type a message..."
          class="flex-grow bg-gray-100 border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg transition duration-150 ease-in-out w-full max-w-screen-md"
        />
        <button
          @click="sendMessage"
          class="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-150 ease-in-out text-lg"
        >
          <i class="fas fa-paper-plane"></i>
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, nextTick } from "vue";
import axios from "axios";

export default {
  setup() {
    const username = ref("Diana");
    const messages = ref([]);
    const newMessage = ref("");
    const currentUserId = ref("user_3");
    const chatContainer = ref(null);

    // In the sendMessage function:
    const sendMessage = () => {
      if (newMessage.value.trim()) {
        messages.value.push({
          message_id: `msg_${messages.value.length + 1}`,
          sender_id: currentUserId.value,
          receiver_id: "user_4",
          text: newMessage.value,
          date: new Date().toISOString().split("T")[0],
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          status: "sent",
        });

        axios
          .post("http://localhost:3000/send-message", {
            number: "62895391169330",
            message: newMessage.value,
          })
          .then((response) => {
            console.log("Pesan terkirim:", response.data);
          })
          .catch((error) => {
            console.error("Gagal mengirim pesan:", error);
          });

        newMessage.value = "";
        nextTick(() => {
          // Only scroll if chatContainer is defined
          if (chatContainer.value) {
            chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
          }
        });
      }
    };

    // In the receiveMessage function:
    const receiveMessage = (message) => {
      messages.value.push({
        message_id: `msg_${messages.value.length + 1}`,
        sender_id: "user_4",
        text: message.text,
        date: new Date().toISOString().split("T")[0],
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        status: "received",
      });
      nextTick(() => {
        // Only scroll if chatContainer is defined
        if (chatContainer.value) {
          chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
        }
      });
    };

    const fetchMessages = () => {
      setInterval(() => {
        axios
          .get("http://localhost:3000/receive-message")
          .then((response) => {
            if (response.data.newMessages) {
              response.data.newMessages.forEach(receiveMessage);
            }
          })
          .catch((error) => {
            console.error("Gagal menerima pesan:", error);
          });
      }, 3000);
    };

    const handleClick = () => {
      console.log("Button clicked!");
    };

    // Ensure the function is returned from setup
    const shouldShowDate = (index) => {
      if (index === 0) return true;
      const currentMessageDate = messages.value[index].date;
      const previousMessageDate = messages.value[index - 1].date;
      return currentMessageDate !== previousMessageDate;
    };

    const formatDate = (date) => {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString(undefined, options);
    };

    const formatTime = (time) => time;

    onMounted(() => {
      fetchMessages();

      // Inisialisasi WebSocket untuk menerima pesan balasan
      const ws = new WebSocket("ws://localhost:3001"); // Port sesuai dengan WebSocket server

      ws.onmessage = (event) => {
        const messageData = JSON.parse(event.data);
        receiveMessage({
          text: messageData.text,
          sender_id: messageData.sender,
          date: new Date(messageData.date).toISOString().split("T")[0],
          time: new Date(messageData.date).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        });
      };

      // Dummy data awal
      messages.value = [
        {
          message_id: "msg_1",
          sender_id: "user_3",
          text: "Hello!",
          date: "2024-11-11",
          time: "10:00 AM",
          status: "read",
        },
        {
          message_id: "msg_2",
          sender_id: "user_4",
          text: "Hi!",
          date: "2024-11-11",
          time: "10:01 AM",
          status: "delivered",
        },
      ];
    });

    return {
      username,
      messages,
      newMessage,
      sendMessage,
      currentUserId,
      handleClick,
      shouldShowDate, // Make sure this is returned
      formatDate,
      formatTime,
      chatContainer,
    };
  },
};
</script>
