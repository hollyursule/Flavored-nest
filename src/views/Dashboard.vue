<script setup>
import { computed } from 'vue'
import { recipes, tutorials } from '../data/store.js'

const favoriteIds = ['carbonara-pasta', 'lava-cake', 'teriyaki-bowl']
const recentIds = ['carbonara-pasta', 'teriyaki-bowl']

const favorites = computed(() => recipes.filter((recipe) => favoriteIds.includes(recipe.id)))
const recentRecipes = computed(() => recipes.filter((recipe) => recentIds.includes(recipe.id)))
const continueRecipe = computed(() => recipes.find((recipe) => recipe.id === 'teriyaki-bowl') || recipes[0])
const suggestedRecipes = computed(() => recipes.filter((recipe) => recipe.featured).slice(0, 3))
const firstTutorial = computed(() => tutorials[0])

const stats = computed(() => [
  { label: 'Saved recipes', value: favorites.value.length, note: 'Ready for your next cook' },
  { label: 'Recipes viewed', value: recentRecipes.value.length, note: 'This week' },
  { label: 'Lessons watched', value: tutorials.length, note: 'Skills in progress' },
  { label: 'Cooking streak', value: '4', note: 'Days active' }
])

const mealPlan = [
  { day: 'Mon', recipe: 'Creamy Carbonara Pasta', tag: 'Dinner' },
  { day: 'Wed', recipe: 'Teriyaki Chicken Bowl', tag: 'Quick meal' },
  { day: 'Fri', recipe: 'Chocolate Lava Cake', tag: 'Dessert' }
]

const activity = [
  'Saved Chocolate Lava Cake to favorites.',
  'Viewed Teriyaki Chicken Bowl cooking steps.',
  'Started Knife Skills for Beginners.'
]
</script>

<template>
  <section class="user-dashboard">
    <div class="dashboard-hero">
      <div class="dashboard-hero-copy">
        <p class="eyebrow">Welcome back</p>
        <h1>Your Cooking Dashboard</h1>
        <p>
          Pick up where you left off, plan your next meal and keep your favorite recipes close.
        </p>
      </div>
      <div class="dashboard-hero-actions">
        <RouterLink to="/recipes" class="button">Explore Recipes</RouterLink>
        <RouterLink to="/favorites" class="button button-secondary">View Favorites</RouterLink>
      </div>
    </div>

    <div class="user-stat-grid" aria-label="Dashboard statistics">
      <article v-for="stat in stats" :key="stat.label" class="user-stat-card">
        <span>{{ stat.label }}</span>
        <strong>{{ stat.value }}</strong>
        <p>{{ stat.note }}</p>
      </article>
    </div>

    <div class="dashboard-main-grid">
      <section class="dashboard-panel continue-panel" aria-labelledby="continue-title">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">In Progress</p>
            <h2 id="continue-title">Continue Cooking</h2>
          </div>
          <span class="progress-pill">Step 2 of 4</span>
        </div>

        <div class="continue-card">
          <img :src="continueRecipe.image" :alt="continueRecipe.name" />
          <div class="continue-copy">
            <p class="recipe-category">{{ continueRecipe.category }}</p>
            <h3>{{ continueRecipe.name }}</h3>
            <p>{{ continueRecipe.description }}</p>
            <div class="recipe-meta-row">
              <span>{{ continueRecipe.total_time }} mins</span>
              <span>{{ continueRecipe.difficulty }}</span>
              <span>{{ continueRecipe.servings }} servings</span>
            </div>
            <RouterLink :to="'/cooking/' + continueRecipe.id" class="button button-small">
              Resume Cooking
            </RouterLink>
          </div>
        </div>
      </section>

      <aside class="dashboard-panel profile-summary" aria-labelledby="profile-title">
        <div class="profile-avatar" aria-hidden="true">JD</div>
        <h2 id="profile-title">Jane Doe</h2>
        <p>Italian cuisine, quick meals, desserts and vegetarian cooking.</p>
        <RouterLink to="/profile" class="text-link">Edit profile</RouterLink>
      </aside>
    </div>

    <div class="dashboard-secondary-grid">
      <section class="dashboard-panel" aria-labelledby="favorites-title">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">Saved</p>
            <h2 id="favorites-title">Favorite Recipes</h2>
          </div>
          <RouterLink to="/favorites" class="text-link">View all</RouterLink>
        </div>

        <div class="mini-recipe-list">
          <RouterLink
            v-for="recipe in favorites"
            :key="recipe.id"
            :to="'/recipe/' + recipe.id"
            class="mini-recipe"
          >
            <img :src="recipe.image" :alt="recipe.name" />
            <span>
              <strong>{{ recipe.name }}</strong>
              <small>{{ recipe.total_time }} mins · {{ recipe.difficulty }}</small>
            </span>
          </RouterLink>
        </div>
      </section>

      <section class="dashboard-panel" aria-labelledby="plan-title">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">This Week</p>
            <h2 id="plan-title">Meal Plan</h2>
          </div>
        </div>

        <div class="meal-plan-list">
          <div v-for="item in mealPlan" :key="item.day" class="meal-plan-row">
            <strong>{{ item.day }}</strong>
            <span>{{ item.recipe }}</span>
            <em>{{ item.tag }}</em>
          </div>
        </div>
      </section>

      <section class="dashboard-panel" aria-labelledby="activity-title">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">Updates</p>
            <h2 id="activity-title">Recent Activity</h2>
          </div>
          <RouterLink to="/notifications" class="text-link">Alerts</RouterLink>
        </div>

        <ul class="activity-list">
          <li v-for="item in activity" :key="item">{{ item }}</li>
        </ul>
      </section>
    </div>

    <section class="dashboard-panel" aria-labelledby="suggestions-title">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">Recommended</p>
          <h2 id="suggestions-title">Cook Next</h2>
        </div>
        <RouterLink to="/recipes" class="text-link">Browse recipes</RouterLink>
      </div>

      <div class="suggestion-grid">
        <RouterLink
          v-for="recipe in suggestedRecipes"
          :key="recipe.id"
          :to="'/recipe/' + recipe.id"
          class="suggestion-card"
        >
          <img :src="recipe.image" :alt="recipe.name" />
          <div>
            <small>{{ recipe.category }}</small>
            <h3>{{ recipe.name }}</h3>
            <p>{{ recipe.total_time }} mins · {{ recipe.difficulty }}</p>
          </div>
        </RouterLink>
      </div>
    </section>

    <section v-if="firstTutorial" class="lesson-strip" aria-labelledby="lesson-title">
      <div>
        <p class="eyebrow">Skill Builder</p>
        <h2 id="lesson-title">{{ firstTutorial.title }}</h2>
        <p>{{ firstTutorial.description }}</p>
      </div>
      <RouterLink :to="'/tutorials'" class="button button-secondary">Open Tutorials</RouterLink>
    </section>
  </section>
</template>

<style scoped>
.user-dashboard {
  display: grid;
  gap: 24px;
  padding: 10px 0;
}

.dashboard-hero {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  min-height: 280px;
  padding: 34px;
  border: 1px solid rgba(85, 111, 76, 0.18);
  border-radius: 8px;
  background:
    linear-gradient(135deg, rgba(255, 253, 247, 0.95), rgba(217, 239, 215, 0.74)),
    url('https://images.unsplash.com/photo-1495546968767-f0573cca821e?auto=format&fit=crop&w=1400&q=80');
  background-position: center;
  background-size: cover;
  box-shadow: 0 20px 46px rgba(28, 23, 18, 0.12);
}

.dashboard-hero-copy {
  max-width: 680px;
}

.dashboard-hero h1 {
  margin: 8px 0 12px;
  font-size: clamp(2.1rem, 4vw, 4rem);
  line-height: 1.05;
}

.dashboard-hero p {
  margin: 0;
  color: var(--text-muted);
  font-size: 1.04rem;
}

.dashboard-hero-actions,
.panel-heading,
.recipe-meta-row,
.meal-plan-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
}

.dashboard-hero-actions {
  flex-wrap: wrap;
  justify-content: flex-end;
}

.user-stat-grid,
.dashboard-main-grid,
.dashboard-secondary-grid,
.suggestion-grid {
  display: grid;
  gap: 18px;
}

.user-stat-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.dashboard-main-grid {
  grid-template-columns: minmax(0, 1.35fr) minmax(280px, 0.65fr);
}

.dashboard-secondary-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.suggestion-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.user-stat-card,
.dashboard-panel,
.lesson-strip {
  border: 1px solid rgba(216, 200, 181, 0.72);
  border-radius: 8px;
  background: rgba(255, 253, 247, 0.94);
  box-shadow: 0 14px 30px rgba(28, 23, 18, 0.08);
}

.user-stat-card {
  min-height: 140px;
  padding: 20px;
  border-top: 5px solid var(--primary);
}

.user-stat-card span,
.user-stat-card p,
.recipe-category,
.mini-recipe small,
.suggestion-card small,
.suggestion-card p,
.activity-list,
.profile-summary p,
.lesson-strip p {
  color: var(--text-muted);
}

.user-stat-card strong {
  display: block;
  margin: 12px 0 6px;
  color: var(--text);
  font-size: 2.15rem;
  line-height: 1;
}

.user-stat-card p {
  margin: 0;
}

.dashboard-panel {
  padding: 22px;
}

.panel-heading {
  margin-bottom: 18px;
}

.panel-heading h2,
.profile-summary h2,
.lesson-strip h2 {
  margin: 2px 0 0;
  font-size: 1.3rem;
}

.text-link {
  color: var(--primary-dark);
  font-weight: 700;
}

.progress-pill {
  padding: 7px 12px;
  border-radius: 999px;
  background: #e8f2e4;
  color: #355236;
  font-size: 0.86rem;
  font-weight: 700;
}

.continue-card {
  display: grid;
  grid-template-columns: minmax(220px, 0.82fr) minmax(0, 1fr);
  gap: 22px;
  align-items: center;
}

.continue-card img {
  width: 100%;
  height: 260px;
  border-radius: 8px;
  object-fit: cover;
}

.continue-copy h3 {
  margin: 4px 0 10px;
  font-size: 1.55rem;
}

.continue-copy p {
  margin: 0 0 14px;
}

.recipe-meta-row {
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 18px;
  color: var(--text-muted);
}

.recipe-meta-row span {
  padding: 8px 12px;
  border-radius: 999px;
  background: #f6f2e8;
}

.profile-summary {
  display: grid;
  align-content: center;
  justify-items: center;
  text-align: center;
}

.profile-avatar {
  display: grid;
  width: 82px;
  height: 82px;
  margin-bottom: 14px;
  place-items: center;
  border-radius: 50%;
  background: var(--primary);
  color: #fff;
  font-size: 1.45rem;
  font-weight: 800;
}

.profile-summary p {
  margin: 4px 0 14px;
}

.mini-recipe-list,
.meal-plan-list {
  display: grid;
  gap: 12px;
}

.mini-recipe {
  display: grid;
  grid-template-columns: 74px 1fr;
  gap: 12px;
  align-items: center;
}

.mini-recipe img {
  width: 74px;
  height: 64px;
  border-radius: 8px;
  object-fit: cover;
}

.mini-recipe span,
.suggestion-card div {
  display: grid;
  gap: 3px;
}

.meal-plan-row {
  padding: 12px 0;
  border-bottom: 1px solid rgba(216, 200, 181, 0.62);
}

.meal-plan-row:last-child {
  border-bottom: 0;
}

.meal-plan-row strong {
  color: var(--primary-dark);
}

.meal-plan-row span {
  flex: 1;
}

.meal-plan-row em {
  font-style: normal;
  color: var(--accent);
  font-weight: 700;
  white-space: nowrap;
}

.activity-list {
  display: grid;
  gap: 12px;
  margin: 0;
  padding-left: 20px;
}

.suggestion-card {
  overflow: hidden;
  border: 1px solid rgba(216, 200, 181, 0.72);
  border-radius: 8px;
  background: #fff;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

.suggestion-card:hover {
  border-color: rgba(85, 111, 76, 0.45);
  box-shadow: 0 12px 26px rgba(28, 23, 18, 0.1);
  transform: translateY(-1px);
}

.suggestion-card img {
  width: 100%;
  height: 170px;
  object-fit: cover;
}

.suggestion-card div {
  padding: 16px;
}

.suggestion-card h3 {
  margin: 0;
  font-size: 1.05rem;
}

.suggestion-card p {
  margin: 0;
}

.lesson-strip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 24px;
  background: #fff6e7;
}

.lesson-strip p {
  margin: 6px 0 0;
  max-width: 720px;
}

@media (max-width: 980px) {
  .user-stat-grid,
  .dashboard-secondary-grid,
  .suggestion-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .dashboard-main-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .dashboard-hero,
  .lesson-strip {
    align-items: flex-start;
    flex-direction: column;
    padding: 24px;
  }

  .dashboard-hero-actions,
  .user-stat-grid,
  .dashboard-secondary-grid,
  .suggestion-grid {
    grid-template-columns: 1fr;
    width: 100%;
  }

  .dashboard-hero-actions .button,
  .lesson-strip .button {
    width: 100%;
  }

  .continue-card {
    grid-template-columns: 1fr;
  }

  .continue-card img {
    height: 220px;
  }

  .panel-heading,
  .meal-plan-row {
    align-items: flex-start;
  }

  .meal-plan-row {
    display: grid;
    grid-template-columns: 44px 1fr;
  }

  .meal-plan-row em {
    grid-column: 2;
  }
}
</style>
