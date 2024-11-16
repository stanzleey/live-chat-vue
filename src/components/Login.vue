<template>
  <div class="login-container">
    <div class="login-box">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <input type="text" v-model="username" placeholder="Username" required />
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
        <p v-if="error" class="error-message">{{ error }}</p>
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
        this.$router.push("/dashboard");
      } else {
        this.error = "Invalid username or password";
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 600px;
  display: flex;
  justify-content: flex-end; /* Menggeser konten ke kanan */
  align-items: center;
  height: 100vh;
  padding-right: 100px; /* Memberikan jarak dari sisi kanan */
}

.login-box {
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 300px;
}

h2 {
  margin-bottom: 20px;
  font-family: "Arial", sans-serif;
  color: #333;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  font-family: "Arial", sans-serif;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.05);
}

button {
  width: 100%;
  padding: 12px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  font-family: "Arial", sans-serif;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}

@media (max-width: 768px) {
  .login-box {
    width: 90%;
    padding: 20px;
  }
}
</style>
