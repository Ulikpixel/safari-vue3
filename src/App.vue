<template>
  <div class="overflow-x-hidden">
    <header-component />
    <main>
      <router-view v-if="isAuth" />
      <auth-component v-else />
    </main>
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header/Header';
import FooterComponent from '@/components/Footer/Footer';
import AuthComponent from '@/components/Auth/Auth';
import { LocalStorage } from '@/util/localStorage';
import { onBeforeMount, ref } from 'vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    AuthComponent,
  },
  setup() {
    const isAuth = ref(false);
    
    onBeforeMount(() => {
      isAuth.value = LocalStorage.get('isAuth');
    })

    return { isAuth };
  },
};
</script>
