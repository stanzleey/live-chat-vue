<template>
  <div class="d-flex">
    <!-- <ChatView /> -->
    <!-- Sidebar Component -->
    <SidebarComponent :contacts="contacts" @select-contact="setActiveContact" />
    <!-- Chat View -->
    <div class="flex-1 d-flex flex-column">
      <ChatHeader
        v-if="activeContact"
        :avatar="activeContact.avatar"
        :name="activeContact.name"
        :status="activeContact.status"
      />
      <MessageList :messages="messages" />
      <MessageInput @send-message="sendMessage" />
    </div>
  </div>
</template>

<script>
import ChatHeader from "./components/ChatHeader.vue";
import MessageList from "./components/MessageList.vue";
import MessageInput from "./components/MessageInput.vue";
import SidebarComponent from "./components/Sidebar.vue"; // Import SidebarComponent
// import ChatView from "./views/ChatView.vue";

export default {
  components: {
    ChatHeader,
    MessageList,
    MessageInput,
    SidebarComponent,
    // ChatView,
  },
  data() {
    return {
      contacts: [
        {
          name: "John Doe",
          avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp",
          status: "Online",
        },
        {
          name: "Jane Smith",
          avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp",
          status: "Away",
        },
        // Tambahkan kontak lainnya
      ],
      activeContact: null,
      messages: [
        { text: "Hello! How are you?", time: "10:12 AM", isSent: true },
        { text: "I'm good, how about you?", time: "10:15 AM", isSent: false },
        { text: "I'm doing great, thanks!", time: "10:18 AM", isSent: true },
      ],
    };
  },
  methods: {
    setActiveContact(contact) {
      this.activeContact = contact;
    },
    sendMessage(message) {
      const newMessage = {
        text: message,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isSent: true,
      };
      this.messages.push(newMessage);
    },
  },
};
</script>

<style scoped>
.d-flex {
  display: flex;
  height: 100vh;
}

.flex-1 {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.chat-window {
  flex-grow: 1;
}
</style>

<!-- <template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style> -->
