<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">MovieDB</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link to="/">
            <b-nav-item href="/">Home</b-nav-item>
          </router-link>
          <router-link to="/movies">
            <b-nav-item href="/movies">Movie</b-nav-item>
          </router-link>

          <!-- <b-nav-item href="#">Web Series</b-nav-item> -->
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <router-link to="/login" v-if="!isLoggedInfun">
              <b-nav-item href="/login">Login</b-nav-item>
            </router-link>
          </b-nav-form>

          <!-- Using 'button-content' slot -->
          <b-nav-item-dropdown right v-if="isLoggedInfun" to="/login">
            <template v-slot:button-content>
              <em>{{ userName.name }}</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item @click="sign_out">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      activeClass: "active",
      isActive: false,
    };
  },
  computed: {
    ...mapGetters("auth", ["isLoggedIn", "user"]),
    isLoggedInfun() {
      return this.isLoggedIn;
    },
    userName() {
      return this.user;
    },
  },
  methods: {
    ...mapActions("auth", ["logout"]),
    sign_out: function () {
      this.logout().then(() => {
        this.$router.push("/login");
      });
      // this.$store.dispatch("logout").then(() => {
      //   this.$router.push("/login");
      // });
    },
    toggleNav: function () {
      if (this.isActive == false) this.isActive = true;
      else this.isActive = false;
    },
  },
};
</script>

<style scoped></style>
