import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Recipes from '../views/Recipes.vue'
import RecipeDetails from '../views/RecipeDetails.vue'
import CookingMode from '../views/CookingMode.vue'
import Tutorials from '../views/Tutorials.vue'
import Categories from '../views/Categories.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import Profile from '../views/Profile.vue'
import Favorites from '../views/Favorites.vue'
import Notifications from '../views/Notifications.vue'
import AdminDashboard from '../views/AdminDashboard.vue'
import ManageRecipes from '../views/ManageRecipes.vue'
import ManageCategories from '../views/ManageCategories.vue'
import ManageTutorials from '../views/ManageTutorials.vue'
import ManageUsers from '../views/ManageUsers.vue'
import ManageReviews from '../views/ManageReviews.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/recipes', component: Recipes },
  { path: '/recipe/:id', component: RecipeDetails },
  { path: '/cooking/:id', component: CookingMode },
  { path: '/tutorials', component: Tutorials },
  { path: '/categories', component: Categories },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/dashboard', component: Dashboard },
  { path: '/profile', component: Profile },
  { path: '/favorites', component: Favorites },
  { path: '/notifications', component: Notifications },
  { path: '/admin', component: AdminDashboard },
  { path: '/admin/recipes', component: ManageRecipes },
  { path: '/admin/categories', component: ManageCategories },
  { path: '/admin/tutorials', component: ManageTutorials },
  { path: '/admin/users', component: ManageUsers },
  { path: '/admin/reviews', component: ManageReviews }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
