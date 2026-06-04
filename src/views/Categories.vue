<script setup>
import { categories, recipes } from '../data/store.js'
</script>

<template>
  <section class="page-shell">
    <div class="section-header">
      <h1>Recipe Categories</h1>
      <p>Browse every cuisine and find dishes for your next meal.</p>
    </div>
    <div class="category-grid">
      <div v-for="category in categories" :key="category.id" class="category-card" :style="{ borderColor: category.color }">
        <img :src="category.image" :alt="category.name" class="category-card-image" />
        <h3>{{ category.name }}</h3>
        <p>{{ category.description }}</p>
        <div class="category-footer">
          <span>{{ recipes.filter(recipe => recipe.category === category.name).length }} recipes</span>
          <RouterLink :to="{ path: '/recipes', query: { category: category.name } }" class="button button-small">View</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
