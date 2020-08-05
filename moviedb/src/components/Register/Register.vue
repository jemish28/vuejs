<template>
  <div class="wrapper fadeInDown">
    <div id="formContent">
      <!-- Tabs Titles -->
      <!-- Icon -->
      <div class="fadeIn first">
        <img src="../../assets/user2.png" id="icon" alt="User Icon" />
      </div>
      <!-- Signup Form -->
      <form @submit.prevent="signup">
        <input
          type="text"
          class="fadeIn second"
          name="fullname"
          id="name"
          v-model="name"
          required
          placeholder="Full name"
        />
        <input
          type="text"
          id="login"
          class="fadeIn second"
          name="email"
          v-model="email"
          required
          placeholder="example@gmail.com"
        />
        <input
          type="password"
          id="password"
          class="fadeIn third"
          name="password"
          v-model="password"
          required
          placeholder="Password"
        />
        <input type="submit" class="fadeIn fourth" value="Register" />
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      is_admin: null,
    };
  },
  methods: {
    ...mapActions("auth", ["register"]),
    signup: function () {
      let data = {
        name: this.name,
        email: this.email,
        password: this.password,
        is_admin: this.is_admin,
      };
      // for module
      this.register(data)
        .then(() => this.$router.push("/"))
        .catch((err) => console.log(err));

      // this.$store
      //   .dispatch("register", data)
      //   .then(() => this.$router.push("/"))
      //   .catch((err) => console.log(err));
    },
  },
};
</script>
