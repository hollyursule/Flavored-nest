<script setup>
import { computed, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const selectedPlan = ref('basic')

const TRIAL_DURATION_MONTHS = 3
const trialStatusText = computed(() => `Free trial (${TRIAL_DURATION_MONTHS} Months)`)

const form = reactive({
  cardholderName: '',
  cardNumber: '',
  expiryMonth: '',
  expiryYear: '',
  cvv: '',
  billingAddress: '',
  country: '',
  email: ''
})

const notif = reactive({ type: '', message: '' })

function setError(message) {
  notif.type = 'error'
  notif.message = message
}

function setSuccess(message) {
  notif.type = 'success'
  notif.message = message
}

function formatCardNumber(raw) {
  const digits = raw.replace(/\D/g, '').slice(0, 19)
  return digits.replace(/(\d{4})(?=\d)/g, '$1 ').trim()
}

function onlyDigits(s) {
  return s.replace(/\D/g, '')
}

function validate() {
  if (!form.cardholderName.trim()) return 'Cardholder name is required.'

  const cardDigits = onlyDigits(form.cardNumber)
  if (cardDigits.length < 13) return 'Card number looks too short.'

  const m = onlyDigits(form.expiryMonth)
  const y = onlyDigits(form.expiryYear)

  const monthNum = Number(m)
  if (!m || monthNum < 1 || monthNum > 12) return 'Expiry month must be between 01 and 12.'

  if (!y || y.length !== 4) return 'Expiry year must be 4 digits.'

  const yearNum = Number(y)
  const now = new Date()
  const currentYear = now.getFullYear()
  if (yearNum < currentYear || yearNum > currentYear + 25) return 'Expiry year is not valid.'

  const cvvDigits = onlyDigits(form.cvv)
  if (cvvDigits.length < 3 || cvvDigits.length > 4) return 'CVV must be 3 or 4 digits.'

  if (!form.billingAddress.trim()) return 'Billing address is required.'
  if (!form.country.trim()) return 'Country is required.'

  if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Please enter a valid email address.'

  return ''
}

async function encryptForDemo(plainText) {
  // Demo-only encryption. Real PCI-compliant flows must use a payment provider.
  const enc = new TextEncoder().encode(plainText)
  const keyMaterial = await crypto.subtle.importKey('raw', enc, { name: 'PBKDF2' }, false, ['deriveKey'])

  const salt = crypto.getRandomValues(new Uint8Array(16))
  const key = await crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt, iterations: 100000, hash: 'SHA-256' },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt']
  )

  const iv = crypto.getRandomValues(new Uint8Array(12))
  const cipherBuffer = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, enc)

  return {
    iv: Array.from(iv),
    salt: Array.from(salt),
    cipher: Array.from(new Uint8Array(cipherBuffer))
  }
}

const summary = reactive({
  subscriptionStartDate: '',
  monthlyPrice: 0,
  totalDueToday: 0
})

function planConfig(planKey) {
  if (planKey === 'premium') return { name: 'Premium Plan', monthlyPrice: 19.99 }
  return { name: 'Basic Plan', monthlyPrice: 9.99 }
}

const summaryPlanName = computed(() => planConfig(selectedPlan.value).name)

function formatMoney(n) {
  return `$${n.toFixed(2)}`
}

function syncSummary() {
  const p = planConfig(selectedPlan.value)
  summary.monthlyPrice = p.monthlyPrice
  summary.totalDueToday = 0
  summary.subscriptionStartDate = new Date().toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

syncSummary()

function onSelectPlan(planKey) {
  selectedPlan.value = planKey
  syncSummary()
}

async function startTrial() {
  notif.type = ''
  notif.message = ''

  const err = validate()
  if (err) return setError(err)

  const cardDigits = onlyDigits(form.cardNumber)
  const last4 = cardDigits.slice(-4)

  const encryptionPayload = await encryptForDemo(cardDigits)

  try {
    localStorage.setItem(
      'flavour_nest_payment_demo',
      JSON.stringify({
        plan: selectedPlan.value,
        last4,
        encryptedCard: encryptionPayload,
        createdAt: Date.now()
      })
    )

    localStorage.setItem(
      'flavour_nest_subscription_demo',
      JSON.stringify({
        plan: selectedPlan.value,
        status: 'trialing',
        startDate: summary.subscriptionStartDate
      })
    )

    setSuccess('Payment setup successful. Your free trial is now active!')

    // never reveal full card
    form.cardNumber = ''
    form.cvv = ''

    setTimeout(() => {
      router.push('/dashboard')
    }, 900)
  } catch (e) {
    setError('Could not record payment details. Please try again.')
  }
}
</script>

<template>
  <section class="page-shell">
    <header class="sub-hero">
      <div class="sub-hero-copy">
        <p class="eyebrow">Subscription Plans</p>
        <h1>Subscription Plans</h1>
        <p>
          Continue enjoying unlimited access to recipes, cooking videos, ingredient guides, and premium features after your free 3-month trial.
        </p>
      </div>
    </header>

    <div class="trial-reminder-banner" role="note" aria-label="Subscription reminder">
      Your free 3-month trial begins immediately after registration. No charges will be applied during the trial period. Billing starts only after your trial ends.
    </div>

    <div class="sub-grid">
      <div class="sub-main">
        <div class="trial-highlight">
          <div class="trial-highlight-badge">Free Trial</div>
          <h2>3 Months Free</h2>
          <ul>
            <li><strong>Free Trial Duration:</strong> 3 Months</li>
            <li><strong>Cost During Trial:</strong> Free</li>
            <li><strong>Access:</strong> Full Access to All Features</li>
          </ul>
        </div>

        <div class="plans">
          <h2 class="block-title">Subscription Plans</h2>

          <div class="plan-cards">
            <button
              type="button"
              class="plan-card"
              :class="{ selected: selectedPlan === 'basic' }"
              @click="onSelectPlan('basic')"
            >
              <h3>Basic Plan</h3>
              <div class="plan-price">{{ formatMoney(planConfig('basic').monthlyPrice) }}/month</div>
              <ul>
                <li>Monthly access</li>
                <li>Standard recipe library</li>
                <li>Video tutorials</li>
                <li>Community support</li>
              </ul>
            </button>

            <button
              type="button"
              class="plan-card"
              :class="{ selected: selectedPlan === 'premium' }"
              @click="onSelectPlan('premium')"
            >
              <h3>Premium Plan</h3>
              <div class="plan-price">{{ formatMoney(planConfig('premium').monthlyPrice) }}/month</div>
              <ul>
                <li>Everything in Basic</li>
                <li>Exclusive recipes</li>
                <li>Advanced cooking tutorials</li>
                <li>Priority support</li>
                <li>Personalized recommendations</li>
              </ul>
            </button>
          </div>
        </div>

        <div class="payment">
          <h2 class="block-title">Payment Details</h2>

          <div v-if="notif.message" :class="['notif', notif.type]" role="status" aria-live="polite">
            {{ notif.message }}
          </div>

          <form class="payment-form" @submit.prevent="startTrial">
            <div class="form-grid">
              <label class="field-group">
                <span>Cardholder Name</span>
                <input v-model="form.cardholderName" class="form-input" autocomplete="cc-name" />
              </label>

              <label class="field-group" style="grid-column: 1 / -1">
                <span>Card Number</span>
                <input
                  v-model="form.cardNumber"
                  class="form-input"
                  inputmode="numeric"
                  autocomplete="cc-number"
                  @input="form.cardNumber = formatCardNumber(form.cardNumber)"
                  placeholder="1234 5678 9012 3456"
                />
              </label>

              <label class="field-group">
                <span>Expiry Month</span>
                <input
                  v-model="form.expiryMonth"
                  class="form-input"
                  inputmode="numeric"
                  autocomplete="cc-exp-month"
                  placeholder="MM"
                  @input="form.expiryMonth = onlyDigits(form.expiryMonth).slice(0,2)"
                />
              </label>

              <label class="field-group">
                <span>Expiry Year</span>
                <input
                  v-model="form.expiryYear"
                  class="form-input"
                  inputmode="numeric"
                  autocomplete="cc-exp-year"
                  placeholder="YYYY"
                  @input="form.expiryYear = onlyDigits(form.expiryYear).slice(0,4)"
                />
              </label>

              <label class="field-group">
                <span>CVV</span>
                <input
                  v-model="form.cvv"
                  class="form-input"
                  inputmode="numeric"
                  type="password"
                  autocomplete="cc-csc"
                  placeholder="•••"
                  @input="form.cvv = onlyDigits(form.cvv).slice(0,4)"
                />
              </label>

              <label class="field-group" style="grid-column: 1 / -1">
                <span>Billing Address</span>
                <input v-model="form.billingAddress" class="form-input" autocomplete="street-address" />
              </label>

              <label class="field-group">
                <span>Country</span>
                <input v-model="form.country" class="form-input" autocomplete="country-name" />
              </label>

              <label class="field-group" style="grid-column: 1 / -1">
                <span>Email Address</span>
                <input v-model="form.email" class="form-input" type="email" autocomplete="email" />
              </label>
            </div>

            <div class="payment-actions">
              <button type="submit" class="button button-primary" :disabled="notif.type === 'success'">
                Start Free Trial
              </button>
              <p class="secure-hint">CVV is masked. Card number is never displayed after submission.</p>
            </div>
          </form>
        </div>
      </div>

      <aside class="sub-summary">
        <div class="summary-card">
          <h2 class="block-title">Subscription Summary</h2>

          <div class="summary-row">
            <span class="summary-label">Selected Plan</span>
            <strong class="summary-value">{{ summaryPlanName }}</strong>
          </div>

          <div class="summary-row">
            <span class="summary-label">Trial Status</span>
            <strong class="summary-value">{{ trialStatusText }}</strong>
          </div>

          <div class="summary-row">
            <span class="summary-label">Subscription Start Date</span>
            <strong class="summary-value">{{ summary.subscriptionStartDate }}</strong>
          </div>

          <div class="summary-row">
            <span class="summary-label">Monthly Price</span>
            <strong class="summary-value">{{ formatMoney(summary.monthlyPrice) }}</strong>
          </div>

          <div class="summary-row total">
            <span class="summary-label">Total Due Today</span>
            <strong class="summary-value">{{ formatMoney(summary.totalDueToday) }}</strong>
          </div>
        </div>

        <div class="fineprint">
          By starting your trial, you agree to activate premium features immediately and complete billing after the trial ends.
        </div>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.sub-hero {
  background: linear-gradient(135deg, rgba(255, 236, 208, 0.9), rgba(230, 215, 190, 0.55));
  border: 1px solid rgba(216, 200, 181, 0.72);
  border-radius: 24px;
  padding: 26px 24px;
  margin-bottom: 18px;
}

.sub-hero-copy p {
  margin: 8px 0 0;
  color: var(--text-muted);
  max-width: 760px;
}

.sub-hero h1 {
  margin: 10px 0 0;
  font-size: clamp(1.9rem, 3.6vw, 3rem);
}

.trial-reminder-banner {
  background: #fff6e7;
  border: 1px solid rgba(216, 200, 181, 0.9);
  border-radius: 16px;
  padding: 14px 16px;
  margin: 0 0 18px;
  color: var(--text);
  font-weight: 700;
}

.sub-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(320px, 0.6fr);
  gap: 18px;
  align-items: start;
}

.sub-main {
  display: grid;
  gap: 18px;
}

.trial-highlight {
  border: 1px solid rgba(85, 111, 76, 0.35);
  background: rgba(231, 243, 233, 0.65);
  border-radius: 20px;
  padding: 18px;
}

.trial-highlight-badge {
  display: inline-block;
  background: #e8f2e4;
  color: #355236;
  font-weight: 900;
  padding: 6px 12px;
  border-radius: 999px;
}

.trial-highlight h2 {
  margin: 10px 0 10px;
}

.trial-highlight ul {
  margin: 0;
  padding-left: 18px;
}

.plans {
  border: 1px solid rgba(216, 200, 181, 0.72);
  border-radius: 20px;
  background: rgba(255, 253, 247, 0.94);
  padding: 18px;
}

.block-title {
  margin: 0 0 14px;
  font-size: 1.25rem;
}

.plan-cards {
  display: grid;
  gap: 14px;
  grid-template-columns: 1fr 1fr;
}

.plan-card {
  border: 2px solid rgba(216, 200, 181, 0.72);
  background: #fff;
  border-radius: 20px;
  padding: 16px;
  text-align: left;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.plan-card:hover {
  transform: translateY(-1px);
  box-shadow: 0 14px 30px rgba(28, 23, 18, 0.08);
  border-color: rgba(85, 111, 76, 0.45);
}

.plan-card.selected {
  border-color: rgba(85, 111, 76, 0.7);
  box-shadow: 0 18px 40px rgba(28, 23, 18, 0.1);
}

.plan-card h3 {
  margin: 0;
}

.plan-price {
  margin-top: 8px;
  font-weight: 900;
  color: var(--primary-dark);
}

.plan-card ul {
  margin: 12px 0 0;
  padding-left: 18px;
}

.payment {
  border: 1px solid rgba(216, 200, 181, 0.72);
  border-radius: 20px;
  background: rgba(255, 253, 247, 0.94);
  padding: 18px;
}

.payment-form {
  margin-top: 12px;
}

.form-grid {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.payment-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin-top: 16px;
  flex-wrap: wrap;
}

.secure-hint {
  margin: 0;
  color: var(--text-muted);
  font-weight: 700;
  font-size: 0.92rem;
}

.notif {
  margin: 10px 0 12px;
  padding: 12px 14px;
  border-radius: 14px;
  font-weight: 900;
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

.sub-summary {
  position: sticky;
  top: 24px;
  display: grid;
  gap: 14px;
}

.summary-card {
  border: 1px solid rgba(216, 200, 181, 0.72);
  border-radius: 20px;
  background: rgba(255, 253, 247, 0.94);
  padding: 18px;
}

.summary-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(216, 200, 181, 0.55);
}

.summary-row:last-child {
  border-bottom: 0;
}

.summary-row.total {
  padding-top: 14px;
}

.summary-label {
  color: var(--text-muted);
  font-weight: 800;
}

.summary-value {
  font-size: 1.05rem;
  color: var(--text);
}

.fineprint {
  color: var(--text-muted);
  font-weight: 700;
  font-size: 0.92rem;
}

@media (max-width: 980px) {
  .sub-grid {
    grid-template-columns: 1fr;
  }

  .sub-summary {
    position: static;
  }

  .plan-cards {
    grid-template-columns: 1fr;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }
}
</style>

