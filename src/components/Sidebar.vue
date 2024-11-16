<template>
  <div class="sidebar">
    <!-- Profile Picture Section -->
    <div class="profile">
      <!-- Import the image using relative path -->
      <img :src="profileImage" alt="Profile" class="profile-img" />
    </div>

    <ul class="menu">
      <li>
        <router-link to="/chat" class="menu-item" active-class="active-item">
          <i class="fab fa-whatsapp" title="Chat"></i>
          <span class="tooltip">Chat</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/customer"
          class="menu-item"
          active-class="active-item"
        >
          <i class="fab fa-telegram-plane" title="Customer"></i>
          <span class="tooltip">Customer</span>
        </router-link>
      </li>
      <li>
        <router-link to="/profil" class="menu-item" active-class="active-item">
          <i class="fab fa-instagram" title="Profil"></i>
          <span class="tooltip">Profil</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/riwayat_telfon"
          class="menu-item"
          active-class="active-item"
        >
          <i class="fas fa-phone" title="Riwayat Telfon"></i>
          <span class="tooltip">Riwayat Telfon</span>
        </router-link>
      </li>
    </ul>
    <ul class="logout">
      <li>
        <router-link to="/" class="menu-item" active-class="active-item">
          <i class="fas fa-sign-out-alt" title="Logout"></i>
          <span class="tooltip">Logout</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SidebarComponent",
  data() {
    return {
      // Set the path to the image located in the assets folder
      profileImage: require("@/assets/logo.png"), // Assuming the image is named profile.jpg
    };
  },
};
</script>

<style scoped>
/* Sidebar container */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 60px; /* Narrower width */
  height: 100vh;
  background: #f0f0f0;
  color: #333;
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  z-index: 100;
  font-family: Arial, sans-serif;
  align-items: center;
}

/* Profile picture section */
.profile {
  margin-bottom: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

/* Menu list styling for sidebar */
ul.menu,
ul.logout {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin: 15px 0;
  font-size: 16px;
}

.menu-item {
  color: #0056b3;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.1s ease;
  width: 100%;
  position: relative;
}

/* Icon styling */
i {
  font-size: 28px; /* Increase the size of the icons */
}

/* Tooltip styling */
.tooltip {
  position: absolute;
  left: 60px;
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-50%);
  transition: opacity 0.3s ease;
}

/* Show tooltip on hover */
.menu-item:hover .tooltip {
  opacity: 1;
  visibility: visible;
}

/* Active item styling */
.active-item {
  background-color: #0056b3;
  color: #ffffff;
  border-left: 4px solid #ffd700;
}

/* Hover effect for menu items */
.menu-item:hover {
  background-color: rgba(0, 86, 179, 0.1);
  transform: scale(1.1);
}

/* Click effect */
.menu-item:active {
  background-color: #0056b3;
  color: #ffffff;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .sidebar {
    width: 50px;
  }
}
</style>
