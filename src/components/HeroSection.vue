<template>
  <div>
    <!-- HERO IMAGE -->
    <div id="home" class="hero-image">
      <div class="flex justify-end introduction-container">
        <div class="w-1/2 mt-12 p-10 introduction rounded-lg rounded-r-none">
          <h1 class="text-3xl font-bold mb-2">Váš praktický lékař</h1>
          <p class="md:w-5/6 lg:w-3/5 text-secondary-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br />labore et dolore sed do eiusmod tempor incididunt ut
          </p>
        </div>
      </div>
    </div>
    <!-- KEY POINTS -->
    <div class="bg-light-blue">
      <div class="container flex">
        <card
          colorFrom="#4dd0eb"
          colorTo="#6ebff8"
          :iconPath="require('../../public/img/icons/handshake.svg')"
          title="Osobní přístup"
          text="O své pacienty jako o své
                  děti. Dáváme jim svoji
                  veškerou pozornost"
        ></card>
        <card
          classes="mr-5 ml-5"
          colorFrom="#6ebff8"
          colorTo="#8E9AFD"
          :iconPath="require('../../public/img/icons/medical-book.svg')"
          title="Profesionalita"
          text="O své pacienty jako o své
                  děti. Dáváme jim svoji
                  veškerou pozornost"
        ></card>

        <card
          colorFrom="#8E9AFD"
          colorTo="#A27BF1"
          :iconPath="require('../../public/img/icons/icu.svg')"
          title="Vybaveni"
          text="O své pacienty jako o své
                  děti. Dáváme jim svoji
                  veškerou pozornost"
        ></card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./common/Card";
export default {
  components: { Card }
};
</script>

<style lang="scss" scoped>
.hero-image {
  height: 700px;
  background-image: url("../../public/img/hero.jpg");
  background-size: cover;
  background-position: center;

  .introduction-container {
    .introduction {
      background-color: rgba($color: #fff, $alpha: 0.83);
    }
  }
}
</style>
