<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { categories, recipes, tutorials } from '../data/store.js'

const featuredRecipes = computed(() => recipes.filter((recipe) => recipe.featured).length)

const stats = computed(() => [
  {
    label: 'Active users',
    value: '1,250',
    note: '84 joined this month',
    trend: '+12%',
    tone: 'sage'
  },
  {
    label: 'Published recipes',
    value: recipes.length,
    note: `${featuredRecipes.value} featured dishes`,
    trend: '+8%',
    tone: 'terracotta'
  },
  {
    label: 'Video tutorials',
    value: tutorials.length,
    note: '3 awaiting edits',
    trend: '+5%',
    tone: 'olive'
  },
  {
    label: 'Pending reviews',
    value: '24',
    note: 'Needs moderation',
    trend: 'Today',
    tone: 'gold'
  }
])

const quickActions = [
  {
    title: 'Manage Recipes',
    description: 'Update dishes, ingredients, media and cooking steps.',
    to: '/admin/recipes',
    action: 'Open recipes'
  },
  {
    title: 'Manage Tutorials',
    description: 'Review video lessons and keep skill content fresh.',
    to: '/admin/tutorials',
    action: 'Open tutorials'
  },
  {
    title: 'Manage Users',
    description: 'Monitor account activity and community access.',
    to: '/admin/users',
    action: 'Open users'
  },
  {
    title: 'Review Queue',
    description: 'Approve feedback and remove low-quality comments.',
    to: '/admin/reviews',
    action: 'Open reviews'
  }
]

const recentActivity = [
  {
    title: 'Carbonara Pasta was updated',
    detail: 'Nutrition and serving notes refreshed.',
    time: '12 min ago'
  },
  {
    title: 'New category request',
    detail: 'Seafood recipes suggested by 6 users.',
    time: '1 hr ago'
  },
  {
    title: 'Tutorial flagged for review',
    detail: 'Baking Basics has an outdated ingredient note.',
    time: '3 hrs ago'
  }
]

const reviewQueue = [
  { name: 'Nyama Choma BBQ Steak', rating: '5.0', status: 'Ready' },
  { name: 'Butter Chicken', rating: '4.8', status: 'Check' },
  { name: 'Chocolate Lava Cake', rating: '4.9', status: 'Ready' }
]

const categoryCoverage = computed(() =>
  categories.slice(0, 5).map((category) => ({
    name: category.name,
    count: recipes.filter((recipe) => recipe.category === category.name).length,
    color: category.color
  }))
)
</script>

<template>
  <section class="admin-dashboard">
    <div class="admin-hero">
      <div class="admin-hero-copy">
        <p class="eyebrow">Admin Control Room</p>
        <h1>Flavour Nest Dashboard</h1>
        <p>
          Track content, reviews, tutorials and community activity from one clean workspace.
        </p>
      </div>
      <div class="admin-hero-actions" aria-label="Admin shortcuts">
        <RouterLink to="/admin/recipes" class="button">Add Recipe</RouterLink>
        <RouterLink to="/admin/reviews" class="button button-secondary">Review Queue</RouterLink>
      </div>
    </div>

    <div class="admin-stat-grid" aria-label="Admin statistics">
      <article
        v-for="stat in stats"
        :key="stat.label"
        class="admin-stat-card"
        :class="`stat-${stat.tone}`"
      >
        <div class="stat-card-top">
          <span>{{ stat.label }}</span>
          <strong>{{ stat.trend }}</strong>
        </div>
        <p class="stat-value">{{ stat.value }}</p>
        <p class="stat-note">{{ stat.note }}</p>
      </article>
    </div>

    <div class="admin-content-grid">
      <section class="admin-panel-card actions-panel" aria-labelledby="quick-actions-title">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">Workspace</p>
            <h2 id="quick-actions-title">Quick Actions</h2>
          </div>
          <RouterLink to="/admin/categories" class="text-link">Categories</RouterLink>
        </div>

        <div class="action-list">
          <RouterLink
            v-for="item in quickActions"
            :key="item.title"
            :to="item.to"
            class="action-row"
          >
            <span class="action-dot" aria-hidden="true"></span>
            <span>
              <strong>{{ item.title }}</strong>
              <small>{{ item.description }}</small>
            </span>
            <em>{{ item.action }}</em>
          </RouterLink>
        </div>
      </section>

      <section class="admin-panel-card" aria-labelledby="activity-title">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">Live Feed</p>
            <h2 id="activity-title">Recent Activity</h2>
          </div>
        </div>

        <div class="activity-list">
          <article v-for="activity in recentActivity" :key="activity.title" class="activity-row">
            <div>
              <strong>{{ activity.title }}</strong>
              <p>{{ activity.detail }}</p>
            </div>
            <time>{{ activity.time }}</time>
          </article>
        </div>
      </section>
    </div>

    <div class="admin-bottom-grid">
      <section class="admin-panel-card" aria-labelledby="reviews-title">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">Moderation</p>
            <h2 id="reviews-title">Review Queue</h2>
          </div>
          <RouterLink to="/admin/reviews" class="text-link">View all</RouterLink>
        </div>

        <div class="review-table">
          <div class="review-row review-head">
            <span>Recipe</span>
            <span>Rating</span>
            <span>Status</span>
          </div>
          <div v-for="review in reviewQueue" :key="review.name" class="review-row">
            <strong>{{ review.name }}</strong>
            <span>{{ review.rating }}</span>
            <span class="status-pill" :class="{ warning: review.status === 'Check' }">
              {{ review.status }}
            </span>
          </div>
        </div>
      </section>

      <section class="admin-panel-card" aria-labelledby="coverage-title">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">Content Health</p>
            <h2 id="coverage-title">Category Coverage</h2>
          </div>
          <span class="panel-count">{{ categories.length }} total</span>
        </div>

        <div class="coverage-list">
          <div v-for="category in categoryCoverage" :key="category.name" class="coverage-row">
            <span class="coverage-name">
              <i :style="{ background: category.color }" aria-hidden="true"></i>
              {{ category.name }}
            </span>
            <span>{{ category.count }} recipes</span>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped>
.admin-dashboard {
  display: grid;
  gap: 24px;
  padding: 10px 0;
}

.admin-hero {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  min-height: 260px;
  padding: 34px;
  border: 1px solid rgba(85, 111, 76, 0.16);
  border-radius: 8px;
  background:
    linear-gradient(135deg, rgba(255, 253, 247, 0.96), rgba(238, 208, 176, 0.72)),
    url('https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1400&q=80');
  background-position: center;
  background-size: cover;
  box-shadow: 0 20px 46px rgba(28, 23, 18, 0.12);
}

.admin-hero-copy {
  max-width: 640px;
}

.admin-hero h1 {
  margin: 8px 0 12px;
  font-size: clamp(2.1rem, 4vw, 4rem);
  line-height: 1.05;
}

.admin-hero p {
  margin: 0;
  color: var(--text-muted);
  font-size: 1.04rem;
}

.admin-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: flex-end;
}

.admin-stat-grid,
.admin-content-grid,
.admin-bottom-grid {
  display: grid;
  gap: 18px;
}

.admin-stat-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.admin-content-grid {
  grid-template-columns: minmax(0, 1.25fr) minmax(320px, 0.75fr);
}

.admin-bottom-grid {
  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.85fr);
}

.admin-stat-card,
.admin-panel-card {
  border: 1px solid rgba(216, 200, 181, 0.72);
  border-radius: 8px;
  background: rgba(255, 253, 247, 0.92);
  box-shadow: 0 14px 30px rgba(28, 23, 18, 0.08);
}

.admin-stat-card {
  min-height: 154px;
  padding: 20px;
  border-left: 5px solid var(--primary);
}

.stat-terracotta {
  border-left-color: #b45c31;
}

.stat-olive {
  border-left-color: #7a8c3b;
}

.stat-gold {
  border-left-color: #c18553;
}

.stat-card-top,
.panel-heading,
.review-row,
.coverage-row,
.action-row,
.activity-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.stat-card-top span,
.stat-note,
.activity-row p,
.action-row small,
.review-head,
.coverage-row span:last-child,
.panel-count {
  color: var(--text-muted);
}

.stat-card-top strong {
  padding: 5px 10px;
  border-radius: 999px;
  background: #eef2e9;
  color: var(--primary-dark);
  font-size: 0.78rem;
}

.stat-value {
  margin: 18px 0 4px;
  color: var(--text);
  font-size: 2.25rem;
  font-weight: 800;
  line-height: 1;
}

.stat-note {
  margin: 0;
}

.admin-panel-card {
  padding: 22px;
}

.panel-heading {
  margin-bottom: 18px;
}

.panel-heading h2 {
  margin: 2px 0 0;
  font-size: 1.3rem;
}

.text-link {
  color: var(--primary-dark);
  font-weight: 700;
}

.action-list,
.activity-list,
.coverage-list {
  display: grid;
  gap: 12px;
}

.action-row {
  padding: 16px;
  border: 1px solid rgba(216, 200, 181, 0.7);
  border-radius: 8px;
  background: #fff;
  transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

.action-row:hover {
  border-color: rgba(85, 111, 76, 0.45);
  box-shadow: 0 10px 22px rgba(28, 23, 18, 0.08);
  transform: translateY(-1px);
}

.action-row span:nth-child(2) {
  display: grid;
  gap: 3px;
  flex: 1;
}

.action-row em {
  color: var(--accent);
  font-style: normal;
  font-weight: 700;
  white-space: nowrap;
}

.action-dot {
  width: 10px;
  height: 10px;
  flex: 0 0 10px;
  border-radius: 50%;
  background: var(--primary);
}

.activity-row {
  align-items: flex-start;
  padding: 0 0 14px;
  border-bottom: 1px solid rgba(216, 200, 181, 0.7);
}

.activity-row:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}

.activity-row p {
  margin: 4px 0 0;
}

.activity-row time {
  flex: 0 0 auto;
  color: var(--accent);
  font-size: 0.88rem;
  font-weight: 700;
}

.review-table {
  display: grid;
  overflow: hidden;
  border: 1px solid rgba(216, 200, 181, 0.72);
  border-radius: 8px;
  background: #fff;
}

.review-row {
  display: grid;
  grid-template-columns: minmax(160px, 1fr) 90px 96px;
  padding: 14px 16px;
  border-bottom: 1px solid rgba(216, 200, 181, 0.55);
}

.review-row:last-child {
  border-bottom: 0;
}

.review-head {
  background: #f7f2e7;
  font-size: 0.9rem;
  font-weight: 700;
}

.status-pill {
  display: inline-flex;
  justify-content: center;
  width: max-content;
  min-width: 64px;
  padding: 5px 10px;
  border-radius: 999px;
  background: #e8f2e4;
  color: #355236;
  font-size: 0.82rem;
  font-weight: 700;
}

.status-pill.warning {
  background: #fff0d7;
  color: #7c4b13;
}

.coverage-row {
  padding: 12px 0;
  border-bottom: 1px solid rgba(216, 200, 181, 0.62);
}

.coverage-row:last-child {
  border-bottom: 0;
}

.coverage-name {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
}

.coverage-name i {
  width: 12px;
  height: 12px;
  flex: 0 0 12px;
  border-radius: 50%;
}

@media (max-width: 980px) {
  .admin-stat-grid,
  .admin-content-grid,
  .admin-bottom-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 720px) {
  .admin-hero {
    align-items: flex-start;
    flex-direction: column;
    padding: 24px;
  }

  .admin-hero-actions,
  .admin-stat-grid,
  .admin-content-grid,
  .admin-bottom-grid {
    grid-template-columns: 1fr;
    width: 100%;
  }

  .admin-hero-actions .button {
    width: 100%;
  }

  .action-row,
  .activity-row,
  .panel-heading {
    align-items: flex-start;
  }

  .action-row {
    display: grid;
    grid-template-columns: 10px 1fr;
  }

  .action-row em {
    grid-column: 2;
  }

  .review-row {
    grid-template-columns: minmax(150px, 1fr) 72px 82px;
    padding: 12px;
  }
}
</style>
