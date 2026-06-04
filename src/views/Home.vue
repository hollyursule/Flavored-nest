<script setup>
import { computed } from 'vue'
import { recipes, categories, tutorials } from '../data/store.js'
const featuredRecipes = computed(() => recipes.filter(recipe => recipe.featured).slice(0, 6))
const topCategories = categories.slice(0, 6)
const latestTutorials = tutorials.slice(0, 3)
</script>

<template>
  <section class="hero">
    <div class="hero-copy">
      <p class="eyebrow">Explore world cuisine</p>
      <h1>Learn to cook delicious meals with step-by-step guidance.</h1>
      <p class="hero-text">Flavour Nest brings recipes, videos, ingredients and cooking mode together in one warm, welcoming kitchen platform.</p>
      <div class="hero-actions">
        <RouterLink to="/recipes" class="button button-primary">Browse Recipes</RouterLink>
        <RouterLink to="/tutorials" class="button button-secondary">Watch Tutorials</RouterLink>
      </div>
    </div>
    <div class="hero-preview">
      <div class="hero-card">
        <img :src="featuredRecipes[0]?.image" alt="Nyama Choma BBQ Steak" />
        <div class="hero-card-copy">
          <strong>Featured recipe:</strong> Nyama Choma BBQ Steak
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="section-header">
      <h2>Featured Recipes</h2>
      <p>Discover dishes from African, Italian, American and more.</p>
    </div>
    <div class="card-grid">
      <div v-for="recipe in featuredRecipes" :key="recipe.id" class="card-small">
        <img :src="recipe.image" alt="Recipe image" />
        <div class="card-small-body">
          <h3>{{ recipe.name }}</h3>
          <p>{{ recipe.description }}</p>
          <RouterLink :to="'/recipe/' + recipe.id" class="button button-small">View Details</RouterLink>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-inverse">
    <div class="section-header">
      <h2>Explore cuisines</h2>
      <p>Browse by category to match your mood or occasion.</p>
    </div>
    <div class="category-grid">
      <div v-for="category in topCategories" :key="category.id" class="category-card" :style="{ borderColor: category.color }">
        <img :src="category.image" :alt="category.name" class="category-card-image" />
        <h3>{{ category.name }}</h3>
        <p>{{ category.description }}</p>
        <div class="category-footer">
          <RouterLink :to="{ path: '/recipes', query: { category: category.name } }" class="button button-small">See dishes</RouterLink>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="section-header">
      <h2>Latest tutorials</h2>
      <p>Learn cooking skills from real recipe creators.</p>
    </div>
    <div class="tutorial-grid">
      <div v-for="tutorial in latestTutorials" :key="tutorial.id" class="tutorial-card">
        <img :src="tutorial.image" alt="Tutorial preview" />
        <div class="tutorial-copy">
          <h3>{{ tutorial.title }}</h3>
          <p>{{ tutorial.description }}</p>
          <div class="chip">{{ tutorial.duration }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
