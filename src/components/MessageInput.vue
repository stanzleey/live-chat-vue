<template>
  <div class="message-input">
    <input type="text" v-model="newMessage" placeholder="Type your message..." />
    <button @click="onSend">Send</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newMessage: '',
    };
  },
  methods: {
    onSend() {
      this.$emit('send', this.newMessage);
      this.newMessage = '';
    },
  },
};
</script>

<style scoped>
.message-input {
  display: flex;
  padding: 10px;
  border-top: 1px solid #ddd;
}

.message-input input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.message-input button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  margin-left: 10px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
