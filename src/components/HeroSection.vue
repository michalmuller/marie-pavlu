<template>
  <div>
    <!-- HERO IMAGE -->
    <div id="home" class="hero-image">
      <div class="flex justify-end introduction-container">
        <div
          class="lg:w-1/2 md:w-2/3 sm:w-2/3 w-4/5 mt-12 px-10 py-8 introduction rounded-lg rounded-r-none"
        >
          <h1 class="text-3xl font-bold">MUDr. Marie Pavlů</h1>
          <h2 class="text-xl font-semibold mb-4">
            Praktický lékař pro dospělé
          </h2>
          <div class="md:w-5/6 lg:w-3/5 text-secondary-text">
            <a
              class="block"
              target="_blank"
              href="https://www.google.com/maps/place/Po%C5%A1tovn%C3%AD+2428%2F8,+466+01+Jablonec+nad+Nisou,+Czechia/@50.7237417,15.163313,17z/data=!3m1!4b1!4m5!3m4!1s0x470ecad2748dda93:0xf10ed0a00582c2bc!8m2!3d50.7237383!4d15.1655017"
              >Jablonec nad Nisou, Poliklinika I, Postovni 2428.</a
            >

            <a
              class="block mt-1"
              target="_blank"
              href="https://www.google.com/maps/place/Janov+nad+Nisou+514,+468+11+Janov+nad+Nisou,+Czechia/@50.7729918,15.1655906,17z/data=!3m1!4b1!4m5!3m4!1s0x470934a6f0a7ecc7:0x206a5349c69adfd6!8m2!3d50.7729884!4d15.1677793"
              >Janov nad Nisou, 514.</a
            >
          </div>
          <news class="mt-6">
            <p class="px-3">
              V případě, že nezvedáme telefon, veškéré vaše požadavky na léky,
              objednání nebo výsledky prosím pište formou SMS na telefon:
              <b>601 538 013</b>
            </p>
          </news>
        </div>
      </div>
    </div>
    <!-- KEY POINTS -->
    <div class="bg-light-blue">
      <div class="container flex flex-wrap sm:flex-no-wrap">
        <card
          class="lg:w-1/3 w-full ml-4 mr-4 sm:mr-0 sm:ml-0"
          colorFrom="#4dd0eb"
          colorTo="#6ebff8"
          :iconPath="require('../../public/img/icons/handshake.svg')"
          title="Osobní přístup"
          text="Každý člověk je pro nás jedinečný a věnujeme mu individuální pozornost"
        ></card>
        <card
          class="lg:w-1/3 w-full sm:mr-6 sm:ml-6 ml-4 mr-4"
          colorFrom="#6ebff8"
          colorTo="#8E9AFD"
          :iconPath="require('../../public/img/icons/medical-book.svg')"
          title="Profesionalita"
          text="Profesionalita a zaručená kvalita poskytovaných služeb s více než 15 let praxe"
        ></card>

        <card
          class="lg:w-1/3 w-full ml-4 mr-4 sm:mr-0 sm:ml-0"
          colorFrom="#8E9AFD"
          colorTo="#A27BF1"
          :iconPath="require('../../public/img/icons/icu.svg')"
          title="Péče o diabetiky"
          text="Specializujeme se na péči o diabetiky 2. typu"
        ></card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./common/Card";
import News from "./common/News";
export default {
  components: { Card, News },
};
</script>

<style lang="scss" scoped>
a:hover {
  font-weight: 600;
  color: #242424;
}
.hero-image {
  height: 700px;
  background-image: url("../../public/img/hero.jpg");
  background-size: cover;
  background-position: center;

  .introduction-container {
    .introduction {
      background-color: rgba($color: #fff, $alpha: 0.9);
    }
  }
}
</style>
