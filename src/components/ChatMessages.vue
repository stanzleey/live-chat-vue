<template>
  <div class="min-h-screen flex bg-gray-100 w-full max-w-screen-xl mx-auto">
    <div class="flex-grow flex flex-col bg-white border-l border-gray-200 overflow-hidden">
      <header class="w-full p-3 flex items-center justify-between border-b border-gray-200" style="background: #f5f5f5">
        <div class="flex items-center space-x-3">
          <!-- Back Button (visible only on mobile screens) -->
          <button class="md:hidden text-black text-lg focus:outline-none hover:text-blue-300"
            @click="navigateToContactList">
            <i class="fas fa-arrow-left"></i>
          </button>

          <!-- Profile Picture -->
          <img src="https://via.placeholder.com/40" alt="Profile Picture"
            class="w-10 h-10 rounded-full border border-gray-300 object-cover" />
          <!-- Username -->
          <h1 class="text-black text-lg md:text-2xl font-thin cursor-pointer">
            {{ username }}
          </h1>
        </div>
        <div class="flex items-center space-x-3">
          <button @click="toggleProfileMenu"
            class="text-black text-lg md:text-xl focus:outline-none hover:text-blue-300">
            <i :class="{
              'fas fa-bars': !isMenuOpen,
              'fas fa-times': isMenuOpen,
            }"></i>
          </button>
        </div>
      </header>

      <!-- Sidebar Menu -->
      <div v-if="isMenuOpen" class="absolute top-12 right-3 bg-white shadow-md w-40 z-50 border rounded-lg">
        <div class="p-3">
          <h2 class="text-sm font-bold mb-2">Menu</h2>
          <button @click="showProfile = true"
            class="block w-full text-left text-gray-700 hover:text-blue-500 transition text-sm">
            View Profile
          </button>
        </div>
      </div>

      <!-- Chat Messages -->
      <div class="flex-grow p-3 overflow-y-auto max-h-[calc(100vh-128px)]" ref="chatContainer">
        <div class="space-y-3">
          <div v-for="(msg, index) in messages" :key="msg.message_id">
            <div v-if="shouldShowDate(index)" class="text-center text-gray-500 text-xs md:text-sm mb-2">
              {{ formatDate(msg.date) }}
            </div>
            <div :class="{
              'text-right': msg.sender_id === currentUserId,
              'text-left': msg.sender_id !== currentUserId,
            }" class="flex items-start space-x-2">
              <div v-if="msg.sender_id === currentUserId" class="ml-auto">
                <div class="text-white p-2 md:p-3 rounded-lg max-w-xs break-words relative text-sm md:text-base"
                  style="background: #0056b3">
                  {{ msg.text }}
                  <div class="text-xs text-gray-200 mt-1 flex justify-end items-center space-x-2">
                    <span>{{ formatTime(msg.time) }}</span>
                    <i :class="{
                      'fas fa-check': msg.status === 'sent',
                      'fas fa-check-double text-gray-400':
                        msg.status === 'delivered',
                      'fas fa-check-double text-blue-500':
                        msg.status === 'read',
                    }"></i>
                  </div>
                </div>
              </div>
              <div v-else class="mr-auto rounded-lg">
                <div
                  class="bg-gray-200 text-gray-700 p-2 md:p-3 rounded-lg max-w-xs break-words relative text-sm md:text-base">
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

      <footer class="bg-white p-3 flex items-center border-t border-gray-200 shadow-md space-x-3">
        <button class="text-gray-500 hover:text-blue-500 transition duration-300 responsive-margin"
          @click="handleClick">
          <i class="fas fa-smile text-base"></i>
        </button>
        <button class="text-gray-500 hover:text-blue-500 transition duration-300 responsive-margin"
          @click="handleClick">
          <i class="fas fa-paperclip text-base"></i>
        </button>
        <button class="text-gray-500 hover:text-blue-500 transition duration-300 responsive-margin"
          @click="handleClick">
          <i class="fas fa-camera text-base"></i>
        </button>

        <!-- Contact Profile Popup -->
        <div v-if="showProfile" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div class="bg-white p-5 rounded-lg shadow-lg w-80">
            <h2 class="text-lg font-bold mb-3">Contact Profile</h2>
            <p class="text-gray-700 mb-3 text-sm">
              <strong>Name:</strong> {{ contactProfile.name }}
            </p>
            <p class="text-gray-700 mb-3 text-sm">
              <strong>Phone:</strong> {{ contactProfile.phone }}
            </p>
            <p class="text-gray-700 mb-3 text-sm">
              <strong>Email:</strong> {{ contactProfile.email }}
            </p>
            <button @click="showProfile = false"
              class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm">
              Close
            </button>
          </div>
        </div>

        <!-- Message Input and Send Button -->
        <input v-model="newMessage" type="text" placeholder="Type a message..."
          class="flex-grow bg-gray-100 border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm md:text-base transition duration-150 ease-in-out w-full max-w-screen-md responsive-margin"
          @keyup.enter="sendMessage" />

        <button @click="sendMessage"
          class="ml-2 bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition duration-150 ease-in-out text-sm responsive-margin">
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
    const isMenuOpen = ref(false);
    const showProfile = ref(false);
    const messages = ref([]);
    const newMessage = ref("");
    const currentUserId = ref("user_3");
    const chatContainer = ref(null);

    const toggleProfileMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const contactProfile = ref({
      name: "John Doe",
      phone: "+1234567890",
      email: "john.doe@example.com",
    });

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
          if (chatContainer.value) {
            chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
          }
        });
      }
    };

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

    const navigateToContactList = () => {
      window.location.href = "/chat"; // Update this route if using Vue Router or a different structure
    };

    onMounted(() => {
      fetchMessages();

      const ws = new WebSocket("ws://localhost:3001");

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
      shouldShowDate,
      formatDate,
      formatTime,
      chatContainer,
      showProfile,
      contactProfile,
      isMenuOpen,
      toggleProfileMenu,
      navigateToContactList, // Ensure this is returned
    };
  },
};
</script>

<style>
@media screen and (max-width: 768px) {
  .responsive-margin {
    margin-bottom: 60px;
    margin-right: 10px;
    /* Add horizontal margin for spacing between icons */
  }

  footer button {
    margin-right: 10px;
    /* Adds spacing between the buttons */
  }
}

@media (max-width: 768px) {
  /* .flex {
    flex-direction: column;
  } */

  .text-lg {
    font-size: 1.25rem;
  }

  .md\:text-2xl {
    font-size: 1.5rem;
  }

  .text-base {
    font-size: 1rem;
  }

  .max-w-screen-xl {
    max-width: 100%;
  }

  .max-w-screen-md {
    max-width: 100%;
  }

  .responsive-margin {
    margin-left: 20px;
    margin-right: 30px;
  }

  .w-full {
    width: 100%;
  }
}

@media (min-width: 769px) {
  .flex {
    flex-direction: row;
  }
}
</style>
