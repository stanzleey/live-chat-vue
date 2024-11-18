<template>
  <div class="profile-container">
    <div class="contact-profile">
      <div class="profile-header">
        <img :src="contact.photo" alt="Profile Photo" class="profile-photo" />
        <div class="profile-info">
          <h3 class="contact-name">{{ contact.name }}</h3>
          <p class="contact-id"><strong>ID:</strong> {{ contact.id }}</p>
          <p class="contact-email">
            <strong>Email:</strong> {{ contact.email }}
          </p>
          <p class="contact-phone">
            <strong>Phone:</strong> {{ contact.phone }}
          </p>
          <p class="contact-address">
            <strong>Address:</strong> {{ contact.address }}
          </p>
        </div>
      </div>
      <div
        class="package-info"
        :style="{ backgroundColor: getPackageColor(contact.package) }"
      >
        <p><strong>Internet Package:</strong> {{ contact.package }}</p>
        <p><strong>Status:</strong> {{ contact.status }}</p>
      </div>
      <!-- Button for Logout -->
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactProfile",
  data() {
    return {
      contact: {
        name: "John Doe",
        id: "12345",
        email: "johndoe@example.com",
        phone: "+1234567890",
        address: "123 Main Street, Cityville, ST 54321",
        package: "Premium",
        status: "Active",
        photo: "https://example.com/photo.jpg",
      },
    };
  },
  methods: {
    getPackageColor(packageType) {
      switch (packageType) {
        case "Basic":
          return "linear-gradient(135deg, #a8e063, #56ab2f)";
        case "Premium":
          return "linear-gradient(135deg, #ffd966, #ffa726)";
        case "Ultimate":
          return "linear-gradient(135deg, #f28b82, #d32f2f)";
        default:
          return "linear-gradient(135deg, #e0e0e0, #9e9e9e)";
      }
    },
    logout() {
      // Perform logout logic here
      alert("Anda telah keluar!");
    },
  },
};
</script>

<style scoped>
/* Styling existing components omitted for brevity */
.profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4; /* Added light background for contrast */
}
.contact-profile {
  background: #ffffff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-profile:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.profile-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
}

.profile-photo {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.profile-info {
  text-align: center;
}

.contact-name {
  font-size: 1.6rem;
  margin: 0;
  color: #333;
  font-weight: 600;
}

.contact-id,
.contact-email,
.contact-phone,
.contact-address {
  font-size: 1rem;
  color: #666;
  margin-top: 5px;
}

.package-info {
  width: 100%;
  text-align: center;
  padding: 12px;
  color: #fff;
  font-weight: bold;
  border-radius: 8px;
  margin-top: 15px;
  background-size: 200% 200%;
  animation: gradient-animation 4s ease infinite;
}

.logout-button {
  background-color: #d32f2f;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 20px;
  width: 100%;
  transition: background-color 0.3s ease;
}

.logout-button:hover {
  background-color: #b71c1c;
}

.logout-button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(211, 47, 47, 0.4);
}

@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@media (max-width: 600px) {
  .contact-profile {
    max-width: 100%;
    padding: 15px;
  }

  .profile-photo {
    width: 70px;
    height: 70px;
  }

  .contact-name {
    font-size: 1.3rem;
  }

  .contact-id,
  .contact-email,
  .contact-phone,
  .contact-address {
    font-size: 0.85rem;
  }

  .package-info {
    font-size: 1rem;
    padding: 10px;
  }
}
</style>
