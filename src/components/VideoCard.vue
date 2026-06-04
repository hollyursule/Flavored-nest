<template>
  <div class="video-card">
    <div v-if="url" class="video-card-frame">
      <iframe
        :src="autoplayUrl"
        :title="title"
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <img v-else :src="thumbnail" :alt="title" class="video-card-thumbnail" />
    <div class="video-card-content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <a
        v-if="url"
        :href="autoplayUrl"
        target="_blank"
        rel="noreferrer"
        class="button button-secondary"
      >
        Watch Video
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoCard',
  props: {
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    thumbnail: { type: String, default: '' },
    url: { type: String, default: '' }
  },
  computed: {
    autoplayUrl() {
      if (!this.url) {
        return ''
      }

      const separator = this.url.includes('?') ? '&' : '?'
      return `${this.url}${separator}autoplay=1&mute=1&controls=1&playsinline=1&rel=0`
    }
  }
}
</script>

<style scoped>
.video-card {
  display: grid;
  gap: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 1rem;
  padding: 1rem;
  background: #fff;
}

.video-card-thumbnail {
  width: 100%;
  height: 190px;
  border-radius: 0.75rem;
  object-fit: cover;
}

.video-card-frame {
  position: relative;
  overflow: hidden;
  width: 100%;
  border-radius: 0.75rem;
  background: #000;
  aspect-ratio: 16 / 9;
}

.video-card-frame iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.video-card-content h3 {
  margin: 0;
  font-size: 1.05rem;
}

.video-card-content p {
  margin: 0.5rem 0 1rem;
  color: #555;
}

.button.button-secondary {
  display: inline-block;
  text-decoration: none;
}
</style>
