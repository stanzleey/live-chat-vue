<template>
  <div
    :class="[
      'message-row',
      isSent ? 'justify-content-end' : 'justify-content-start',
    ]"
  >
    <div
      :class="['message-bubble', isSent ? 'sent-message' : 'received-message']"
    >
      <p class="mb-0">{{ text }}</p>
      <small class="text-muted">{{ time }}</small>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    isSent: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
.message-row {
  display: flex;
  margin-bottom: 15px;
}

.sent-message {
  background-color: #dcf8c6;
  border-radius: 10px;
  max-width: 60%;
  padding: 10px;
}

.received-message {
  background-color: #ebebeb;
  border-radius: 10px;
  max-width: 60%;
  padding: 10px;
}

.message-bubble p {
  margin-bottom: 5px;
}

.message-bubble small {
  font-size: 10px;
  float: right;
}
</style>
