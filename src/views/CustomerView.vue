<template>
  <div class="app-container">
    <!-- Contact List -->
    <div 
      class="contact-list" 
      v-if="!isMobileView || !showChatOnly">
      <ContactList
        :contacts="contacts"
        @contact-selected="handleContactSelect"
      />
    </div>

    <!-- Chat Section -->
    <div 
      class="chat-section" 
      v-if="selectedContact">
      <div 
        class="chat-messages-container"
        v-if="!isMobileView || showChatOnly">
        <ChatMessages :messages="chatMessages" />
        <!-- Profile and Chat -->
        <div 
          class="profile-and-chat"
          v-if="!isMobileView">
          <ContactProfile :contact="selectedContact" />
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
        { id: 4, name: "Mark Lee" },
        { id: 5, name: "James" },
        { id: 6, name: "Sule" },
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
      showChatOnly: false, // Controls whether to show only chat on mobile
    };
  },
  computed: {
    isMobileView() {
      return window.innerWidth <= 768; // Detect mobile screen size
    },
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
      if (this.isMobileView) {
        this.showChatOnly = true; // Switch to chat view only on mobile
      }
    },
  },
  watch: {
    selectedContact() {
      // Automatically reset `showChatOnly` on desktop view
      if (!this.isMobileView) {
        this.showChatOnly = false;
      }
    },
  },
};
</script>

<style scoped>
/* Same styles as before */
.app-container {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

.contact-list {
  width: 330px;
  background-color: #f5f5f5;
  padding: 20px;
}

.chat-section {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.no-contact-selected {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 1.5rem;
}

/* Add responsive styles */
@media screen and (max-width: 768px) {
  .app-container {
    flex-direction: column;
  }

  .contact-list {
    width: 100%; /* Full width on mobile */
  }

  .chat-section {
    width: 100%; /* Full width on mobile */
  }
}
</style>
