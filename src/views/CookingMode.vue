<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { recipes } from '../data/store.js'

const route = useRoute()
const recipe = computed(() => recipes.find(item => item.id === route.params.id))
const currentStep = ref(0)
const steps = computed(() => recipe.value?.steps || [
  { title: 'Prepare ingredients', description: 'Gather everything you need.', time: '5 mins' },
  { title: 'Start cooking', description: 'Begin the first step with confidence.', time: '3 mins' }
])

function nextStep() {
  if (currentStep.value < steps.value.length - 1) {
    currentStep.value += 1
  }
}

function prevStep() {
  if (currentStep.value > 0) {
    currentStep.value -= 1
  }
}
</script>
<template>
<section class="page-shell">
  <div class="section-header">
    <h1>Interactive Cooking Mode</h1>
    <p>Follow each step at your own pace, with clear timing and visuals.</p>
  </div>
  <div class="cooking-mode-card">
    <h2>{{ recipe ? recipe.name : 'Quick cooking guide' }}</h2>
    <div class="step-panel">
      <div class="step-summary">
        <span class="eyebrow">Step {{ currentStep + 1 }} of {{ steps.length }}</span>
        <h3>{{ steps[currentStep].title }}</h3>
        <p>{{ steps[currentStep].description }}</p>
        <div class="step-time">⏱ {{ steps[currentStep].time }}</div>
      </div>
      <div class="step-actions">
        <button @click="prevStep" class="button button-secondary" :disabled="currentStep === 0">Back</button>
        <button @click="nextStep" class="button button-primary" :disabled="currentStep === steps.length - 1">Next step</button>
      </div>
    </div>
    <div class="step-tracker">
      <div v-for="(step, index) in steps" :key="index" class="tracker-dot" :class="{ active: index === currentStep }">{{ index + 1 }}</div>
    </div>
  </div>
</section>
</template>
