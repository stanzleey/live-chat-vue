<template>
  <div class="chat-button" @click="openChat">
    <!-- <img src="@/assets/chat-icon.png" alt="Chat" /> -->
  </div>
</template>

<script>
export default {
  methods: {
    openChat() {
      this.$emit("openChat");
    },
  },
};
</script>

<style scoped>
.chat-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #007bff;
  border-radius: 50%;
  padding: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.chat-button img {
  width: 24px;
  height: 24px;
}
</style>
