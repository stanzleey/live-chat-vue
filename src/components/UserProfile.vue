<template>
  <div class="profile-container">
    <div
      class="profile-header"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
      <div class="overlay"></div>
      <div class="profile-image-container">
        <img
          :src="profilePicture"
          alt="Profile Picture"
          class="profile-image"
        />
      </div>
      <h2 class="profile-name">{{ name }}</h2>
      <p class="profile-email">{{ email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  props: {
    profilePicture: {
      type: String,
      required: true,
    },
    backgroundImage: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Full-width profile container aligned to the top */
.profile-container {
  width: 100vw;
  margin-left: 35px;
}
/* Profile header with background image and gradient overlay */
.profile-header {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 300px;
  color: white;
  text-align: center;
  padding-top: 60px;
  overflow: hidden;
  /* border-radius: 0 0 20px 20px; */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5));
  z-index: 1;
}

.profile-image-container {
  position: relative;
  border: 4px solid white;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  margin-top: -50px;
  overflow: hidden;
  z-index: 2;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
}

.profile-image {
  width: 100%;
  height: auto;
  border-radius: 50%;
  object-fit: cover;
}

.profile-name {
  margin: 15px 0 5px;
  font-size: 1.8rem;
  font-weight: 600;
  z-index: 2;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
}

.profile-email {
  font-size: 1.2rem;
  opacity: 0.85;
  z-index: 2;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
}
</style>
