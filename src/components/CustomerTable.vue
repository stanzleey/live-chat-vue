<template>
  <div class="customer-table">
    <h1>Daftar Customer</h1>
    <table>
      <thead>
        <tr>
          <th>Nama Customer</th>
          <th>Email</th>
          <th>Telepon</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="customer in customers"
          :key="customer.id"
          @mouseover="highlightRow($event)"
          @mouseleave="removeHighlight($event)"
        >
          <td>{{ customer.name }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.phone }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customers: [
        {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          phone: "123-456-7890",
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane@example.com",
          phone: "098-765-4321",
        },
        {
          id: 3,
          name: "Alice Johnson",
          email: "alice@example.com",
          phone: "555-123-4567",
        },
        {
          id: 4,
          name: "Bob Brown",
          email: "bob@example.com",
          phone: "444-987-6543",
        },
      ],
    };
  },
  methods: {
    highlightRow(event) {
      event.currentTarget.style.backgroundColor = "#e0f7fa";
    },
    removeHighlight(event) {
      event.currentTarget.style.backgroundColor = "";
    },
  },
};
</script>

<style scoped>
.customer-table {
  margin: 20px;
  margin-left: 220px;
  font-family: Arial, sans-serif;
  color: #333;
}

.customer-table h1 {
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
}

table {
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

th,
td {
  padding: 12px 15px;
  text-align: left;
}

th {
  background-color: #009688;
  color: white;
  font-weight: 600;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

tbody tr:hover {
  background-color: #e0f7fa;
  cursor: pointer;
  transition: background-color 0.3s;
}

td {
  border-bottom: 1px solid #ddd;
  font-size: 0.9rem;
  color: #555;
}
</style>
