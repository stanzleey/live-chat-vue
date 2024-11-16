<template>
  <div>
    <UserProfile
      :profilePicture="require('@/assets/images/profil 1.jpg')"
      :backgroundImage="require('@/assets/logo.png')"
      name="John Doe"
      email="johndoe@example.com"
    />
  </div>
</template>

<script>
import UserProfile from "@/components/UserProfile.vue";

export default {
  components: {
    UserProfile,
  },
};
</script>

<style>
/* Global styles to ensure full width and reset any body padding/margin */
body {
  margin: 0;
  padding: 0;
}
</style>
