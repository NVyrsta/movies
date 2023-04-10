<!-- FavoriteMovies.vue -->
<template>
    <button>
    <router-link to="/">BACK</router-link>
  </button>
  <div>
    <h2>My Favorites</h2>
    <div class="movies">
      <div class="movies__list">
        <div v-if="favorites.length === 0">
          <p>You haven't added any movies to your favorites yet.</p>
        </div>
        <div v-else v-for="movie in getFavorites()" :key="movie.imdbID" class="movie">
                    <div class="movie__img-container">
            <router-link :to="'/movie/' + movie.imdbID" class="movie__link">
              <img :src="movie.Poster" :alt="movie.Title + ' poster'" />
            </router-link>
            <button @click="$store.commit('toggleFavorites', movie)">
              Add to Favorites
            </button>
          </div>
            <p class="movie__year">{{ movie.Year }}</p>
            <h3 class="movie__title">{{ movie.Title }}</h3>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    favorites() {
      const favoritesFromStorage = JSON.parse(localStorage.getItem("favorites"));

      return favoritesFromStorage || this.$store.state.favorites;
    },
  },
  methods: {
    getFavorites() {
      return this.favorites;
    },
  },
};
</script>
