import axios from "axios";

const cart = {
    namespaced: true,
    state: {
        cart: []
    },
    getters: {
        getCart: (state) => state.cart,
    },
    actions: {
        async fetchCart({ commit }) {
            try {
                // const token = localStorage.getItem('token');
                const dataCart = await axios.post(
                    "https://ecommerce.olipiskandar.com/api/v1/carts", {
                    "temp_user_id": null
                }, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                }

                );
                console.log(dataCart.data.cart_items.data)
                commit("SET_CART", dataCart.data.cart_items.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },

        
    },
    mutations: {
        SET_CART(state, cart) {
            state.cart = cart;
        }
    },
};
export default cart;