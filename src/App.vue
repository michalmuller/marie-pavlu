<template>
  <div id="app" class="font-body text-primary-text antialiased leading-tight">
    <navigation></navigation>
    <router-view class="mt-16" />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
export default {
  name: "App",
  components: { Navigation },

  computed: {}
};
</script>

<style lang="scss">
@import "../node_modules/tailwindcss/base.css";
@import "../node_modules/tailwindcss/components.css";
@import "../node_modules/tailwindcss/utilities.css";

@import url("https://fonts.googleapis.com/css?family=Nunito:400,600,700&display=swap");

body {
  background-color: white;
  font-family: "Nunito", sans-serif;
}
</style>
