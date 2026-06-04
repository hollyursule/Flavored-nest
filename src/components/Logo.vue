<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <RouterLink to="/" class="site-logo">
    <span class="site-mark" aria-hidden="true">
      <svg viewBox="0 0 64 64" fill="none" xmlns="../components/flavour_nest_logo.svg">
        <rect x="8" y="8" width="48" height="48" rx="16" fill="#556f4c" opacity="0.12" />
        <path d="M32 22c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10Zm0 16a6 6 0 1 1 0-12 6 6 0 0 1 0 12Z" fill="#556f4c" />
        <path d="M44 24l-8 12-8-10-8 10-8-12" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </span>
    <span>
      <strong>Flavour Nest</strong>
      <small>Eat. Share. Discover.</small>
    </span>
  </RouterLink>
</template>