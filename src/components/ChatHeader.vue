<template>
  <div class="chat-header d-flex align-items-center p-3 bg-light">
    <img :src="avatar" alt="avatar" class="rounded-circle me-3" width="45" />
    <div>
      <h6 class="mb-0">{{ name }}</h6>
      <span class="text-muted small">{{ status }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.chat-header {
  border-bottom: 1px solid #ddd;
}
</style>
