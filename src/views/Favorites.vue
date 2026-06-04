<script setup>
import { computed } from 'vue'
import { recipes } from '../data/store.js'

const favoriteIds = ['carbonara-pasta', 'lava-cake', 'teriyaki-bowl']
const favorites = computed(() => recipes.filter(recipe => favoriteIds.includes(recipe.id)))
</script>
<template>
<section class="page-shell">
  <div class="section-header">
    <h1>Favorites</h1>
    <p>Saved recipes you can return to anytime.</p>
  </div>
  <div class="card-grid">
    <div v-for="recipe in favorites" :key="recipe.id" class="card-small">
      <img :src="recipe.image" alt="Recipe image" />
      <div class="card-small-body">
        <h3>{{ recipe.name }}</h3>
        <p>{{ recipe.category }}</p>
        <RouterLink :to="'/recipe/' + recipe.id" class="button button-small">View recipe</RouterLink>
      </div>
    </div>
  </div>
</section>
</template>
