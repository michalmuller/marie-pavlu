<template>
  <div id="contact" class="bg-light-blue">
    <div class="container flex flex-wrap justify-between flex-row py-16 px-4 sm:px-0">
      <div class="w-full">
        <h1 class="font-bold text-3xl">Kontakt</h1>
        <p class="text-secondary-text pt-4">
          Ordinaci máme jak v Jablonci tak v Janově nad Nisou,
          <br />proto se prosím nezapomeňte podívat na otevírací hodiny a ve které ordinaci sloužíme.
        </p>
      </div>
      <div class="flex flex-wrap w-full">
        <contact-information
          v-for="(city, index) in contact"
          :key="index"
          :city="city"
          class="w-full md:w-1/2"
        ></contact-information>
      </div>
    </div>
  </div>
</template>

<script>
import ContactInformation from "./common/ContactInformation";
export default {
  components: { ContactInformation },
  data() {
    return {
      contact: [
        {
          name: "Jablonec nad Nisou",
          iconPath: require("../../public/img/icons/jablonec.svg"),
          padding: "pr-0 md:pr-4  pl-0",
          icon: "negative-margin",
          information: [
            {
              iconPath: require("../../public/img/icons/mail.svg"),
              label: "mail",
              text: "ordinace.medikva.gmail.com"
            },
            {
              iconPath: require("../../public/img/icons/phone.svg"),
              label: "",
              text: "483 341 225"
            },
            {
              iconPath: require("../../public/img/icons/location.svg"),
              label: "",
              text: "Poliklinika I, Poštovní 2428, Jablonec nad Nisou",
              gMap:
                "https://www.google.com/maps/place/Po%C5%A1tovn%C3%AD+2428%2F8,+466+01+Jablonec+nad+Nisou,+Czechia/@50.7237417,15.163313,17z/data=!3m1!4b1!4m5!3m4!1s0x470ecad2748dda93:0xf10ed0a00582c2bc!8m2!3d50.7237383!4d15.1655017"
            }
          ]
        },
        {
          name: "Janov nad Nisou",
          iconPath: require("../../public/img/icons/janov.svg"),
          padding: "pl-0 md:pl-4",
          icon: "icon-janov",
          information: [
            {
              iconPath: require("../../public/img/icons/mail.svg"),
              label: "mail",
              text: "ordinace.medikva.gmail.com"
            },
            {
              iconPath: require("../../public/img/icons/phone.svg"),
              label: "",
              text: "483 380 012"
            },
            {
              iconPath: require("../../public/img/icons/location.svg"),
              label: "",
              text: "Janov Nad Nisou 514",
              gMap:
                "https://www.google.com/maps/place/Janov+nad+Nisou+514,+468+11+Janov+nad+Nisou,+Czechia/@50.7729918,15.1655906,17z/data=!3m1!4b1!4m5!3m4!1s0x470934a6f0a7ecc7:0x206a5349c69adfd6!8m2!3d50.772988!4d15.167779"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style>
</style>
