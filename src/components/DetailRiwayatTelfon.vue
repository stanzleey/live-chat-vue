<template>
  <div v-if="call" class="call-detail">
    <button @click="closeDetail" class="close-btn">Close</button>
    <h3>Call Detail for {{ call.customerName }}</h3>
    <p><strong>Date:</strong> {{ call.date }}</p>
    <p><strong>Time:</strong> {{ call.time }}</p>
    <p>
      <strong>Type:</strong>
      {{ call.type === "incoming" ? "Incoming" : "Outgoing" }}
    </p>
    <p><strong>Duration:</strong> {{ call.duration }} minutes</p>
    <p><strong>Notes:</strong> {{ call.notes }}</p>
  </div>
</template>

<script>
export default {
  name: "ViewRiwayatTelfon",
  props: {
    call: {
      type: Object,
      required: false,
    },
  },
  methods: {
    closeDetail() {
      this.$emit("close-detail");
    },
  },
};
</script>

<style scoped>
.call-detail {
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: left;
  position: relative;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #f44336;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.close-btn:hover {
  background: #d32f2f;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .call-detail {
    padding: 15px;
    font-size: 14px;
  }

  .close-btn {
    padding: 5px;
    font-size: 12px;
  }

  .call-detail h3 {
    font-size: 18px;
  }

  .call-detail p {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .call-detail {
    padding: 10px;
    font-size: 12px;
  }

  .close-btn {
    padding: 4px;
    font-size: 10px;
  }

  .call-detail h3 {
    font-size: 16px;
  }

  .call-detail p {
    font-size: 12px;
  }
}
</style>
