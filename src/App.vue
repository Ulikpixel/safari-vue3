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
import { onBeforeMount, ref } from 'vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent,
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
