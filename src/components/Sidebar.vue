<template>
  <div :class="['sidebar', { mobile: isMobile }]">
    <!-- Profile Picture Section -->
    <div v-if="!isMobile" class="profile">
      <img :src="profileImage" alt="Profile" class="profile-img" />
    </div>

    <ul class="menu">
      <li>
        <router-link to="/chat" class="menu-item" active-class="active-item">
          <i class="fab fa-whatsapp" title="Chat"></i>
          <span v-if="unreadChats > 0" class="badge">{{ unreadChats }}</span>
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
      profileImage: require("@/assets/logo.png"),
      unreadChats: 5,
      isMobile: false, // Detect mobile view
    };
  },
  methods: {
    fetchUnreadChats() {
      setTimeout(() => {
        this.unreadChats = Math.floor(Math.random() * 10);
      }, 1000);
    },
    checkMobileView() {
      this.isMobile = window.innerWidth <= 768;
    },
  },
  mounted() {
    this.fetchUnreadChats();
    this.checkMobileView();
    window.addEventListener("resize", this.checkMobileView);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkMobileView);
  },
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 60px;
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
  transition: all 0.3s ease-in-out;
}

.sidebar.mobile {
  flex-direction: row;
  bottom: 0;
  top: auto;
  width: 100%;
  height: 60px;
  padding: 0;
  justify-content: space-evenly;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
}

.profile {
  margin-bottom: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.menu,
.logout {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sidebar.mobile .menu,
.sidebar.mobile .logout {
  flex-direction: row;
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

.sidebar.mobile .menu-item {
  margin: 0 10px; /* Tambahkan jarak antar menu-item */
  padding: 5px 8px; /* Sesuaikan padding untuk elemen */
  flex: 1; /* Elemen akan menyebar secara merata */
  text-align: center; /* Tengah elemen */
}

i {
  font-size: 20px;
}

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

.menu-item:hover .tooltip {
  opacity: 1;
  visibility: visible;
}

.badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: red;
  color: white;
  font-size: 12px;
  font-weight: bold;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.active-item {
  background-color: #0056b3;
  color: #ffffff;
  border-left: 4px solid #ffd700;
}

.sidebar.mobile .active-item {
  border-left: none;
  border-top: 4px solid #ffd700;
}

.menu-item:hover {
  background-color: rgba(0, 86, 179, 0.1);
  transform: scale(1.1);
}

.menu-item:active {
  background-color: #0056b3;
  color: #ffffff;
}

@media (max-width: 768px) {
  .tooltip {
    display: none;
  }
}
</style>
