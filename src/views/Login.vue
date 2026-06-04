<script setup>
import { ref } from 'vue'
const email = ref('')
const password = ref('')
function login() {
  alert('Welcome back! The login action is simulated in this demo.')
}
</script>
<template>
<section class="page-shell login-shell">
  <div class="auth-card">
    <h1>Login</h1>
    <p>Access your saved recipes, favorites and cooking progress.</p>
    <form @submit.prevent="login" class="form-card">
      <label class="field-group">
        <span>Email</span>
        <input v-model="email" type="email" required class="form-input" placeholder="you@example.com" />
      </label>
      <label class="field-group">
        <span>Password</span>
        <input v-model="password" type="password" required class="form-input" placeholder="Enter your password" />
      </label>
      <button type="submit" class="button button-primary">Login</button>
    </form>
    <RouterLink to="/register" class="link-button">Create a new account</RouterLink>
  </div>
</section>
</template>
