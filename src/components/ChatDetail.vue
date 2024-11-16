<template>
  <div v-if="contact" class="contact-detail-container">
    <!-- Profile Photo -->
    <div class="contact-photo">
      <img
        :src="contact.photo"
        alt="Profile Photo"
        class="large-profile-photo"
      />
    </div>

    <!-- Contact Information -->
    <div class="contact-info">
      <h2 class="contact-name">{{ contact.name }}</h2>
      <p class="contact-status">
        {{ contact.status || "No status available" }}
      </p>
      <p class="contact-email">{{ contact.email || "No email available" }}</p>
      <p class="contact-phone">{{ contact.phone || "No phone available" }}</p>
    </div>

    <!-- Actions -->
    <div class="contact-actions">
      <button @click="sendMessage(contact)" class="action-button">
        <i class="fas fa-comments"></i> Message
      </button>
      <button @click="editContact(contact)" class="action-button">
        <i class="fas fa-edit"></i> Edit
      </button>
      <button @click="deleteContact(contact)" class="action-button delete">
        <i class="fas fa-trash-alt"></i> Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactDetail",
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
  methods: {
    sendMessage(contact) {
      alert(`Opening message interface for ${contact.name}`);
    },
    editContact(contact) {
      alert(`Editing details for ${contact.name}`);
    },
    deleteContact(contact) {
      if (confirm(`Are you sure you want to delete ${contact.name}?`)) {
        this.$emit("delete-contact", contact);
      }
    },
  },
};
</script>

<style scoped>
.contact-detail-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.contact-photo {
  margin-bottom: 16px;
}

.large-profile-photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  border: 3px solid #ddd;
}

.contact-info {
  text-align: center;
  margin-bottom: 20px;
}

.contact-name {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin: 8px 0;
}

.contact-status,
.contact-email,
.contact-phone {
  font-size: 16px;
  color: #666;
}

.contact-actions {
  display: flex;
  gap: 10px;
}

.action-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: #fff;
  background-color: #007bff;
  transition: background-color 0.2s;
}

.action-button i {
  margin-right: 6px;
}

.action-button:hover {
  background-color: #0056b3;
}

.action-button.delete {
  background-color: #dc3545;
}

.action-button.delete:hover {
  background-color: #c82333;
}
</style>
