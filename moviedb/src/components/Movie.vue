<template>
  <div class="row">
    <div v-for="(list,index) in moviesList" v-bind:key="index" class="col-md-3 col-6 my-2 movie">
      <b-card
        :title="list.title"
        :img-src="
          `https://image.tmdb.org/t/p/w185_and_h278_bestv2` + list.poster_path
        "
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <span class="badge badge-pill badge-info">{{ list.release_date }}</span>
        <b-card-text class="overview">{{ list.overview }}</b-card-text>
        <!-- <router-link :to="{ name: 'movies', params: { id: lilst.id } }">
            <b-button variant="info">More info</b-button></router-link
        >-->
        <!-- <router-link :to="{ path: '/movies/', id: lilst.id }"> -->
        <!-- <router-link :to="`/movies/${list.id}`"> -->
        <b-button v-on:click="$router.push('/movies/' + list.id)" variant="info">More info</b-button>
        <!-- <b-button variant="info">More info</b-button> -->
        <!-- </router-link> -->
      </b-card>
    </div>
    <!-- Load More -->
    <div class="col-md-12 text-center">
      <button
        type="submit"
        id="new"
        v-on:click="getMovies(page += 1)"
        class="btn btn-warning"
      >Load More</button>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
  name: "MainContainer",
  data() {
    return {
      results: [],
      page: 1,
    };
  },
  computed: {
    ...mapGetters("movies", ["moviesList"]),
  },

  methods: {
    // loadMore() {
    //   this.page += 1;
    //   axios
    //     .get(
    //       `https://api.themoviedb.org/3/movie/upcoming?api_key=38252124dbbb11a893376bd6da75d318&language=en-US&page=` +
    //         this.p
    //     )
    //     .then((response) => {
    //       this.results = [...this.results, ...response.data.results];
    //     });
    // },
    // loadMore(page) {
    //   this.getMovies(page);
    // },
    ...mapActions("movies", ["getMovies"]),
  },
  mounted() {
    this.getMovies();
    // this.$store.dispatch("movies/getMovies");

    // axios
    //   .get(
    //     `https://api.themoviedb.org/3/movie/upcoming?api_key=38252124dbbb11a893376bd6da75d318&language=en-US&page=1`
    //   )
    //   .then((response) => {
    //     this.results = response.data.results;
    //     console.log(this.results);
    //   });
  },
};
</script>
<style scoped>
.card-title {
  white-space: nowrap;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 0;
}
/**/
.overview {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin-top: 10px;
}
</style>
