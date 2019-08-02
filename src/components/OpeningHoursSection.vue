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
        <div class="flex mt-8 items-start">
          <img class="w-12 mr-4" src="../../public/img/icons/test-tube.svg" alt />
          <div>
            <p class="font-bold text-xl">Odbery krve Jablonec</p>
            <p class="mt-1 text-secondary-text">
              Úterý, středa, čtvrtek 7-9 hod.
              <br />Odběrova místnost 4.patro. poliklinika Jablonec.
            </p>
          </div>
        </div>
      </div>

      <div class="lg:w-1/2 w-full lg:ml-10">
        <h3 class="text-xl mt-8 font-semibold">Janov nad Nisou</h3>
        <p
          class="mt-2 text-secondary-text"
        >Consectetur adipiscing elit. Duis congue nisl elit, ac aliquam augue commodo vel. Quisque porttitor, felis id posuere efficitur.</p>
        <opening-hours-card label="Janov nad Nisou" :time="janov"></opening-hours-card>
        <div class="flex items-start mt-8">
          <img class="w-12 mr-4" src="../../public/img/icons/test-tube.svg" alt />
          <div>
            <p class="font-bold text-xl">Odbery krve Janov</p>
            <p class="mt-1 text-secondary-text">Čtvrtek 7-9 hod.</p>
          </div>
        </div>
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
          name: "Pondělí",
          hours: "9-13 pro akutní, 13-15 pro zvané"
        },
        {
          name: "Úterý",
          hours: "Ordinace Janov n/Nisou"
        },
        {
          name: "Středa",
          hours: "9-13 pro akutní, 13-15 pro zvané"
        },
        {
          name: "Čtvrtek",
          hours: "Ordinace Janov n/Nisou"
        },
        {
          name: "Pátek",
          hours: "9-13 pro akutní, 13-15 pro zvané"
        }
      ],
      janov: [
        {
          name: "Pondělí",
          hours: "Ordinace Jablonec n/Nisou"
        },
        {
          name: "Úterý",
          hours: "12-17 pro akutní, 17-18 pro zvané"
        },
        {
          name: "Středa",
          hours: "Ordinace Jablonec n/Nisou"
        },
        {
          name: "Čtvrtek",
          hours: "8.30- 12 pro akutní, 12-14 pro zvané"
        },
        {
          name: "Pátek",
          hours: "Ordinace Jablonec n/Nisou"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
