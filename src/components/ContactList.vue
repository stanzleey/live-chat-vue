<template>
  <div
    class="flex flex-col h-screen px-3 py-4 bg-transparent w-full max-w-md mx-auto overflow-hidden relative"
  >
    <!-- Chat Title with Add Chat Button -->
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-lg font-semibold text-gray-800">Chat</h3>
      <button
        @click="addChat"
        class="bg-blue-500 text-white text-sm px-3 py-2 rounded-lg transition hover:bg-blue-700"
      >
        <i class="fas fa-plus"></i>
      </button>
    </div>

    <!-- Search Bar -->
    <input
      type="text"
      v-model="searchTerm"
      placeholder="Search contacts..."
      class="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg text-sm shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    <!-- Button Group -->
    <div class="flex items-center space-x-2 mb-4">
      <button
        @click="setActiveMenu('semua')"
        :class="{
          'bg-blue-500 text-white': activeMenu === 'semua',
          'bg-white text-black': activeMenu !== 'semua',
        }"
        class="text-sm px-3 py-2 rounded-lg transition hover:bg-blue-700 hover:text-white"
      >
        Semua
      </button>
      <button
        @click="setActiveMenu('belum-dibaca')"
        :class="{
          'bg-blue-500 text-white': activeMenu === 'belum-dibaca',
          'bg-white text-black': activeMenu !== 'belum-dibaca',
        }"
        class="text-sm px-3 py-2 rounded-lg transition hover:bg-blue-700 hover:text-white"
      >
        Belum dibaca
      </button>
      <button
        @click="setActiveMenu('group')"
        :class="{
          'bg-blue-500 text-white': activeMenu === 'group',
          'bg-white text-black': activeMenu !== 'group',
        }"
        class="text-sm px-3 py-2 rounded-lg transition hover:bg-blue-700 hover:text-white"
      >
        Group
      </button>
    </div>

    <!-- Contact List -->
    <div class="flex-1">
      <ul>
        <li
          v-for="contact in filteredContacts"
          :key="contact.id"
          @click="selectContact(contact)"
          :class="[
            'flex items-center px-4 py-3 bg-white rounded-lg transition mb-2 border-b border-gray-200 hover:bg-blue-100 cursor-pointer',
            {
              'bg-gray-100 font-bold text-white':
                activeContactId === contact.id,
            },
          ]"
        >
          <!-- Profile Photo -->
          <img
            :src="contact.profilePhoto"
            alt="Profile Photo"
            class="w-10 h-10 rounded-full mr-3 border-2 border-gray-300"
          />

          <!-- Contact Info -->
          <div class="flex flex-col flex-1 relative">
            <span class="font-medium text-sm text-gray-800 truncate">{{
              contact.name
            }}</span>
            <span class="text-xs text-gray-500 mt-1 truncate">{{
              contact.message
            }}</span>
            <span class="absolute top-0 right-0 text-xs text-gray-400">{{
              contact.lastMessageTime
            }}</span>
          </div>
        </li>
      </ul>
    </div>

    <!-- Add Message Floating Button -->
    <!-- <button
      @click="addMessage"
      class="absolute bottom-4 right-4 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg shadow-lg hover:bg-blue-700 transition"
    >
      +
    </button> -->
  </div>
</template>

<script>
export default {
  name: "ContactList",
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeContactId: null,
      searchTerm: "",
      activeMenu: "semua", // Default active menu
    };
  },
  computed: {
    filteredContacts() {
      return this.contacts.filter((contact) =>
        contact.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
  },
  methods: {
    selectContact(contact) {
      this.activeContactId = contact.id;
      this.$emit("contact-selected", contact);
    },
    addMessage() {
      alert("Add message functionality here.");
    },
    setActiveMenu(menu) {
      this.activeMenu = menu;
    },
  },
};
</script>
