<template>
  <div class="app-container">
    <!-- Contact List -->
    <div class="contact-list" v-if="!isMobileView || !showChatOnly">
      <ContactList
        :contacts="contacts"
        @contact-selected="handleContactSelect"
      />
    </div>

    <!-- Chat Section -->
    <div class="chat-section" v-if="selectedContact">
      <div class="chat-messages-container" v-if="!isMobileView || showChatOnly">
        <ChatMessages :messages="chatMessages" />
        <!-- Trigger Profile Popup -->
      </div>
    </div>

    <div v-if="!selectedContact && !isMobileView" class="no-contact-selected">
      <h2>Please select a contact to start chatting.</h2>
    </div>

    <!-- Contact Profile Popup -->
    <div class="profile-popup" v-if="showProfilePopup">
      <div class="popup-content">
        <button class="close-btn" @click="showProfilePopup = false">X</button>
        <ContactProfile :contact="selectedContact" />
      </div>
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
        { id: 1, name: "Diana", message: "Halo", lastMessageTime: "12:30 PM" },
        {
          id: 2,
          name: "Jane Smith",
          message: "Selamat pagi",
          lastMessageTime: "12:30 PM",
        },
        {
          id: 3,
          name: "Alice Brown",
          message: "Hati-hati",
          lastMessageTime: "12:30 PM",
          profilePhoto: "profil 1.jpg",
        },
        {
          id: 4,
          name: "Bambang",
          message: "Pagi gaes",
          lastMessageTime: "14:30 PM",
          profilePhoto: "profil 1.jpg",
        },
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
      showChatOnly: false,
      showProfilePopup: false,
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
/* Profile Popup Styles */
.profile-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.popup-content {
  background: #fff;
  width: 90%;
  max-width: 400px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  position: relative;
}

/* Main Container */
.app-container {
  margin-left: 50px;
  display: flex;
  flex-direction: row;
  height: 100vh;
  margin-bottom: 300px;
}

/* Contact List */
.contact-list {
  height: auto;
  width: 430px;
  background-color: #f5f5f5;
  padding: 20px;
  overflow-y: auto;
}

/* Customize Scrollbar */
.contact-list::-webkit-scrollbar {
  width: 8px; /* Set the width of the scrollbar */
}

.contact-list::-webkit-scrollbar-track {
  background: transparent; /* Make the track transparent */
}

.contact-list::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2); /* Set the color of the thumb */
  border-radius: 10px; /* Optional: rounded corners */
}

.contact-list::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.5); /* Darker thumb when hovered */
}

/* Chat Section */
.chat-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100%; /* Ensure it takes full height */
}

.chat-messages-container {
  width: 885px;
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* This will make the chat messages container grow */
}

.chat-messages {
  flex-grow: 1;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.no-contact-selected {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 1.5rem;
  margin-left: 15px;
}
@media screen and (max-width: 768px) {
  .contact-list {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    /* z-index: 1000; */
    background-color: white;
    transform: translateX(0);
    box-shadow: 0 4px 10px rgba(150, 135, 135, 0.3);
    overflow-y: auto;
  }
  .contact-list.hidden {
    transform: translateX(-100%);
  }
}
/* Responsive Styles for Mobile */
@media screen and (max-width: 768px) {
  .app-container {
    flex-direction: column;
    margin-left: 5px;
  }

  .contact-list {
    width: 100%; /* Full width on mobile */
    height: 610px; /* Limit height for contact list on mobile */
    overflow-y: auto;
  }

  .chat-section {
    width: 100%; /* Full width on mobile */
    display: flex;
    flex-direction: column;
    height: calc(100vh - 250px); /* Adjust height based on contact list */
  }

  .chat-messages-container {
    flex-grow: 1; /* Allow the messages container to expand */
    overflow-y: auto; /* Enable scrolling for long messages */
    background-color: #fdfdfd; /* Match the background color */
    border-radius: 5px;
    width: 100%;
  }

  .chat-messages {
    padding: 10px;
    height: 100%; /* Ensure it takes full height */
    /* overflow-y: auto; */
  }

  .view-profile-btn {
    position: fixed;
    bottom: 10px;
    left: 10px;
    background: #007bff;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
  }
}
</style>
