# TODO

## Subscription + Dashboard UI updates

- [ ] Add `/subscription` route and create `src/views/Subscription.vue` implementing:
  - Hero + reminder banner
  - Free trial highlight card
  - Basic & Premium plan cards
  - Payment form with validation, CVV masking, card formatting
  - Subscription summary (Total Due Today = $0 during trial)
  - Encrypted payment storage (demo) + never show full card after submit
  - Success notification + activate subscription (demo) + redirect to `/dashboard`
- [x] Update `src/views/About.vue` so **View Subscription Plans** routes to `/subscription`
- [ ] Remove top navbar only on `/dashboard`:

  - Update `src/App.vue` to hide `<Navbar />` when route is `/dashboard`
  - Update `src/views/Dashboard.vue` to use `<Sidebar />` and expand content width
- [ ] Run dev server / quick manual verification

