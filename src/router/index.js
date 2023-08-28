import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue"
import Home from "../views/Home.vue";
import Produk from "../views/Produk.vue"
import Contact from "../views/Contact.vue";
import Cart from "../views/Cart.vue";
import Checkout from "../views/Checkout.vue";
import Brands from "../views/Brands.vue";
import Category from "../views/Category.vue";
import SingleProduk from "../views/SingleProduk.vue";
import Profile from "../views/Profile.vue";
import PageOrder from "../views/PageOrder.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        
    },
    {
        path: "/produk",
        name: "Produk",
        component: Produk,
      
    },
    {
        path: '/produk/:slug',
        name: 'SingleProduk',
        component: SingleProduk
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart,
        meta: { requiresLogin: false },
      },
    {
        path: "/checkout",
        name: "Checkout",
        component: Checkout,
        meta: { requiresLogin: false },
    },
  
    {
        path: "/profile",
        name: "Profile",
        beforeEnter: cekToken,
        component: Profile,
        
    },
    {
        path: "/brands",
        name: "Brands",
        component: Brands,
       
    },
    {
        path: "/category",
        name: "Category",
        component: Category,
        
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
       
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
      
    },
    {
        path: "/kontak",
        name: "Contact",
        component: Contact,
      
    },
    {
        path:"/order/:orderCode",
        name: "PageOrder",
        component: PageOrder,
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
function cekToken(to, from, next) {
    var isAuthenticated = false;
    if (localStorage.getItem("token")) isAuthenticated = true;
    else isAuthenticated = false;
    if (isAuthenticated) {
      next();
    } else {
      next("/login");
    }
  }
export default router;