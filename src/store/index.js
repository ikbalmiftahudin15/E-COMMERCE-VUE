import { createStore } from 'vuex';
import auth from './modules/auth';
import brands from './modules/brands';
import category from './modules/category';
import product from './modules/product';
import user from './modules/user';
import cart  from './modules/cart';


const store = createStore({
  state: {
    isLoading: true,
  },
  modules: {
    auth,
    brands,
    category,
    product,
    user,
    cart
  },
});

export default store;