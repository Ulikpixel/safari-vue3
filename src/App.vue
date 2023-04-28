<template>
  <div class="overflow-x-hidden">
    <header-component />
    <main>
      <router-view />
    </main>
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header/Header';
import FooterComponent from '@/components/Footer/Footer';
import { LocalStorage } from '@/util/localStorage';
import { onBeforeMount } from 'vue';
import { useStore } from 'vuex';

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
  setup() {
    const store = useStore();
    
    onBeforeMount(() => {
      store.commit('setAuth',  LocalStorage.get('isAuth'));
    })
  },
};
</script>
