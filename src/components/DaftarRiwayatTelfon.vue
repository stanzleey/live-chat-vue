<template>
  <div class="call-history">
    <h2>Customer Call History</h2>
    <ul>
      <li
        v-for="call in calls"
        :key="call.id"
        @click="viewCallDetail(call)"
        class="call-item"
      >
        <div class="call-info">
          <p>
            <strong>{{ call.customerName }}</strong>
          </p>
          <p>{{ call.date }} - {{ call.time }}</p>
        </div>
        <div class="call-type" :class="call.type">
          {{ call.type === "incoming" ? "Incoming" : "Outgoing" }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DaftarRiwayatTelfon",
  props: {
    calls: {
      type: Array,
      required: true,
    },
  },
  methods: {
    viewCallDetail(call) {
      this.$emit("view-detail", call); // Emit selected call data to parent
    },
  },
};
</script>

<style scoped>
.call-history {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}

.call-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #e0e0e0;
  cursor: pointer;
  transition: background 0.3s ease;
}

.call-item:hover {
  background: #f1f1f1;
}

.call-info p {
  margin: 0;
  font-size: 16px;
}

.call-type {
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  font-size: 14px;
}

.call-type.incoming {
  background-color: #4caf50;
}

.call-type.outgoing {
  background-color: #f44336;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .call-history {
    padding: 15px;
  }

  .call-item {
    padding: 12px;
    flex-direction: column;
    align-items: flex-start;
  }

  .call-info p {
    font-size: 14px;
  }

  .call-type {
    margin-top: 8px;
    font-size: 13px;
  }

  h2 {
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .call-history {
    padding: 10px;
  }

  .call-info p {
    font-size: 13px;
  }

  .call-type {
    font-size: 12px;
    padding: 4px 8px;
  }

  h2 {
    font-size: 18px;
  }
}
</style>
