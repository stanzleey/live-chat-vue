<template>
  <div class="chat-body p-3">
    <MessageBubble
      v-for="(message, index) in messages"
      :key="index"
      :text="message.text"
      :time="message.time"
      :isSent="message.isSent"
    />
  </div>
</template>

<script>
import MessageBubble from "./MessageBubble.vue";

export default {
  components: {
    MessageBubble,
  },
  props: {
    messages: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.chat-body {
  flex-grow: 1;
  overflow-y: auto;
  background-color: #f7f7f7;
}
</style>
