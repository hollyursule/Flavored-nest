<script setup>
import { useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const route = useRoute()
</script>

<template>
  <div class="layout-wrapper">
    <Navbar v-if="route.path !== '/dashboard'" />
    <main class="main-content" :class="{ 'main-content--full': route.path === '/dashboard' }">
      <router-view />
    </main>
    <Footer />
  </div>
</template>
