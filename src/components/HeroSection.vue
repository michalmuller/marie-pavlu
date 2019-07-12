<template>
  <div>
    <!-- HERO IMAGE -->
    <div id="home" class="hero-image">
      <div class="flex justify-end introduction-container">
        <div class="w-1/2 mt-12 p-10 introduction rounded-lg rounded-r-none">
          <h1 class="text-3xl font-bold">MUDr. Marie Pavlů</h1>
          <h2 class="text-lg font-semibold mb-3">Praktický lékař pro dospělé</h2>
          <p class="md:w-5/6 lg:w-3/5 text-secondary-text">
            Nase ordinace muzete najit jak v
            <b>Jablonci nad Nisou</b> tak v
            <b>Janove nad Nisou.</b>
          </p>
          <p
            class="font-bold mt-8 md:w-5/6 lg:w-3/5"
          >V březnu 2019 jsme převzali pacienty od MUDr. Milana Kvasničky</p>
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
          text="Každý člověk je pro mě jedinečný a věnuji mu individuální pozornost"
        ></card>
        <card
          classes="mr-5 ml-5"
          colorFrom="#6ebff8"
          colorTo="#8E9AFD"
          :iconPath="require('../../public/img/icons/medical-book.svg')"
          title="Profesionalita"
          text="Více než 15 let praxe"
        ></card>

        <card
          colorFrom="#8E9AFD"
          colorTo="#A27BF1"
          :iconPath="require('../../public/img/icons/icu.svg')"
          title="Sluzby"
          text="Specializujeme se na péči o diabetiky 2.typu"
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
