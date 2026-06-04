<script setup>
import { ref } from 'vue'
const email = ref('')
const message = ref('')
const success = ref(false)
function sendMessage() {
  success.value = true
  email.value = ''
  message.value = ''
}
</script>
<template>
<section class="page-shell">
  <div class="contact-hero">
    <div class="section-header">
      <h1>Contact Us</h1>
      <p>Have a question about a recipe, tutorial or your cooking journey? Reach out.</p>
    </div>
    <img
      src="https://images.unsplash.com/photo-1556911073-a517e752729c?auto=format&fit=crop&w=1000&q=80"
      alt="Friendly kitchen support team preparing food"
    />
  </div>
  <div class="contact-grid">
    <div class="contact-card">
      <h2>Send a message</h2>
      <form @submit.prevent="sendMessage" class="form-card">
        <label class="field-group">
          <span>Email</span>
          <input v-model="email" type="email" placeholder="you@example.com" class="form-input" required />
        </label>
        <label class="field-group">
          <span>Message</span>
          <textarea v-model="message" rows="6" placeholder="Write your question" class="form-textarea" required></textarea>
        </label>
        <button type="submit" class="button button-primary">Send message</button>
      </form>
      <div class="contact-details">
        <h3>Flavour Nest support</h3>
        <p>Email: hello@flavournest.com</p>
        <p>Phone: +1 800 123 4567</p>
        <p>Location: Worldwide online kitchen</p>
      </div>
    </div>
    <div class="contact-card">
      <h2>Why connect?</h2>
      <p>We are here to help with favorite recipes, technical questions, recipe suggestions and content ideas.</p>
      <div class="info-box">
        <h4>New recipe requests</h4>
        <p>Tell us what cuisine you want next and we’ll add it to the platform.</p>
      </div>
    </div>
  </div>
  <div v-if="success" class="notification success">Your message has been sent successfully.</div>
</section>
</template>
