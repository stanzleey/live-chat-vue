<template>
  <div class="profile-popup">
    <h3>{{ contact.name }}</h3>
    <p>{{ contact.status }}</p>
    <button @click="startCall">Start Call</button>
    <button @click="$emit('close')">Close</button>
  </div>
</template>

<script>
export default {
  props: {
    contact: Object,
  },
  methods: {
    startCall() {
      console.log("Starting call with", this.contact.name);
    },
  },
};
</script>

<style scoped>
.profile-popup {
  position: absolute;
  background: white;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
}
</style>
