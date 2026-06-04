<script setup>
import Logo from './Logo.vue'
</script>

<template>
  <nav class="navbar">
    <div class="nav-inner">
      <Logo />
      <ul class="nav-list">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/recipes">Recipes</RouterLink></li>
        <li><RouterLink to="/tutorials">Tutorials</RouterLink></li>
        <li><RouterLink to="/categories">Categories</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
      </ul>
      <div class="nav-actions">
        <RouterLink to="/login" class="nav-button">Login</RouterLink>
        <RouterLink to="/register" class="button button-secondary">Sign Up</RouterLink>
      </div>
    </div>
  </nav>
</template>
