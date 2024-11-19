<template>
  <div class="contact-list-container">
    <!-- Chat Title -->
    <h3 class="chat-title">Chat</h3>

    <!-- Search Bar -->
    <input
      type="text"
      v-model="searchTerm"
      placeholder="Search contacts..."
      class="search-bar mt-2"
    />

    <!-- Button Group below the Search Bar -->
    <div class="button-group">
      <button class="action-button" @click="actionOne">Semua</button>
      <button class="action-button" @click="actionTwo">Belum dibaca</button>
      <button class="action-button" @click="actionThree">Group</button>
    </div>

    <!-- Contact List -->
    <div class="contact-list">
      <ul>
        <li
          v-for="contact in filteredContacts"
          :key="contact.id"
          @click="selectContact(contact)"
          :class="[
            'contact-item',
            { 'active-contact': activeContactId === contact.id },
          ]"
        >
          <!-- Profile Photo -->
          <img :src="contact.photo" alt="Profile Photo" class="profile-photo" />

          <!-- Contact Info -->
          <div class="contact-info">
            <span class="contact-name">{{ contact.name }}</span>
          </div>

          <!-- Read Receipt -->
          <div class="contact-actions">
            <span class="read-receipt">
              <i
                :class="contact.read ? 'fas fa-check-double' : 'fas fa-check'"
              ></i>
            </span>
          </div>
        </li>
      </ul>
    </div>
    <!-- Add Message Button as Floating Icon -->
    <button @click="addMessage" class="floating-add-message-button">
      <i class="fas fa-plus"></i>
    </button>
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
    actionOne() {
      alert("Button 1 clicked");
    },
    actionTwo() {
      alert("Button 2 clicked");
    },
    actionThree() {
      alert("Button 3 clicked");
    },
  },
};
</script>

<style scoped>
.chat-title {
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin-bottom: 10px;
}

.contact-list-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 20px;
  background-color: #f9f9f9;
  width: 100%;
  max-width: 450px;
  margin: auto;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
  position: relative;
}

.search-bar {
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 16px;
  background-color: #fff;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
}

.button-group {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  gap: 10px; /* Reduced gap between buttons */
}

.action-button {
  background-color: #a3a3a359;
  font-size: 30px;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 25px; /* Make the buttons more oval */
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  flex: 1; /* Make buttons fill available space equally */
}

.action-button:hover {
  background-color: #0056b3;
}

.contact-list {
  flex: 1;
  /* overflow-y: auto; */
}

.contact-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-item {
  display: flex;
  align-items: center;
  padding: 14px;
  background-color: #fff;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 12px;
  border-bottom: 1px solid #ddd;
}

.contact-item:hover {
  background-color: #e9f5ff;
}

.active-contact {
  background-color: #007bff;
  color: #fff;
  font-weight: bold;
}

.active-contact .contact-name {
  color: #fff;
}

.profile-photo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 16px;
  border: 2px solid #ddd;
}

.contact-info {
  display: flex;
  flex-direction: column;
  flex: 2;
}

.contact-name {
  font-weight: 700;
  font-size: 18px;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.contact-actions {
  display: flex;
  align-items: center;
}

.read-receipt {
  color: #007bff;
  margin-right: 12px;
}

.floating-add-message-button {
  position: absolute;
  bottom: 24px;
  right: 24px;
  width: 60px;
  height: 60px;
  background-color: #007bff;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.floating-add-message-button:hover {
  background-color: #0056b3;
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-list-container {
    padding: 16px;
    max-width: 100%;
  }

  .contact-item {
    padding: 12px;
    flex-direction: column;
    align-items: flex-start;
  }

  .profile-photo {
    width: 45px;
    height: 45px;
  }

  .contact-name {
    font-size: 16px;
  }

  .online-status {
    font-size: 13px;
  }

  .button-group {
    flex-direction: column;
  }

  .action-button {
    width: 100%;
    margin-bottom: 10px;
  }
}

@media (max-width: 480px) {
  .contact-list-container {
    padding: 14px;
    border-radius: 0;
    box-shadow: none;
  }

  .contact-item {
    padding: 10px;
    flex-direction: row;
  }

  .profile-photo {
    width: 40px;
    height: 40px;
  }

  .contact-name {
    font-size: 15px;
  }

  .online-status {
    font-size: 12px;
  }

  .floating-add-message-button {
    width: 55px;
    height: 55px;
    font-size: 26px;
  }

  .action-button {
    font-size: 14px;
  }
}
</style>
