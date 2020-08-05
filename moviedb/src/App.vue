<template>
  <div id="app">
    <Header />
    <MainContainer />
  </div>
</template>

<script>
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
export default {
  name: "App",
  components: {
    Header,
    MainContainer,
    // Movie,
  },
  // created: function() {
  //   this.$http.interceptors.response.use(undefined, function(err) {
  //     return new Promise(function() {
  //       if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
  //         this.$store.dispatch(logout);
  //       }
  //       throw err;
  //     });
  //   });
  // },
};
</script>

<style></style>
