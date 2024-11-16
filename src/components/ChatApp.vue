<template>
    <div class="chat-app">
      <Sidebar @chatSelected="selectChat" />
      <div class="chat-section">
        <ChatHeader :activeChat="activeChat" />
        <ChatMessages :messages="activeChat.messages" />
        <MessageInput @sendMessage="handleSendMessage" />
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from './Sidebar.vue';
  import ChatHeader from './ChatHeader.vue';
  import ChatMessages from './ChatMessages.vue';
  import MessageInput from './MessageInput.vue';
  
  export default {
    components: { Sidebar, ChatHeader, ChatMessages, MessageInput },
    data() {
      return {
        activeChat: {
          name: 'William Wright',
          avatar: 'path/to/avatar1.jpg',
          status: 'Online',
          messages: [
            { id: 1, sender: 'me', text: 'Hey, how are you?', time: '08:45 PM' },
            { id: 2, sender: 'friend', text: 'I’m good, you?', time: '08:46 PM' },
          ],
        },
      };
    },
    methods: {
      selectChat(chat) {
        this.activeChat = chat;
      },
      handleSendMessage(message) {
        this.activeChat.messages.push({ id: Date.now(), sender: 'me', text: message, time: new Date().toLocaleTimeString() });
      },
    },
  };
  </script>
  
  <style scoped>
  .chat-app {
    display: flex;
    height: 100vh;
  }
  .chat-section {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  </style>
  