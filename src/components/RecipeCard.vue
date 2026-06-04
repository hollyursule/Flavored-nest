<template>
  <div class="recipe-card">
    <img :src="recipe.image" alt="Recipe image" class="recipe-card-image" />
    <div class="recipe-card-body">
      <div class="recipe-card-head">
        <h3>{{ recipe.name }}</h3>
        <span class="pill">{{ recipe.category }}</span>
      </div>
      <p class="recipe-card-meta">{{ recipe.difficulty }} · {{ recipe.total_time }} mins</p>
      <RouterLink :to="'/recipe/' + recipe.id" class="button button-small">View Recipe</RouterLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  recipe: Object
})
</script>
