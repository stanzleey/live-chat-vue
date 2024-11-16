<template>
  <div class="chat-list">
    <!-- List of chat items -->
    <div
      v-for="(chat, index) in chats"
      :key="index"
      class="chat-item"
      @click="selectChat(chat)"
    >
      <div class="profile-section">
        <div class="profile-picture-container">
          <img
            :src="chat.profilePicture"
            alt="Profile picture"
            class="profile-picture"
          />
          <!-- Instagram icon inside the profile picture -->
          <a
            v-if="chat.instagramHandle"
            :href="'https://www.instagram.com/' + chat.instagramHandle"
            target="_blank"
            class="instagram-icon"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </div>
        <div class="chat-info">
          <h5>{{ chat.name }}</h5>
          <p>{{ chat.message }}</p>
          <small>
            {{ chat.date }}
            <span class="check-mark">
              <i
                v-if="chat.isRead && !chat.isAcknowledged"
                class="fas fa-check"
              ></i>
              <i v-if="chat.isAcknowledged" class="fas fa-check-double"></i>
            </span>
          </small>
        </div>
      </div>
    </div>

    <!-- Chat details section (shown when a chat is selected) -->
    <div v-if="selectedChat" class="chat-details">
      <h4>Chat with {{ selectedChat.name }}</h4>
      <div class="chat-content">
        <p>{{ selectedChat.message }}</p>
      </div>
      <button @click="selectedChat = null">Back to chat list</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatList",
  data() {
    return {
      chats: [
        {
          name: "sheva_03607",
          message: "Gmn bg?",
          date: "12 Oct",
          isRead: true,
          isAcknowledged: true,
          profilePicture: require("@/assets/images/profil 1.jpg"),
          instagramHandle: "sheva_03607",
        },
        {
          name: "frizachmad",
          message: "Internet sy ga bisa",
          date: "08 Oct",
          isRead: true,
          isAcknowledged: false,
          profilePicture: require("@/assets/images/profil 1.jpg"),
          instagramHandle: "",
        },
        {
          name: "linda.khshn_",
          message: "Selamat malam",
          date: "07 Oct",
          isRead: true,
          isAcknowledged: true,
          profilePicture: require("@/assets/images/profil 1.jpg"),
          instagramHandle: "linda.khshn_",
        },
        {
          name: "nabillaputhas",
          message: "Hubungi 08991066262",
          date: "07 Oct",
          isRead: false,
          isAcknowledged: false,
          profilePicture: require("@/assets/images/profil 1.jpg"),
          instagramHandle: "nabillaputhas",
        },
      ],
      selectedChat: null, // To store the selected chat details
    };
  },
  methods: {
    selectChat(chat) {
      this.selectedChat = chat;
    },
  },
};
</script>

<style scoped>
.chat-list {
  padding: 20px;
  background-color: #fff;
  height: 100vh;
  overflow-y: auto;
}

.chat-item {
  padding: 15px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.profile-section {
  display: flex;
  align-items: flex-start;
}

.profile-picture-container {
  position: relative;
  width: 50px;
  height: 50px;
}

.profile-picture {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.instagram-icon {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #fff;
  border-radius: 50%;
  padding: 3px;
  color: #e1306c; /* Instagram pink */
  font-size: 0.8em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: 1px solid #ddd;
}

.chat-info {
  flex-grow: 1;
  margin-left: 15px;
}

.chat-info h5 {
  margin: 0;
  display: flex;
  align-items: center;
}

.chat-info p {
  margin: 5px 0;
  color: #666;
}

.chat-info small {
  color: #aaa;
}

.check-mark {
  margin-left: 10px;
}

.fas.fa-check {
  color: #888; /* Grey check mark for read messages */
}

.fas.fa-check-double {
  color: #4caf50; /* Green double check mark for acknowledged messages */
}

/* Chat details section */
.chat-details {
  padding: 20px;
  background-color: #f9f9f9;
  margin-top: 20px;
}

.chat-content {
  margin: 10px 0;
}

button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 3px;
}

button:hover {
  background-color: #45a049;
}
</style>
