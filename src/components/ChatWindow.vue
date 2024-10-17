<template>
  <div class="chat-window">
    <div class="header">
      <h3>Chat</h3>
      <button @click="closeChat">X</button>
    </div>
    <div class="messages" ref="messagesContainer">
      <ChatMessage
        v-for="(message, index) in messages"
        :key="index"
        :message="message"
        :isUser="message.isUser"
      />
    </div>
    <div class="input-area">
      <input
        type="text"
        v-model="newMessage"
        @keypress.enter="sendMessage"
        placeholder="Ketik pesan..."
      />
      <button @click="sendMessage">Kirim</button>
    </div>
  </div>
</template>

<script>
import ChatMessage from "./ChatMessage.vue";

export default {
  components: {
    ChatMessage,
  },
  data() {
    return {
      newMessage: "",
      messages: [
        { text: "Hai! Bagaimana saya bisa membantu Anda?", isUser: false },
        { text: "Saya butuh bantuan dengan pesanan saya.", isUser: true },
      ],
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() !== "") {
        this.messages.push({ text: this.newMessage, isUser: true });
        this.newMessage = "";
        this.autoScroll();
      }
    },
    autoScroll() {
      this.$nextTick(() => {
        const messagesContainer = this.$refs.messagesContainer;
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      });
    },
    closeChat() {
      this.$emit("closeChat");
    },
  },
};
</script>

<style scoped>
.chat-window {
  width: 400px;
  height: 500px;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.header {
  background-color: #007bff;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.messages {
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  background-color: #f1f1f1;
}

.input-area {
  padding: 10px;
  display: flex;
  background-color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

input {
  flex: 1;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ddd;
  margin-right: 10px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 20px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
