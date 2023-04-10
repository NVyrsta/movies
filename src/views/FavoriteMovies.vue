<template>
  <button>
    <router-link to="/" class="router-link-button">Back</router-link>
  </button>
  <div>
    <h2 class="favorites-title">My Favorites</h2>
    <div class="movies">
      <div class="movies__list">
        <div v-if="favorites.length === 0">
          <p>You haven't added any movies to your favorites yet.</p>
        </div>
        <div
          v-else
          v-for="movie in getFavorites()"
          :key="movie.imdbID"
          class="movie"
        >
          <div class="movie__img-container">
            <router-link :to="'/movie/' + movie.imdbID" class="movie__link">
              <img
                v-if="movie.Poster !== 'N/A'"
                :src="movie.Poster"
                :alt="movie.Title + ' poster'"
              />
              <img
                v-else
                src="../assets/images/cinema-hero-img.jpg"
                :alt="movie.Title + ' poster'"
              />
            </router-link>
            <button class="toggle-btn" @click="removeFromFavorites(movie)">
              Remove from favorites
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
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      favorites: (state) => state.favorites
    })
  },
  methods: {
    getFavorites() {
      return this.favorites;
    },
    removeFromFavorites(movie) {
      this.$store.commit('toggleFavorites', movie);
      window.localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }
  },
  created() {
    const favorites = window.localStorage.getItem('favorites');
    if (favorites) {
      this.$store.commit('setFavorites', JSON.parse(favorites));
    }
  }
};
</script>
