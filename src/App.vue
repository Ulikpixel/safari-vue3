<template>
  <header-component />
  <main>
    <router-view />
  </main>
  <footer-component />
</template>

<script>
import HeaderComponent from '@/components/Header/Header';
import FooterComponent from '@/components/Footer/Footer';

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  }
}
</script>
