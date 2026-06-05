<script setup>
import { computed, reactive, ref } from 'vue'

// Demo/simulated user profile data (matches existing Profile/Dashboard demo pages)
const user = reactive({
  profilePicture: '',
  fullName: 'Jane Doe',
  username: 'jane.doe',
  email: 'jane.doe@example.com',
  phone: '+1 (555) 123-4567',
  address: '123 Kitchen Street, Flavor City'
})

const avatarFallback = computed(() => {
  const name = user.fullName?.trim() || ''
  if (!name) return 'U'
  const parts = name.split(/\s+/).filter(Boolean)
  const first = parts[0]?.[0] || ''
  const second = parts.length > 1 ? parts[parts.length - 1]?.[0] : ''
  return (first + second).toUpperCase() || 'U'
})

const editForm = reactive({
  fullName: user.fullName,
  username: user.username,
  email: user.email,
  phone: user.phone,
  address: user.address
})

const pwdForm = reactive({
  currentPassword: '',
  newPassword: '',
  confirmNewPassword: ''
})

const notif = reactive({
  type: '', // 'success' | 'error'
  message: ''
})

function clearNotif() {
  notif.type = ''
  notif.message = ''
}

function notifySuccess(message) {
  notif.type = 'success'
  notif.message = message
}

function notifyError(message) {
  notif.type = 'error'
  notif.message = message
}

function syncEditFormFromUser() {
  editForm.fullName = user.fullName
  editForm.username = user.username
  editForm.email = user.email
  editForm.phone = user.phone
  editForm.address = user.address
}

function saveProfile() {
  clearNotif()

  // Basic client-side validation for demo purposes
  if (!editForm.fullName.trim()) return notifyError('Full name is required.')
  if (!editForm.username.trim()) return notifyError('Username is required.')
  if (!editForm.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(editForm.email)) {
    return notifyError('Please enter a valid email address.')
  }
  if (!editForm.phone.trim()) return notifyError('Phone number is required.')
  if (!editForm.address.trim()) return notifyError('Address is required.')

  // Simulated update
  user.fullName = editForm.fullName
  user.username = editForm.username
  user.email = editForm.email
  user.phone = editForm.phone
  user.address = editForm.address

  notifySuccess('Profile updated successfully.')
}

function savePassword() {
  clearNotif()

  if (!pwdForm.currentPassword) return notifyError('Current password is required.')
  if (pwdForm.newPassword.length < 8) return notifyError('New password must be at least 8 characters.')
  if (pwdForm.newPassword !== pwdForm.confirmNewPassword) {
    return notifyError('Confirm new password does not match.')
  }

  // Simulated success
  notifySuccess('Password updated successfully.')

  pwdForm.currentPassword = ''
  pwdForm.newPassword = ''
  pwdForm.confirmNewPassword = ''
}

// Initialize edit form once
syncEditFormFromUser()
</script>

<template>
  <section class="page-shell">
    <div class="section-header">
      <h1>Settings</h1>
      <p>View your profile details and update your account securely.</p>
    </div>

    <div class="settings-grid">
      <!-- Notifications -->
      <div v-if="notif.message" :class="['notif', notif.type]" role="status" aria-live="polite">
        {{ notif.message }}
      </div>

      <!-- Profile display + edit -->
      <div class="settings-card">
        <div class="card-heading">
          <h2>User Profile</h2>
          <span class="card-subtitle">Your account information</span>
        </div>

        <div class="profile-display">
          <div class="profile-avatar" :aria-label="user.fullName">
            <span v-if="user.profilePicture" class="avatar-img-wrapper">
              <img :src="user.profilePicture" alt="Profile picture" />
            </span>
            <span v-else>{{ avatarFallback }}</span>
          </div>

          <div class="profile-meta">
            <p><strong>Full name:</strong> {{ user.fullName }}</p>
            <p><strong>Username:</strong> {{ user.username }}</p>
            <p><strong>Email:</strong> {{ user.email }}</p>
            <p><strong>Phone:</strong> {{ user.phone }}</p>
            <p><strong>Address:</strong> {{ user.address }}</p>
          </div>
        </div>

        <div class="divider" />

        <form class="form-grid" @submit.prevent="saveProfile">
          <h3 class="form-title">Edit Profile</h3>

          <label class="field-group">
            <span>Full name</span>
            <input v-model="editForm.fullName" class="form-input" required />
          </label>

          <label class="field-group">
            <span>Username</span>
            <input v-model="editForm.username" class="form-input" required />
          </label>

          <label class="field-group">
            <span>Email</span>
            <input v-model="editForm.email" class="form-input" type="email" required />
          </label>

          <label class="field-group">
            <span>Phone number</span>
            <input v-model="editForm.phone" class="form-input" required />
          </label>

          <label class="field-group" style="grid-column: 1 / -1">
            <span>Address</span>
            <input v-model="editForm.address" class="form-input" required />
          </label>

          <div class="form-actions">
            <button type="button" class="button button-secondary" @click="syncEditFormFromUser">
              Reset
            </button>
            <button type="submit" class="button button-primary">Save Profile</button>
          </div>
        </form>
      </div>

      <!-- Password change -->
      <div class="settings-card">
        <div class="card-heading">
          <h2>Change Password</h2>
          <span class="card-subtitle">Update your login security</span>
        </div>

        <form class="form-grid" @submit.prevent="savePassword">
          <label class="field-group">
            <span>Current Password</span>
            <input v-model="pwdForm.currentPassword" class="form-input" type="password" required />
          </label>

          <label class="field-group">
            <span>New Password</span>
            <input v-model="pwdForm.newPassword" class="form-input" type="password" required />
            <small class="help">At least 8 characters.</small>
          </label>

          <label class="field-group" style="grid-column: 1 / -1">
            <span>Confirm New Password</span>
            <input
              v-model="pwdForm.confirmNewPassword"
              class="form-input"
              type="password"
              required
            />
          </label>

          <div class="form-actions">
            <button type="submit" class="button button-primary">Save Password</button>
          </div>
        </form>

        <p class="fineprint">
          For this demo, password changes are simulated locally.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.settings-grid {
  display: grid;
  gap: 18px;
  grid-template-columns: minmax(0, 1.25fr) minmax(0, 0.75fr);
  align-items: start;
}

.settings-card {
  border: 1px solid rgba(216, 200, 181, 0.72);
  border-radius: 10px;
  background: rgba(255, 253, 247, 0.94);
  box-shadow: 0 14px 30px rgba(28, 23, 18, 0.06);
  padding: 18px;
}

.card-heading {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
}

.card-subtitle {
  color: var(--text-muted);
  font-size: 0.95rem;
  font-weight: 600;
}

.profile-display {
  display: grid;
  grid-template-columns: 92px 1fr;
  gap: 14px;
  align-items: start;
}

.profile-avatar {
  width: 92px;
  height: 92px;
  border-radius: 50%;
  background: var(--primary);
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 900;
  font-size: 1.6rem;
  overflow: hidden;
}

.avatar-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-meta p {
  margin: 8px 0;
  color: var(--text);
}

.divider {
  height: 1px;
  background: rgba(216, 200, 181, 0.7);
  margin: 16px 0;
}

.form-title {
  margin: 0 0 12px;
  font-size: 1.15rem;
}

.form-grid {
  display: grid;
  gap: 12px;
}

.field-group {
  display: grid;
  gap: 7px;
}

.field-group > span {
  font-weight: 800;
  color: var(--text);
}

.form-input {
  width: 100%;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid rgba(216, 200, 181, 0.9);
  background: #fff;
  outline: none;
}

.form-input:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(85, 111, 76, 0.18);
}

.help {
  margin-top: 6px;
  color: var(--text-muted);
  font-size: 0.86rem;
}

.form-actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 6px;
}

.fineprint {
  margin: 12px 0 0;
  color: var(--text-muted);
  font-size: 0.92rem;
}

.notif {
  grid-column: 1 / -1;
  padding: 12px 14px;
  border-radius: 10px;
  font-weight: 800;
  border: 1px solid;
}

.notif.success {
  color: #1f4d2a;
  background: rgba(31, 77, 42, 0.09);
  border-color: rgba(31, 77, 42, 0.28);
}

.notif.error {
  color: #7a1f1f;
  background: rgba(122, 31, 31, 0.09);
  border-color: rgba(122, 31, 31, 0.28);
}

@media (max-width: 980px) {
  .settings-grid {
    grid-template-columns: 1fr;
  }
}
</style>

