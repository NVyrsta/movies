// routes.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MovieDetails from '../views/MovieDetails.vue';
import FavoriteMovies from '../views/FavoriteMovies.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/movie/:id',
    name: 'Movie Detail',
    component: MovieDetails
  },
  {
    path: '/favorites',
    name: 'Favorite Movies',
    component: FavoriteMovies
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
