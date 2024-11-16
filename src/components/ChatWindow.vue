<template>
  <div class="chat-window">
    <div v-if="selectedContact" class="chat-header">
      <img
        :src="selectedContact.photo"
        alt="Profile Photo"
        class="profile-photo"
      />
      <span>{{ selectedContact.name }}</span>
    </div>
    <div class="chat-content">
      <p v-if="selectedContact">Chatting with {{ selectedContact.name }}</p>
      <p v-else>Select a contact to start chatting.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatWindow",
  props: {
    selectedContact: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style scoped>
.chat-window {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
}

.chat-header {
  display: flex;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 1px solid #e0e0e0;
}

.profile-photo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
}

.chat-content {
  flex-grow: 1;
  padding-top: 16px;
}
</style>
