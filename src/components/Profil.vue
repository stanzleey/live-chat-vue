<template>
  <div class="edit-profile">
    <h2>Edit Profile</h2>
    <form @submit.prevent="saveProfile">
      <input type="text" v-model="username" placeholder="Username" />
      <input type="email" v-model="email" placeholder="Email" />
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ProfilEdit",
  data() {
    return {
      username: "JohnDoe",
      email: "john@example.com",
    };
  },
  methods: {
    saveProfile() {
      alert("Profile updated!");
    },
  },
};
</script>

<style>
.edit-profile {
  padding: 20px;
}
input {
  display: block;
  margin: 10px 0;
  padding: 10px;
  width: 100%;
}
button {
  padding: 10px;
  cursor: pointer;
}
</style>
