<template>
  <div class="chat-window">
    <!-- Chat Header -->
    <div
      class="chat-header d-flex align-items-center justify-content-between p-3"
    >
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
        alt="avatar"
        class="rounded-circle me-3"
        width="45"
      />
      <div>
        <h6 class="mb-0">John Doe</h6>
        <span class="text-muted small">Online</span>
      </div>
    </div>

    <!-- Chat Messages -->
    <div class="chat-body p-3">
      <!-- Sent Message -->
      <div class="message-row justify-content-end mb-3">
        <div class="sent-message p-2 px-3">
          <p class="mb-0">Hello! How are you?</p>
          <small class="text-muted">10:12 AM</small>
        </div>
      </div>

      <!-- Received Message -->
      <div class="message-row justify-content-start mb-3">
        <div class="received-message p-2 px-3">
          <p class="mb-0">I'm good, how about you?</p>
          <small class="text-muted">10:15 AM</small>
        </div>
      </div>

      <!-- Sent Message -->
      <div class="message-row justify-content-end mb-3">
        <div class="sent-message p-2 px-3">
          <p class="mb-0">I'm doing great, thanks!</p>
          <small class="text-muted">10:18 AM</small>
        </div>
      </div>
    </div>

    <!-- Chat Input -->
    <div class="chat-input d-flex align-items-center p-3">
      <i class="bi bi-paperclip mx-2"></i>
      <input type="text" class="form-control" placeholder="Aa" />
      <i class="bi bi-send-fill mx-2"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "FacebookMessengerChatWindow",
};
</script>

<style scoped>
.chat-window {
  display: flex;
  flex-direction: column;
  height: 100vh;
  border: 1px solid #ddd;
  background-color: #fff;
}

.chat-header {
  border-bottom: 1px solid #ddd;
  background-color: #0084ff; /* Warna biru khas Messenger */
  color: white;
}

.chat-header h6 {
  font-weight: bold;
  font-size: 1rem;
}

.chat-body {
  flex-grow: 1;
  overflow-y: auto;
  background-color: #f0f0f0;
}

.message-row {
  display: flex;
}

.sent-message {
  background-color: #0084ff; /* Warna pesan terkirim khas Messenger */
  color: white;
  border-radius: 20px 20px 0 20px;
  max-width: 60%;
}

.received-message {
  background-color: #f1f0f0; /* Warna pesan diterima khas Messenger */
  color: black;
  border-radius: 20px 20px 20px 0;
  max-width: 60%;
}

.sent-message p,
.received-message p {
  margin-bottom: 5px;
}

.sent-message small,
.received-message small {
  font-size: 10px;
  float: right;
}

.chat-input {
  border-top: 1px solid #ddd;
  background-color: white;
  display: flex;
  align-items: center;
}

.chat-input input {
  flex-grow: 1;
  border: none;
  padding: 10px;
  border-radius: 50px;
  background-color: #f0f2f5; /* Latar belakang input khas Messenger */
}

.chat-input input:focus {
  outline: none;
}

.bi-paperclip,
.bi-send-fill {
  font-size: 1.25rem;
  color: #0084ff;
  cursor: pointer;
}
</style>
