<script setup>
import { categories } from '../data/store.js'
</script>

<template>
  <aside class="sidebar-panel">
    <h3 class="sidebar-title">Browse Cuisines</h3>
    <ul class="sidebar-list">
      <li><RouterLink to="/recipes" class="sidebar-link">All Recipes</RouterLink></li>
      <li v-for="category in categories" :key="category.id">
        <RouterLink :to="{ path: '/recipes', query: { category: category.name } }" class="sidebar-link">{{ category.name }}</RouterLink>
      </li>
    </ul>
    <div class="sidebar-card">
      <h4>Cooking Lab</h4>
      <p>Jump into interactive step-by-step mode and follow a recipe while cooking.</p>
      <RouterLink to="/dashboard" class="button button-secondary">Open Dashboard</RouterLink>
    </div>
  </aside>
</template>
