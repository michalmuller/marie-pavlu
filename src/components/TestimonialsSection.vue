<template>
  <div class="bg-gradient">
    <div class="container flex flex-wrap justify-between flex-row py-16 px-4 sm:px-0">
      <h1 class="w-full font-bold text-3xl text-white pb-10">Co o nás říkají naši pacienti</h1>
      <testimonial v-for="(person, index) in people" :key="index" :person="person"></testimonial>
    </div>
  </div>
</template>

<script>
import Testimonial from "./common/Testimonial";
export default {
  components: { Testimonial },
  data() {
    return {
      people: [
        {
          name: "Roman Muller",
          quote:
            " Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra,  finibus justo. Etiam eu vehicula felis.",
          img: require("../../public/img/appointment.png"),
          cardMargin: "mr-0 md:mr-6"
        },
        {
          name: "Roman Muller",
          quote:
            "Lorem ipsum dolor sit amet, velit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.",

          img: require("../../public/img/appointment.png"),
          cardMargin: "mx-0 md:mx-3"
        },
        {
          name: "Roman Muller",
          quote:
            "Lorem ipsum dolor sit amet, velit. Donec varius vehicula magna sit amet auctor. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.",

          img: require("../../public/img/appointment.png"),
          cardMargin: "ml-0 md:ml-6"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.bg-gradient {
  background: linear-gradient(-45deg, #8e9afd, #6ebff8);
}
</style>
