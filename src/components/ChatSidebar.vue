<template>
  <div class="app-container">
    <!-- Sidebar -->
    <div class="sidebar">
      <ul>
        <li>
          <router-link to="/profil">
            <i class="fas fa-user"></i> Profil
          </router-link>
        </li>
        <li>
          <router-link to="/chat">
            <i class="fas fa-comments"></i> Chat
          </router-link>
        </li>
        <li>
          <router-link to="/contact">
            <i class="fas fa-envelope"></i> Contact
          </router-link>
        </li>
      </ul>

      <!-- Logout Button at the Bottom -->
      <div class="logout">
        <a href="/login" @click="logout">
          <i class="fas fa-sign-out-alt"></i> Logout
        </a>
      </div>
    </div>

    <!-- Main Content Area -->
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarChat",
  methods: {
    logout() {
      // Implement your logout logic here
      localStorage.removeItem("authToken"); // Remove the token
      this.$router.push("/login"); // Redirect to login
    },
  },
};
</script>

<style scoped>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.app-container {
  display: flex;
  height: 100vh; /* Full height for both sidebar and content */
}

.sidebar {
  width: 220px;
  height: 100vh; /* Full height for sidebar */
  background-color: #2c3e50;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Push logout to bottom */
}

.sidebar:hover {
  background-color: #34495e;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.sidebar ul li {
  margin-bottom: 20px;
}

.sidebar ul li a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;
}

.sidebar ul li a i {
  margin-right: 10px;
}

.sidebar ul li a:hover {
  color: #1abc9c;
}

.sidebar ul li a:active {
  color: #16a085;
}

.logout {
  margin-top: auto; /* Push logout to bottom */
  padding-top: 20px;
  border-top: 1px solid #1abc9c; /* A subtle top border */
}

.logout a {
  color: white;
  font-size: 18px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center; /* Center horizontally */
  transition: color 0.3s ease;
}

.logout a i {
  margin-right: 10px;
}

.logout a:hover {
  color: #e74c3c; /* Red for hover effect */
}

.main-content {
  flex-grow: 1; /* Make main content fill remaining space */
  padding: 20px;
  background-color: #f5f5f5;
  overflow-y: auto;
}
</style>
