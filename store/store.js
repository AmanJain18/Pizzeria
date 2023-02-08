import create from "zustand";
export const useStore = create((set) => ({
  // cart
  cart: {
    pizzas: [],
  },

  // Add Pizza in Cart
  addPizza: (data) =>
    set((state) => ({
      cart: {
        pizzas: [...state.cart.pizzas, data]
      }
    })),

    // Remove Pizza from Cart i.e. Delete
    removePizza : (index) =>
    set((state) => ({
      cart: {
        pizzas: state.cart.pizzas.filter((_, i)=> i != index)
      }
    }))
}));
