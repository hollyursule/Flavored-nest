<script setup>
import { RouterLink } from 'vue-router'
import logoUrl from './flavour_nest_logo.svg'
</script>

<template>
  <RouterLink to="/" class="site-logo">
    <span class="site-mark" aria-hidden="true">
      <img :src="logoUrl" alt="Flavour Nest logo" width="48" height="48" />
    </span>
    <span>
      <strong>Flavour Nest</strong>
      <small>Eat. Share. Discover.</small>
    </span>
  </RouterLink>
</template>