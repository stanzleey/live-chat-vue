<template>
  <div class="flex justify-center items-center bg-gray-100 min-h-screen">
    <div
      class="bg-white rounded-lg flex flex-col items-center w-full max-w-md p-6 shadow-lg transition-transform duration-300 ease-in-out hover:translate-y-[-5px] hover:shadow-2xl"
    >
      <!-- Profile Header -->
      <div class="flex flex-col items-center w-full mb-4">
        <img
          :src="contact.photo"
          alt="Profile Photo"
          class="w-24 h-24 rounded-full object-cover mb-4 shadow-md"
        />
        <div class="text-center">
          <h3 class="text-2xl font-semibold text-gray-800">
            {{ contact.name }}
          </h3>
          <p class="text-gray-500 mt-1">
            <strong>ID:</strong> {{ contact.id }}
          </p>
          <p class="text-gray-500 mt-1">
            <strong>Email:</strong> {{ contact.email }}
          </p>
          <p class="text-gray-500 mt-1">
            <strong>Phone:</strong> {{ contact.phone }}
          </p>
          <p class="text-gray-500 mt-1">
            <strong>Address:</strong> {{ contact.address }}
          </p>
        </div>
      </div>

      <!-- Package Info -->
      <div
        class="w-full text-center py-3 text-white font-bold rounded-lg mt-4"
        :style="{ background: getPackageColor(contact.package) }"
      >
        <p><strong>Internet Package:</strong> {{ contact.package }}</p>
        <p><strong>Status:</strong> {{ contact.status }}</p>
      </div>

      <!-- Logout Button -->
      <button
        class="bg-red-600 text-white w-full py-2 mt-6 rounded-lg font-medium transition-colors hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-400"
        @click="logout"
      >
        Logout
      </button>
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
      alert("Anda telah keluar!");
    },
  },
};
</script>
