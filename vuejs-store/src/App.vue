<template>
  <div id="app">
    <div class="filmSearch">
      <input type="text" v-model="title" placeholder="Title" id="title" />
      <input type="text" v-model="year" placeholder="Year" id="year" />
      <button class="searchMovie" @click="getMovies">Search</button>
    </div>
    <div class="filmes">
      <li v-for="movie in movies" :key="movie.id">
        <p>Nome: {{ movie.Title }}</p>
        <p>Ano: {{movie.Year}}</p>
        <p>Tipo: {{movie.Type}}</p>
        <img :src="movie.Poster" alt />
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data: function() {
    return {
      year: ""
    };
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    },
    title: {
      get() {
        return this.$store.state.title;
      },
      set(value) {
        this.$store.commit("changeTitle", value);
      }
    }
  },
  methods: {
    getMovies() {
      this.$store.dispatch("getMovies");
    }
  }
};
</script>

<style>
</style>
