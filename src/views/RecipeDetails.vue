<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { recipes } from '../data/store.js'

const route = useRoute()
const recipe = computed(() => recipes.find(item => item.id === route.params.id))
const videoSrc = ref('')

function withAutoplay(url) {
  if (!url) {
    return ''
  }

  const [base, query = ''] = url.split('?')
  const params = new URLSearchParams(query)
  params.set('autoplay', '1')
  params.set('mute', '1')
  params.set('muted', '1')
  params.set('controls', '1')
  params.set('playsinline', '1')
  params.set('rel', '0')

  return `${base}?${params.toString()}`
}

watch(
  recipe,
  (value) => {
    if (!value) {
      videoSrc.value = ''
      return
    }

    videoSrc.value = withAutoplay(value.video)
  },
  { immediate: true }
)
</script>

<template>
  <div class="recipe-detail">
    <template v-if="recipe">
      <div class="recipe-hero">
        <div class="recipe-hero-copy">
          <p class="eyebrow">{{ recipe.category }}</p>
          <h1>{{ recipe.name }}</h1>
          <p>{{ recipe.description }}</p>
          <div class="recipe-stats">
            <span>{{ recipe.cuisine }}</span>
            <span>{{ recipe.servings }} servings</span>
            <span>{{ recipe.difficulty }}</span>
          </div>
          <div class="recipe-meta">
            <span>Prep: {{ recipe.prep_time }} mins</span>
            <span>Cook: {{ recipe.cook_time }} mins</span>
            <span>Total: {{ recipe.total_time }} mins</span>
          </div>
          <RouterLink :to="'/cooking/' + recipe.id" class="button button-primary">Start Cooking Mode</RouterLink>
        </div>
        <img :src="recipe.image" alt="Recipe image" class="recipe-hero-image" />
      </div>

      <div class="section recipe-grid">
        <div class="card card-panel">
          <h2>Ingredients</h2>
          <ul class="detail-list">
            <li v-for="ingredient in recipe.ingredients" :key="ingredient">{{ ingredient }}</li>
          </ul>
        </div>
        <div class="card card-panel">
          <h2>Materials & Utensils</h2>
          <ul class="detail-list">
            <li v-for="material in recipe.materials" :key="material">{{ material }}</li>
          </ul>
        </div>
        <div class="card nutrition-card">
          <h2>Nutritional Info</h2>
          <div class="nutrition-grid">
            <div><strong>Calories</strong><span>{{ recipe.nutrition.calories }}</span></div>
            <div><strong>Protein</strong><span>{{ recipe.nutrition.protein }}</span></div>
            <div><strong>Carbs</strong><span>{{ recipe.nutrition.carbs }}</span></div>
            <div><strong>Fat</strong><span>{{ recipe.nutrition.fat }}</span></div>
          </div>
        </div>
      </div>

      <div class="section">
        <h2>Cooking Video</h2>
        <div class="video-wrapper">
          <iframe
            :key="videoSrc"
            :src="videoSrc"
            title="Cooking video"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div class="section">
        <h2>Step-by-Step Guide</h2>
        <div class="step-list">
          <div v-for="(step, index) in recipe.steps" :key="index" class="step-card">
            <div>
              <div class="step-badge">Step {{ index + 1 }}</div>
              <div class="step-details">
                <h3>{{ step.title }}</h3>
                <p>{{ step.description }}</p>
                <span class="step-time">⏱ {{ step.time }}</span>
              </div>
            </div>
            <img :src="step.image" alt="Step image" />
          </div>
        </div>
      </div>

      <div class="section gallery-section">
        <h2>Dish Gallery</h2>
        <div class="gallery-grid">
          <img v-for="(image, index) in recipe.gallery" :key="index" :src="image" alt="Gallery image" />
        </div>
      </div>
    </template>
    <template v-else>
      <div class="empty-state">Recipe not found. Please return to the recipes page.</div>
    </template>
  </div>
</template>
