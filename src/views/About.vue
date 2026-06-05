<template>
<section class="page-shell">
  <div class="about-hero">
    <div class="section-header">
      <h1>About Flavour Nest</h1>
      <p>Flavour Nest is your kitchen companion for recipes, videos and interactive cooking lessons from around the world.</p>
    </div>
    <img
      src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1000&q=80"
      alt="Home cooks preparing ingredients together"
    />
  </div>
  <div class="about-grid">
    <div class="about-card">
      <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80" alt="Fresh ingredients on a kitchen counter" />
      <h2>Our mission</h2>
      <p>We make cooking accessible and joyful by combining recipe details, visuals, and step-by-step guidance.</p>
    </div>
    <div class="about-card">
      <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=800&q=80" alt="Cook plating a dish" />
      <h2>Who it serves</h2>
      <p>Beginners, busy home cooks, food lovers and chefs seeking new inspiration from global cuisines.</p>
    </div>
    <div class="about-card">
      <img src="https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=800&q=80" alt="Cooking lesson in a warm kitchen" />
      <h2>What we offer</h2>
      <p>Organized recipes, category browsing, cooking mode, tutorials and a friendly learning platform.</p>
    </div>
  </div>

  <section class="trial-reminder" aria-labelledby="trial-title">
    <div class="trial-card">
      <div class="trial-copy">
        <p class="trial-badge">Subscription Reminder</p>
        <h2 id="trial-title">Enjoy a FREE 3-Month Trial!</h2>
        <p>
          New users receive full access to all features for the first 3 months at no cost.
          After the trial period ends, a subscription will be required to continue accessing premium features.
        </p>
<RouterLink to="/subscription" class="button button-primary">
          View Subscription Plans
        </RouterLink>
      </div>

      <div class="trial-visual" aria-hidden="true">
        <div class="trial-illustration">🎉</div>
      </div>
    </div>
  </section>
</section>

</template>
