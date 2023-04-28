import { createStore } from 'vuex'
import { orderModule } from '@/store/modules/order';

export default createStore({
  state: {
    isAuth: null,
    goodsBasketQuantity: 0,
  },
  getters: {},
  mutations: {
    setAuth(state, value) {
      state.isAuth = value
    },
    setBasketQuantity(state, value) {
      state.goodsBasketQuantity = value;
    },
  },
  actions: {},
  modules: {
    order: orderModule,
  },
})
