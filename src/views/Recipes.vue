<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Sidebar from '../components/Sidebar.vue'
import RecipeCard from '../components/RecipeCard.vue'
import { recipes } from '../data/store.js'

const route = useRoute()
const router = useRouter()
const search = ref('')
const selectedCategory = ref(route.query.category || 'All')

watch(() => route.query.category, value => {
  selectedCategory.value = value || 'All'
})

const filteredRecipes = computed(() => {
  return recipes.filter(recipe => {
    const categoryMatch = selectedCategory.value === 'All' || recipe.category === selectedCategory.value
    const searchMatch = recipe.name.toLowerCase().includes(search.value.toLowerCase()) || recipe.description.toLowerCase().includes(search.value.toLowerCase())
    return categoryMatch && searchMatch
  })
})

function clearFilter() {
  router.push({ path: '/recipes' })
}
</script>

<template>
  <div class="layout-grid">
    <Sidebar />
    <div class="main-panel">
      <div class="page-top">
        <div>
          <h1>Explore Recipes</h1>
          <p>Find meals by cuisine, taste and cooking style.</p>
        </div>
        <div class="search-wrapper">
          <input v-model="search" placeholder="Search recipes" class="form-input" />
        </div>
      </div>
      <div class="filter-bar">
        <span class="filter-label">Showing:</span>
        <strong>{{ selectedCategory }}</strong>
        <button v-if="selectedCategory !== 'All'" @click="clearFilter" class="button button-secondary">Clear filter</button>
      </div>
      <div class="card-list">
        <RecipeCard v-for="recipe in filteredRecipes" :key="recipe.id" :recipe="recipe" />
        <div v-if="filteredRecipes.length === 0" class="empty-state">No recipes matched your search.</div>
      </div>
    </div>
  </div>
</template>
