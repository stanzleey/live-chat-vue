<template>
  <div class="sidebar bg-white p-3">
    <ul class="contact-list">
      <li
        v-for="(contact, index) in contacts"
        :key="index"
        class="contact-item d-flex align-items-center p-2"
        @click="selectContact(contact)"
      >
        <img
          :src="contact.avatar"
          alt="avatar"
          class="rounded-circle me-3"
          width="45"
        />
        <div class="contact-info">
          <span class="contact-name">{{ contact.name }}</span>
          <small class="text-muted">Last seen recently</small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SidebarComponent",
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
  methods: {
    selectContact(contact) {
      this.$emit("select-contact", contact);
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 300px; /* Sedikit lebih lebar agar tampak proporsional */
  height: 100vh;
  border-right: 1px solid #ddd;
  overflow-y: auto;
}

.contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-item {
  cursor: pointer;
  transition: background-color 0.2s ease;
  border-radius: 10px;
}

.contact-item:hover {
  background-color: #f0f0f5; /* Warna hover yang halus */
}

.contact-info {
  display: flex;
  flex-direction: column;
}

.contact-name {
  font-weight: 500;
  color: #333;
  font-size: 1rem;
}

.contact-item img {
  border: 2px solid #0084ff; /* Tambahkan border biru ala Messenger di avatar */
  width: 50px;
  height: 50px;
}

.contact-info small {
  font-size: 0.85rem;
  color: #aaa; /* Warna teks terakhir dilihat */
}
</style>
