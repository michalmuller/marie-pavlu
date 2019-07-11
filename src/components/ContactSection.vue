<template>
  <div id="contact" class="bg-light-blue">
    <div class="container flex flex-wrap justify-between flex-row py-16">
      <div class="w-full">
        <h1 class="font-bold text-3xl">Kontakt</h1>
        <p class="text-secondary-text pt-4">
          Mame ordinaci jak v Jablonci tak v Janove nad Nisou,
          <br />proto se prosim nezapomente podivat na oteviraci hodiny.
        </p>
      </div>
      <contact-information v-for="(city, index) in contact" :key="index" :city="city"></contact-information>
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
          padding: "pr-4",
          icon: "negative-margin",
          information: [
            {
              iconPath: require("../../public/img/icons/mail.svg"),
              label: "Email",
              text: "marieAugustinova@seznam.cz"
            },
            {
              iconPath: require("../../public/img/icons/phone.svg"),
              label: "Telefon",
              text: "777 723 457"
            },
            {
              iconPath: require("../../public/img/icons/location.svg"),
              label: "Adresa",
              text: "Dlouha 11, Jablonec nad Nisou"
            }
          ]
        },
        {
          name: "Janov nad Nisou",
          iconPath: require("../../public/img/icons/janov.svg"),
          padding: "pl-4",
          icon: "icon-janov",
          information: [
            {
              iconPath: require("../../public/img/icons/mail.svg"),
              label: "Email",
              text: "marieAugustinova@seznam.cz"
            },
            {
              iconPath: require("../../public/img/icons/phone.svg"),
              label: "Telefon",
              text: "777 723 457"
            },
            {
              iconPath: require("../../public/img/icons/location.svg"),
              label: "Adresa",
              text: "Hranicna 26, Janov nad Nisou"
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
