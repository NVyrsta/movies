import { createStore } from 'vuex';

export default createStore({
  state: {
    movies: [],
    favorites: [],
    query: ''
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies;
    },
    saveFavoritesInLocalStorage(state) {
      window.localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    toggleFavorites(state, movie) {
      if (state.favorites.some((item) => item.imdbID === movie.imdbID)) {
        state.favorites = state.favorites.filter(
          (item) => item.imdbID !== movie.imdbID
        );
        this.commit('saveFavoritesInLocalStorage');
      } else {
        state.favorites.push(movie);
        this.commit('saveFavoritesInLocalStorage');
      }
      // this.commit('saveFavoritesInLocalStorage');
    },
    setFavorites(state, favorites) {
      state.favorites = favorites;
    }
  },
  actions: {
    async searchMovies({ commit }, query) {
      if (query.trim() !== '') {
        try {
          const response = await fetch(
            `https://www.omdbapi.com/?apikey=${env.apikey}&s=${query}`
          );
          const data = await response.json();
          commit('setMovies', data.Search);
          console.log('films', this.movies);
        } catch (error) {
          console.error(error);
        }
      }
    }
  },
  getters: {
    getMovieById: (state) => (id) => {
      return state.movies.find((movie) => movie.imdbID === id);
    }
  }
});
