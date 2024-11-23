<template>
  <div
    :class="[
      isMobile
        ? 'fixed bottom-0 left-0 w-full h-16 flex flex-row justify-evenly bg-gray-100 shadow-md z-50'
        : 'fixed top-0 left-0 w-16 h-screen flex flex-col items-center bg-gray-100 shadow-md z-50',
    ]"
  >
    <!-- Profile Picture Section -->
    <div v-if="!isMobile" class="mb-4 w-10 h-10 rounded-full overflow-hidden">
      <img
        :src="profileImage"
        alt="Profile"
        class="w-full h-full object-cover"
      />
    </div>

    <ul
      :class="[
        isMobile ? 'flex flex-row justify-evenly w-full' : 'flex flex-col',
      ]"
    >
      <li class="relative">
        <router-link
          to="/chat"
          class="group flex items-center justify-center w-full py-2 text-blue-600 hover:bg-blue-50 transition mt-1"
        >
          <i
            :class="['fab fa-whatsapp', isMobile ? 'text-3xl' : 'text-xl']"
          ></i>
          <span
            v-if="unreadChats > 0"
            class="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center mt-2"
            >{{ unreadChats }}</span
          >
          <span
            v-if="!isMobile"
            class="absolute left-14 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition"
            >Chat</span
          >
        </router-link>
      </li>
      <li>
        <router-link
          to="/customer"
          class="group flex items-center justify-center w-full py-2 text-blue-600 hover:bg-blue-50 transition"
        >
          <i
            :class="[
              'fab fa-telegram-plane mt-1',
              isMobile ? 'text-3xl' : 'text-xl',
            ]"
          ></i>
          <span
            v-if="!isMobile"
            class="absolute left-14 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition"
            >Customer</span
          >
        </router-link>
      </li>
      <li>
        <router-link
          to="/profil"
          class="group flex items-center justify-center w-full py-2 text-blue-600 hover:bg-blue-50 transition mt-1"
        >
          <i
            :class="['fab fa-instagram', isMobile ? 'text-3xl' : 'text-xl']"
          ></i>
          <span
            v-if="!isMobile"
            class="absolute left-14 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition"
            >Profil</span
          >
        </router-link>
      </li>
      <li>
        <router-link
          to="/riwayat_telfon"
          class="group flex items-center justify-center w-full py-2 text-blue-600 hover:bg-blue-50 transition mt-1"
        >
          <i :class="['fas fa-phone', isMobile ? 'text-3xl' : 'text-xl']"></i>
          <span
            v-if="!isMobile"
            class="absolute left-14 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition"
            >Riwayat Telfon</span
          >
        </router-link>
      </li>
      <li>
        <router-link
          to="/"
          class="group flex items-center justify-center w-full py-2 text-blue-600 hover:bg-blue-50 transition mt-1"
        >
          <i
            :class="['fas fa-sign-out-alt', isMobile ? 'text-3xl' : 'text-xl']"
          ></i>
          <span
            v-if="!isMobile"
            class="absolute left-14 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition"
            >Logout</span
          >
        </router-link>
      </li>
    </ul>

    <ul :class="[isMobile ? 'hidden' : 'flex mt-auto flex-col']">
      <!-- <li>
        <router-link
          to="/"
          class="group flex items-center justify-center w-full py-2 text-blue-600 hover:bg-blue-50 transition"
        >
          <i
            :class="['fas fa-sign-out-alt', isMobile ? 'text-3xl' : 'text-xl']"
          ></i>
          <span
            v-if="!isMobile"
            class="absolute left-14 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition"
            >Logout</span
          >
        </router-link>
      </li> -->
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
/* Tidak perlu gaya tambahan karena menggunakan Tailwind CSS */
</style>
