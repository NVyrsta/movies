<!-- // HomeView.vue; -->
<template>
  <div class="home">
    <form @submit.prevent="searchMovies" class="search-form">
      <input
        type="text"
        placeholder="What are you looking for?"
        v-model="query"
        class="search-form__input"
      />
      <input type="submit" value="Search" class="search-form__button" />
    </form>
    <button class="router-link-button">
      <router-link to="/favorites">Go to Favorites</router-link>
    </button>
    <div class="movies">
      <div class="movies__list">
        <div class="movie" v-for="movie in movies" :key="movie.imdbID">
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
            <button
              class="toggle-btn"
              @click="$store.commit('toggleFavorites', movie)"
            >
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
import { ref, computed, onMounted } from 'vue';
import { createStore } from 'vuex';
import env from '@/env.js';

export default {
  setup() {
    const query = ref('');
    const movieStore = createStore({
      state: {
        movies: []
      },
      mutations: {
        setMovies(state, movies) {
          state.movies = movies;
        },
        setQuery(state, query) {
          state.query = query;
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
              commit('setQuery', query);
              localStorage.setItem('query', query);
              localStorage.setItem('movies', JSON.stringify(data.Search));
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
    const movies = computed(() => movieStore.state.movies);

    const searchMovies = () => {
      movieStore.dispatch('searchMovies', query.value);
      query.value = '';
    };

    onMounted(() => {
      const storedQuery = localStorage.getItem('query');
      const storedMovies = localStorage.getItem('movies');

      if (storedQuery && storedMovies) {
        movieStore.commit('setQuery', storedQuery);
        movieStore.commit('setMovies', JSON.parse(storedMovies));
      } else {
        movieStore.dispatch('searchMovies', 'star wars');
      }
    });

    return {
      query,
      searchMovies,
      movies
    };
  }
};
</script>

<style lang="scss">
.router-link-button {
  position: absolute;
  top: 60px;
  padding: 20px;
  border: none;
  background-color: transparent;
  color: #fff;
  font-size: 18px;

  &::before {
    content: '←';
    width: 20px;
    height: 20px;
  }
  & a {
    color: inherit;
  }
}
.home {
  padding: 20px;
}

.search-form {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;

  // .search-form__input

  &__input {
    display: block;
    width: 60%;
    height: 40px;
    margin-right: 10px;
    outline: none;
    padding: 6px 16px;
    font-size: 20px;

    &::placeholder {
      padding: 6px 16px;
    }
  }

  // .search-form__button

  &__button {
    height: 40px;
    padding: 6px 16px;
  }
}
.movies {
  padding: 100px 20px 20px;
}
.movies__list {
  display: grid;
  grid-template-columns: 250px;
  justify-content: center;
  // align-items: center;
  gap: 20px;

  @media screen and (min-width: 560px) {
    grid-template-columns: repeat(2, 250px);
  }

  @media screen and (min-width: 850px) {
    grid-template-columns: repeat(3, 250px);
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 250px);
  }
}
.movie {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;

  & img {
    height: 446px;
    width: 250px;
  }

  & * {
    margin-bottom: 10px;
  }

  // .movie__img-container

  &__img-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  // .movie__year

  &__year {
    font-size: 10px;
  }

  // .movie__title

  &__title {
    font-size: 20px;
    color: #42b883;
    text-align: center;
    font-weight: 900;
  }
}
.favorites-title {
  text-align: center;
  color: #fff;
  font-size: 28px;
}

.toggle-btn {
  padding: 10px 20px;
}
</style>
