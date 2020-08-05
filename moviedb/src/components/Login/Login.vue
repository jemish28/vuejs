<template>
  <div class="wrapper fadeInDown">
    <div id="formContent">
      <!-- Tabs Titles -->
      <!-- Icon -->
      <div class="fadeIn first">
        <img src="../../assets/user.png" id="icon" alt="User Icon" />
      </div>
      <!-- Login Form -->
      <form @submit.prevent="sign_in">
        <input
          type="text"
          id="login"
          class="fadeIn second"
          name="login"
          v-model="email"
          placeholder="example@gmail.com"
          required
        />
        <input
          type="password"
          id="password"
          class="fadeIn third"
          name="login"
          v-model="password"
          placeholder="Password"
          required
        />
        <input type="submit" class="fadeIn fourth" value="Log In" />
        <!-- <button type="submit">Login</button> -->
      </form>

      <!-- Remind Passowrd -->
      <div id="formFooter">
        <router-link to="/signup">
          <a class="underlineHover" href="/signup">Register Now</a>
        </router-link>
        <br />
        <a class="underlineHover" href="#">Forgot Password?</a>
      </div>
    </div>
  </div>
</template>
<style src="./login.css"></style>
<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {},
  methods: {
    ...mapActions("auth", ["login"]),
    sign_in: function () {
      let email = this.email;
      let password = this.password;
      // this.login({ email, password })
      //   .then(() => {
      //     console.log("sssdfsdfsdfsdfsdfsdf", this);
      //     this.$router.push("/");
      //   })
      //   .catch((err) => console.log(err));
      // console.log(email, password);
      this.$store
        .dispatch("auth/login", { email, password })
        .then(() => this.$router.push("/"))
        .catch((err) => console.log(err));
    },
  },
};
</script>
