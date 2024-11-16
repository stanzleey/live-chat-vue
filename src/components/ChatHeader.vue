<template>
  <div class="chat-header">
    <div class="header-left">
      <h2>Chats</h2>
    </div>
    <div class="header-right">
      <img src="link_to_user_avatar" alt="User Avatar" class="user-avatar" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #007bff;
  color: white;
  border-bottom: 2px solid #0056b3;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 10px 10px;
  transition: background-color 0.3s ease;
}

.chat-header:hover {
  background-color: #0056b3;
}

.header-left h2 {
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 1px;
}

.header-right {
  display: flex;
  align-items: center;
}

.user-avatar {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 2px solid #fff;
  cursor: pointer;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.user-avatar:hover {
  transform: scale(1.1);
  border-color: #ffd700;
}

@media (max-width: 768px) {
  .chat-header {
    padding: 10px;
  }

  .header-left h2 {
    font-size: 20px;
  }

  .user-avatar {
    width: 40px;
    height: 40px;
  }
}
</style>
