<template>
  <div class="chat-input d-flex align-items-center p-3 bg-light">
    <i class="bi bi-paperclip mx-2"></i>
    <input
      type="text"
      class="form-control"
      placeholder="Type a message"
      v-model="message"
      @keyup.enter="sendMessage"
    />
    <i class="bi bi-send-fill mx-2" @click="sendMessage"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
  methods: {
    sendMessage() {
      if (this.message.trim()) {
        this.$emit("send-message", this.message);
        this.message = "";
      }
    },
  },
};
</script>

<style scoped>
.chat-input {
  border-top: 1px solid #ddd;
}

.chat-input input {
  flex-grow: 1;
  border: none;
  padding: 10px;
  background-color: #fff;
  border-radius: 20px;
}

.chat-input input:focus {
  outline: none;
  box-shadow: none;
}

.bi-paperclip,
.bi-send-fill {
  font-size: 1.5rem;
  color: #aaa;
  cursor: pointer;
}
</style>
