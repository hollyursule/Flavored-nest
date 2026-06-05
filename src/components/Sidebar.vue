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
    </div>

    <ul class="sidebar-list sidebar-actions">
      <li>
        <RouterLink to="/settings" class="sidebar-link">
          <span class="sidebar-icon" aria-hidden="true">⚙️</span>
          Settings
        </RouterLink>
      </li>
    </ul>
  </aside>
</template>
