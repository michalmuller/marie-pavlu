<template>
  <div class="container flex flex-wrap flex-row my-12">
    <h1 class="w-full text-3xl font-bold">Ordincani hodiny</h1>
    <div class="flex flex-wrap lg:flex-no-wrap">
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
          hours: "9.00 - 15.00"
        },
        {
          name: "Utery",
          hours: "Ordinace Janov n/Nisou"
        },
        {
          name: "Streda",
          hours: "9.00 - 15.00"
        },
        {
          name: "Ctvrtek",
          hours: "Ordinace Janov n/Nisou"
        },
        {
          name: "Patek",
          hours: "9.00 - 15.00"
        }
      ],
      janov: [
        {
          name: "Pondeli",
          hours: "Ordinace Jablonec n/Nisou"
        },
        {
          name: "Utery",
          hours: "9.00 - 15.00"
        },
        {
          name: "Streda",
          hours: "Ordinace Jablonec n/Nisou"
        },
        {
          name: "Ctvrtek",
          hours: "9.00 - 15.00"
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
