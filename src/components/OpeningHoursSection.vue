<template>
  <div id="opening-hours" class="container flex flex-wrap flex-row my-16">
    <h1 class="w-full text-3xl font-bold mx-4 sm:mx-0">Ordinační hodiny</h1>
    <div class="flex flex-wrap lg:flex-no-wrap mx-4 sm:mx-0">
      <div class="lg:w-1/2 w-full lg:mr-10">
        <h3 class="text-xl mt-8 font-semibold">Jablonec nad Nisou</h3>
        <p
          class="mt-2 text-secondary-text"
        >Consectetur adipiscing elit. Duis congue nisl elit, ac aliquam augue commodo vel. Quisque porttitor, felis id posuere efficitur.</p>
        <opening-hours-card label="Jablonec nad Nisou" :time="jablonec"></opening-hours-card>
      </div>

      <div class="lg:w-1/2 w-full lg:ml-10">
        <h3 class="text-xl mt-8 font-semibold">Janov nad Nisou</h3>
        <p
          class="mt-2 text-secondary-text"
        >Consectetur adipiscing elit. Duis congue nisl elit, ac aliquam augue commodo vel. Quisque porttitor, felis id posuere efficitur.</p>
        <opening-hours-card label="Janov nad Nisou" :time="janov"></opening-hours-card>
      </div>
    </div>
    <div class="w-full flex mt-8 mx-4 sm:mx-0">
      <img class="w-12 mr-4" src="../../public/img/icons/syringe.svg" alt />
      <div>
        <p class="font-bold text-2xl">Odbery krve</p>
        <p
          class="mt-1 text-secondary-text"
        >Krev odebirame v ut, st, čt 7-9 hod v odběrové místnosti 4.patro poliklinika Jablonec nad Nisou</p>
      </div>
    </div>
  </div>
</template>

<script>
import OpeningHoursCard from "./common/OpeningHoursCard";
export default {
  components: { OpeningHoursCard },
  data() {
    return {
      jablonec: [
        {
          name: "Pondeli",
          hours: "9-13 pro akutní 13-15 pro zvané"
        },
        {
          name: "Utery",
          hours: "Ordinace Janov n/Nisou"
        },
        {
          name: "Streda",
          hours: "9-13 pro akutní 13-15 pro zvané"
        },
        {
          name: "Ctvrtek",
          hours: "Ordinace Janov n/Nisou"
        },
        {
          name: "Patek",
          hours: "9-13 pro akutní 13-15 pro zvané"
        }
      ],
      janov: [
        {
          name: "Pondeli",
          hours: "Ordinace Jablonec n/Nisou"
        },
        {
          name: "Utery",
          hours: "12-17 pro akutní 17-18 pro zvané"
        },
        {
          name: "Streda",
          hours: "Ordinace Jablonec n/Nisou"
        },
        {
          name: "Ctvrtek",
          hours: "8.30- 12   pro akutní   12-14 pro zvané"
        },
        {
          name: "Patek",
          hours: "Ordinace Jablonec n/Nisou"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
