<template>
  <div class="product-list">
    <div v-for="product in products" :key="product.id" class="product-item">
      <img :src="product.image" alt="Product Image" />
      <div class="product-info">
        <h4>{{ product.name }}</h4>
        <p>{{ product.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Kaos Polos Ada Tulisan dikit",
          price: "Rp50.000",
          image: "/product1.jpg",
        },
        {
          id: 2,
          name: "Kaos Polos Pria All Size",
          price: "Rp50.000",
          image: "/product2.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.product-list {
  display: flex;
  flex-direction: column;
}
.product-item {
  display: flex;
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  align-items: center;
}
.product-item img {
  width: 50px;
  height: 50px;
}
.product-info {
  margin-left: 10px;
}
</style>
