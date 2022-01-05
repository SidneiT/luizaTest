import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    wichList: []
  },
  mutations: {
    SET_PRODUCTS (state, products) {
      state.products = products
    },
    ADD_TO_WICH_LIST (state, productId) {
      state.wichList.push(productId)
      localStorage.setItem('wichListIds', JSON.stringify(state.wichList))
    },
    REMOVE_FROM_WICH_LIST (state, productId) {
      state.wichList = state.wichList.filter((v) => v !== productId)
      localStorage.setItem('wichListIds', JSON.stringify(state.wichList))
    }
  },
  actions: {
    listProducts ({ commit, state }) {
      return axios.get('http://localhost:3000/products').then((res) => {
        commit('SET_PRODUCTS', res.data)
        return res.data
      })
    },
    addToWichList ({ commit }, productId) {
      commit('ADD_TO_WICH_LIST', productId)
    },
    removeFromWichList ({ commit }, productId) {
      commit('REMOVE_FROM_WICH_LIST', productId)
    }
  },
  getters: {
    getProducts (state) {
      return state.products.map((item) => {
        return {
          ...item,
          wichList: state.wichList.includes(item.id)
        }
      })
    },
    getWichList (state) {
      if (state.wichList.length) {
        return state.products
          .filter((item) => state.wichList.includes(item.id))
          .map((item) => {
            return {
              ...item,
              wichList: state.wichList.includes(item.id)
            }
          })
      }

      return []
    }
  }
})
