<script setup>
import { ref } from 'vue'
const name = ref('')
const email = ref('')
const password = ref('')
function register() {
  alert('Your account registration is simulated in this demo.')
}
</script>
<template>
<section class="page-shell login-shell">
  <div class="auth-card">
    <h1>Register</h1>
    <p>Create a Flavour Nest account and save your favorite recipes.</p>
    <form @submit.prevent="register" class="form-card">
      <label class="field-group">
        <span>Name</span>
        <input v-model="name" required class="form-input" placeholder="Your name" />
      </label>
      <label class="field-group">
        <span>Email</span>
        <input v-model="email" type="email" required class="form-input" placeholder="you@example.com" />
      </label>
      <label class="field-group">
        <span>Password</span>
        <input v-model="password" type="password" required class="form-input" placeholder="Choose a secure password" />
      </label>
      <button type="submit" class="button button-primary">Create account</button>
    </form>
    <RouterLink to="/login" class="link-button">Already have an account?</RouterLink>
  </div>
</section>
</template>
