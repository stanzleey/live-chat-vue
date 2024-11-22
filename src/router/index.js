import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login.vue";
import ContactList from "../components/ContactList.vue";
import Customer from "../views/CustomerView.vue";
import Dashboard from "../views/Dashboard.vue";

const routes = [
  { path: "/", component: Login, name: "Login" },
  { path: "/dashboard", component: Dashboard, name: "Dashboard" },
  { path: "/chat", component: Customer, name: "Customer" },
  { path: "/contactlist", component: ContactList, name: "ContactList" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
