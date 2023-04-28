import { createStore } from 'vuex'
import { orderModule } from '@/store/modules/order';

export default createStore({
  state: {
    isAuth: 'asdsad',
  },
  getters: {},
  mutations: {
    setAuth(state, value) {
      state.isAuth = value
    },
  },
  actions: {},
  modules: {
    order: orderModule,
  },
})
