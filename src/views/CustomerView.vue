<template>
  <div class="app-container">
    <div class="contact-list">
      <ContactList
        :contacts="contacts"
        @contact-selected="handleContactSelect"
      />
    </div>
    <div class="chat-section" v-if="selectedContact">
      <div class="chat-messages-container">
        <!-- Profile section -->
        <ChatMessages :messages="chatMessages" />
        <!-- chat-messages-container -->
        <!-- Chat section -->
        <div class="profile-and-chat">
          <!-- <ChatMessages :messages="chatMessages" /> -->
          <ContactProfile :contact="selectedContact" />
          <!-- Chat input -->
          <!-- <div class="chat-input-container">
            <input
              v-model="newMessage"
              type="text"
              class="chat-input"
              placeholder="Type a message..."
            />
            <button class="send-button" @click="sendMessage">Send</button>
          </div> -->
        </div>
      </div>
    </div>
    <div v-else class="no-contact-selected">
      <h2>Please select a contact to start chatting.</h2>
    </div>
  </div>
</template>

<script>
import ContactList from "@/components/ContactList.vue";
import ChatMessages from "@/components/ChatMessages.vue";
import ContactProfile from "@/components/ContactProfile.vue";
export default {
  name: "CustomerList",
  components: {
    ContactList,
    ChatMessages,
    ContactProfile,
  },
  data() {
    return {
      contacts: [
        { id: 1, name: "Diana" },
        { id: 2, name: "Jane Smith" },
        { id: 3, name: "Alice Brown" },
        { id: 1, name: "Mark Lee" },
        { id: 2, name: "James" },
        { id: 3, name: "Sule" },
      ],
      messages: {
        1: [
          { id: 1, sender: "You", text: "Hello, John!" },
          { id: 2, sender: "John", text: "Hi! How can I help you?" },
        ],
        2: [
          { id: 1, sender: "You", text: "Hi, Jane!" },
          { id: 2, sender: "Jane", text: "Hello! What’s up?" },
        ],
      },
      chatMessages: [],
      newMessage: "",
      selectedContact: null,
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage && this.selectedContact) {
        const messageId = this.chatMessages.length + 1;
        this.chatMessages.push({
          id: messageId,
          sender: "You",
          text: this.newMessage,
        });

        if (!this.messages[this.selectedContact.id]) {
          this.messages[this.selectedContact.id] = [];
        }
        this.messages[this.selectedContact.id].push({
          id: messageId,
          sender: "You",
          text: this.newMessage,
        });

        this.newMessage = ""; // Clear input after sending
      }
    },
    handleContactSelect(contact) {
      this.selectedContact = contact;
      this.chatMessages = this.messages[contact.id] || [];
    },
    makeCall() {
      alert(`Calling ${this.selectedContact.name}...`);
    },
    startVideoCall() {
      alert(`Starting video call with ${this.selectedContact.name}...`);
    },
  },
};
</script>

<style scoped>
.app-container {
  display: flex;
  height: 100vh;
}

.chat-messages-container {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  overflow-y: auto;
  width: 100%;
  height: 100%;
}

.profile-and-chat {
  display: flex; /* Enable flex layout */
  flex-direction: row;
  flex-grow: 1;
  width: 100%; /* Extend to take full width of parent */
  height: 100%; /* Extend vertically */
  /* overflow-y: auto; */
}

.contact-list {
  margin-left: 65px;
  width: 330px; /* Adjust width if necessary */
  background-color: #f5f5f5;
  padding: 20px;
  /* overflow-y: auto; */
}

.chat-section {
  width: 80vw;
  height: 100vh; /* Full height of the viewport if needed */
  display: flex;
  flex-direction: column;
  /* overflow-x: hidden; */
  /* width: 100%; */
  box-sizing: border-box;
}

.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chat-actions {
  display: flex;
  gap: 10px;
}

.action-button {
  padding: 8px 12px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

.action-button:hover {
  background-color: #0056b3;
}

.chat-input-container {
  display: flex;
  align-items: center;
  margin-top: auto; /* Push the input to the bottom */
}

.chat-input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
}

.send-button {
  padding: 10px 15px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

.send-button:hover {
  background-color: #0056b3;
}

.no-contact-selected {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 1.5rem;
}

/* Chat Messages Styles */
.chat-messages {
  flex-grow: 1; /* Ensure the chat messages area takes available space */
  /* overflow-y: auto; */
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
  margin-top: 10px;
}
</style>
