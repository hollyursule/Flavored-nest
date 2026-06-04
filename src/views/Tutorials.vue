<script setup>
import { tutorials } from '../data/store.js'
import VideoCard from '../components/VideoCard.vue'
</script>

<template>
  <section class="page-shell">
    <div class="section-header">
      <h1>Cooking Tutorials</h1>
      <p>Learn techniques, safety tips and kitchen skills for every recipe.</p>
    </div>
    <div class="tutorial-grid">
      <VideoCard
        v-for="tutorial in tutorials"
        :key="tutorial.id"
        :title="tutorial.title"
        :description="tutorial.description"
        :thumbnail="tutorial.image"
        :url="tutorial.video"
      />
    </div>
  </section>
</template>
