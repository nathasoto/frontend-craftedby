import { defineStore } from 'pinia';

export const useCartStore = defineStore({
  id: 'cart',
  state: () => {
    const storedData = JSON.parse(localStorage.getItem('cartItems'));
    const expirationTime = localStorage.getItem('cartItemsExpiration');

    // Check if the cart data has expired
    if (expirationTime && new Date().getTime() > parseInt(expirationTime)) {
      // If expired, remove the cart data
      localStorage.removeItem('cartItems');
      localStorage.removeItem('cartItemsExpiration');
      return {
        items: []
      };
    }

    return {
      items: storedData || [] // Initialize the cart with stored data if it exists
    };
  },
  getters: {
    // Total quantity of products in the cart
    totalItems(state) {
      return state.items.reduce((total, item) => total + item.quantity, 0);
    },
    // Total price of the cart
    totalPrice(state) {
      return state.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    }
  },
  actions: {
    // Add a product to the cart
    addToCart(product, userToken) {
      const existingProduct = this.items.find(
          item => item.id === product.id && item.color === product.color && item.size === product.size
      );

      if (existingProduct) {
        existingProduct.quantity += product.quantity;
      } else {
        // Assign the user token to the product if available
        if (userToken) {
          product.userToken = userToken;
        }
        this.items.push(product);
      }

      // Update the cart in localStorage and set the expiration date
      this.saveCartToLocalStorage();
    },
    // Remove a product from the cart
    removeFromCart(productId) {
      this.items = this.items.filter(item => item.id !== productId);
      // Update the cart in localStorage and set the expiration date
      this.saveCartToLocalStorage();
    },
    // Clear the entire cart
    clearCart() {
      this.items = [];
      // Remove the cart data and expiration date from localStorage
      localStorage.removeItem('cartItems');
      localStorage.removeItem('cartItemsExpiration');
    },
    // Save the cart to localStorage and set the expiration date
    saveCartToLocalStorage() {
      localStorage.setItem('cartItems', JSON.stringify(this.items));
      // Set an expiration date for the cart data (3 hours from now)
      const expirationTime = new Date().getTime() + 3 * 60 * 60 * 1000; // 3 hours in milliseconds
      localStorage.setItem('cartItemsExpiration', expirationTime.toString());
    },
  }
});
