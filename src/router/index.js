import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login.vue";
import ContactList from "../components/ContactList.vue";
import Customer from "../views/CustomerView.vue";

const routes = [
  { path: "/", component: Login, name: "Login" },
  { path: "/chat", component: Customer, name: "Customer" },
  { path: "/contactlist", component: ContactList, name: "ContactList" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
