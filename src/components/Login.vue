<template>
  <div class="flex items-center min-h-screen px-4 bg-gray-50">
    <!-- Left Decoration -->
    <div class="hidden lg:block w-1/2 p-4 ml-28">
      <img
        :src="require('@/assets/images/maxnet.png')"
        alt="Decorative Illustration"
        class="mx-auto w-3/4"
      />
      <h3 class="text-2xl font-semibold text-gray-700 mt-6 text-center">
        Welcome Back!
      </h3>
      <p class="text-gray-500 text-center mt-2">
        Login to access your account and explore new possibilities.
      </p>
    </div>

    <!-- Login Box -->
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-xs lg:w-1/3">
      <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h2>
      <form @submit.prevent="login" class="space-y-4">
        <input
          type="text"
          v-model="username"
          placeholder="Username"
          required
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          required
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          class="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Login
        </button>
        <p v-if="error" class="text-red-500 text-sm text-center mt-2">
          {{ error }}
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginChat",
  data() {
    return {
      username: "",
      password: "",
      error: "",
    };
  },
  methods: {
    login() {
      const hardcodedUsername = "admin";
      const hardcodedPassword = "password123";

      if (
        this.username === hardcodedUsername &&
        this.password === hardcodedPassword
      ) {
        this.$router.push("/chat");
      } else {
        this.error = "Invalid username or password";
      }
    },
  },
};
</script>

<style scoped>
/* No custom CSS needed; everything is handled by Tailwind classes */
</style>
