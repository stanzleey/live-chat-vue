<template>
  <div class="customer-card" @click="selectCustomer">
    <img :src="customer.image" alt="Customer Image" class="customer-image" />
    <div class="customer-info">
      <h3>{{ customer.name }}</h3>
      <p>
        Status: <strong>{{ customer.status }}</strong>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomerCard",
  props: {
    customer: {
      type: Object,
      required: true,
    },
  },
  methods: {
    selectCustomer() {
      this.$emit("customer-selected", this.customer); // Emit event when the card is clicked
    },
  },
};
</script>

<style scoped>
.customer-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px; /* Reduced padding for a more compact look */
  cursor: pointer;
  transition: box-shadow 0.2s, transform 0.2s; /* Added transform transition */
  text-align: center;
  width: 150px; /* Set a fixed width for a consistent card size */
  margin: 0 auto; /* Center the card */
}

.customer-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px); /* Slight lift effect on hover */
}

.customer-image {
  width: 50px; /* Smaller image size */
  height: 50px; /* Smaller image size */
  border-radius: 50%;
  margin-bottom: 8px; /* Reduced margin */
}

.customer-info h3 {
  margin: 0;
  font-size: 1rem; /* Smaller font size */
}

.customer-info p {
  margin: 4px 0 0; /* Reduced margin */
  font-size: 0.9rem; /* Slightly smaller font size for status */
}
</style>
