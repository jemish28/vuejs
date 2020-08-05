<template>
  <div class="movie">
    <b-card
      no-body
      class="overflow-hidden"
      bg-variant="dark"
      text-variant="white"
      style="max-width:100%;max-height:500px;margin-top:15px"
    >
      <b-row no-gutters>
        <b-col md="4">
          <b-card-img
            :src="`https://image.tmdb.org/t/p/w185_and_h278_bestv2`+movieDetail.poster_path"
            alt="Image"
            class="rounded-0"
          ></b-card-img>
        </b-col>
        <b-col md="8">
          <b-card-body :title="movieDetail.title">
            <b-card-text>{{ movieDetail.id }}</b-card-text>
            <b-card-text>{{ movieDetail.overview }}</b-card-text>
            <span>
              <b>vote_count::</b>
              {{ movieDetail.vote_count }}
            </span>
            <br />
            <span>
              <b>budget::</b>
              {{ movieDetail.budget }}
            </span>
            <span>
              <b>original_language::</b>
              {{ movieDetail.original_language }}
            </span>
            <br />
            <span>
              <b>release_date::</b>
              {{ movieDetail.release_date }}
            </span>
            <br />
            <span>
              <b>vote_average::</b>
              {{ movieDetail.vote_average }}
            </span>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
    <div class="col-md-12 text-center">
      <a v-on:click="goToMainPage()" class="btn btn-primary">
        <span style="color:white">Go Back</span>
      </a>
      <!-- <button type="submit" id="new" v-on:click="" class="btn btn-warning">Back</button> -->
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "Detail",
  data() {
    return {
      // movieDetail: [],
    };
  },
  props: {
    parentData: {
      type: Number,
    },
  },
  computed: {
    ...mapGetters("movies", ["movieDetail"]),
  },
  mounted() {
    this.getMovieDetail();
    // axios
    //   .get(
    //     " https://api.themoviedb.org/3/movie/" +
    //       this.$route.params.id +
    //       "?api_key=38252124dbbb11a893376bd6da75d318&language=en-US"
    //   )
    //   .then((response) => {
    //     this.movieDetail = response.data;
    //     console.log("detail", this.movieDetail);
    //   });
  },
  methods: {
    goToMainPage: function () {
      this.$router.back();
      this._resetDetail();
      // this.$router.go(-1);
      // this.$router.push("/movies");
    },
    ...mapMutations("movies", ["_resetDetail"]),
    ...mapActions("movies", ["getMovieDetail"]),
  },
};
</script>
