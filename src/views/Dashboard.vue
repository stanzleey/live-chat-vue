<template>
  <div class="dashboard-container">
    <header class="topbar">
      <h2>Welcome to Your Dashboard</h2>
    </header>
    <section class="content">
      <h3>Main Content Area</h3>
      <p>This is where you can place your main dashboard content.</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "DashboardChat",
  methods: {
    logout() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
/* Dashboard container */
.dashboard-container {
  margin-left: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

/* Topbar styling */
.topbar {
  width: 100%;
  max-width: 700px;
  padding: 20px;
  background-color: #4caf50;
  color: #fff;
  text-align: center;
  border-radius: 10px;
  font-family: "Arial", sans-serif;
  font-size: 24px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  transition: transform 0.3s ease;
}

.topbar:hover {
  transform: scale(1.02);
}

/* Main content styling */
.content {
  max-width: 600px;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.content:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.content h3 {
  font-family: "Arial", sans-serif;
  color: #333;
  margin-bottom: 10px;
}

.content p {
  color: #666;
  font-size: 16px;
  line-height: 1.6;
}

/* Media Queries */
@media (max-width: 768px) {
  .dashboard-container {
    padding: 10px;
  }

  .topbar {
    font-size: 20px;
    padding: 15px;
  }

  .content {
    padding: 20px;
    width: 90%;
  }
}
</style>
