<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/landingPageLogo.jpg"
      class="landing-photo"
    />
    <HomePage />
  </div>
  <div class="date"></div>
</template>

<script>
// @ is an alias to /src
import HomePage from "../components/HomePage.vue";
export default {
  name: "Home",
  components: {
    HomePage,
  },
};
</script>

<style scoped>
.landing-photo {
  width: 40%;
  height: 50%;
  border-radius: 50%;
  filter: hue-rotate(90deg);
}

.message {
  color: whitesmoke;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
