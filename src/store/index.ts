import IProduct from '@/data/IProduct'
import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

export interface State {
  cart: IProduct[]
}

export const key: InjectionKey<Store<State>> = Symbol()

function updateLocalStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart))
}

export const store = createStore<State>({
  state: {
    cart: [] as IProduct[]
  },
  getters: {
    productQuantity: state => product => {
      const item = state.cart.find(i => i.id === product.id)
      if (item) return item.quantity
      else return null
    },
    cartItems: state => {
      return state.cart
    },
    cartTotal: state => {
      return state.cart.reduce((total, product) =>
          total + (product.quantity * product.price), 0)
    },
    cartTotalQuantityItems: state => state.cart.reduce((total, product) => total + (product.quantity), 0)
  },
  mutations: {
    addToCart(state, product) {
      const item = state.cart.find(i => i.id === product.id)
      if (item) {
        item.quantity++
      } else {
        state.cart.push({...product, quantity: 1})
      }
      updateLocalStorage(state.cart)
    },

    removeFromCart(state, product) {
      const item = state.cart.find(i => i.id === product.id)
      if (item) {
        if (item.quantity > 1) {
          item.quantity--
        } else {
          state.cart = state.cart.filter(i => i.id !== product.id)
        }
      }
      updateLocalStorage(state.cart)
    },

    'updateCartFromLocalStorage'(state) {
      const cart = localStorage.getItem('cart')
      if (cart) {
        state.cart = JSON.parse(cart)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})

export function useStore() {
  return baseUseStore(key);
}
