<template>
  <div class="chat-card">
    <img :src="message.image" alt="User Image" class="profile-image" />
    <div class="message-details">
      <h2>{{ message.name }}</h2>
      <p>{{ message.message }}</p>
      <span :class="statusClass">{{ message.status }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatMessageCard",
  props: {
    message: Object,
  },
  computed: {
    statusClass() {
      return this.message.status === "Active" ? "active" : "inactive";
    },
  },
};
</script>

<style scoped>
.chat-card {
  background: #fff;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
}

.chat-card:hover {
  transform: scale(1.05);
}

.profile-image {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
}

.message-details {
  text-align: left;
}

h2 {
  font-size: 1.2rem;
  margin: 0;
  color: #333;
}

p {
  margin: 5px 0;
  color: #666;
}

span.active {
  color: green;
}

span.inactive {
  color: red;
}
</style>
