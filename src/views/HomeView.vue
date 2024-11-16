<template>
  <div class="home-container">
    <div class="content">
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: white;
  color: black;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.content {
  width: 100%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 20px;
  border-radius: 0;
}

h1 {
  font-size: 3rem;
  margin-bottom: 10px;
}

p {
  font-size: 1.5rem;
  margin: 0;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.2rem;
  }

  .content {
    padding: 15px 20px;
  }
}
</style>
