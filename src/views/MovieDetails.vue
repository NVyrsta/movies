<template>
  <button>
    <router-link to="/">BACK</router-link>
  </button>
  <div class="movie-details">
    <div class="movie-details__content">
      <div class="movie-details__img-container">
        <img :src="movie.Poster" alt="movie poster" />
      </div>
      <div class="movie-details__info">
        <h2 class="movie-details__title">{{ movie.Title }}</h2>
        <h3 class="movie-details__actors">Actors: {{ movie.Actors }}</h3>
        <h4 class="movie-details__genre">{{ movie.Genre }}</h4>

        <div class="movie-details__statistics">
          <span class="movie-details__year">{{ movie.Year }}</span>
          <span class="movie-details__runtime">{{ movie.Runtime }}</span>
          <span class="movie-details__imdbRating">
            <img src="../assets/images/imdb-icon.svg" alt="icon" />
            {{ movie.imdbRating }}</span
          >
        </div>

        <p class="movie-details__plot">{{ movie.Plot }}</p>
        <div class="movie-details__director">
          Director: {{ movie.Director }}
        </div>
        <div class="movie-details__country">Country: {{ movie.Country }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
// import { useStore } from 'vuex';
import env from '@/env.js';

export default {
  setup() {
    const movie = ref({});
    const route = useRoute();
    // const store = useStore();

    onBeforeMount(async () => {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${env.apikey}&i=${route.params.id}&plot=full`
      );
      const data = await response.json();
      movie.value = data;
    });

    return {
      movie
    };
  }
};
</script>

<style lang="scss">
.movie-details {
  margin: 0 auto;
  color: #fff;
  line-height: 1.5;
  padding: 20px 20px;
  // .movie-details__content

  &__content {
    padding: 20px;
    @media screen and (min-width: 768px) {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
    }
  }

  // .movie-details__img-container

  &__img-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  // .movie-details__info

  &__info {
    @media screen and (min-width: 768px) {
      padding: 20px;
    }
  }

  // .movie-details__title

  &__title {
    font-size: 28px;
    color: #42b883;
    text-align: center;
    letter-spacing: 4px;
    font-weight: 900;
  }

  // .movie-details__actors

  &__actors {
    font-style: italic;
  }

  // .movie-details__genre

  &__genre {
    text-align: right;
    font-size: 12px;
  }

  // .movie-details__statistics

  &__statistics {
    margin-bottom: 16px;
    display: flex;
    justify-content: center;
    align-items: center;

    & * {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 14px;
    }
  }

  // .movie-details__imdbRating

  &__imdbRating {
    display: flex;
    flex-direction: row;
  }

  // .movie-details__plot

  &__plot {
    margin-bottom: 16px;
    text-align: justify;
  }

  // .movie-details__director

  &__director {
    font-style: italic;
  }

  // .movie-details__country

  &__country {
    font-style: italic;
  }
}
</style>
