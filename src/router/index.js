import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login.vue";
// import Dashboard from "../views/Dashboard.vue";
import CustomerTable from "../components/CustomerTable.vue";
// import ChatMessages from "../views/ChatView.vue";
import Customer from "../views/CustomerView.vue";
import Profil from "../views/ProfileView.vue";
import Dashboard from "../views/Dashboard.vue";
import RiwayatTelfon from "../views/RiwayatTelfonView.vue";
// import ChatList from "../components/ChatList.vue";

// import About from '../views/About.vue'
// import Contact from '../views/Contact.vue'

const routes = [
  { path: "/", component: Login, name: "Login" },
  // { path: "/dashboard", component: Dashboard, name: "Dashboard" },
  // { path: "/home", component: Home, name: "Home" },
  { path: "/dashboard", component: Dashboard, name: "Dashboard" },
  { path: "/chat", component: Customer, name: "Customer" },
  { path: "/customer", component: CustomerTable, name: "CustomerTable" },
  { path: "/profil", component: Profil, name: "Profil" },
  { path: "/riwayat_telfon", component: RiwayatTelfon, name: "RiwayatTelfon" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
