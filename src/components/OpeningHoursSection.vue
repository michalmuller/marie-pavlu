<template>
  <div id="opening-hours" class="container flex flex-wrap flex-row my-16">
    <h1 class="w-full text-3xl font-bold mx-4 sm:mx-0">Ordinační hodiny</h1>
    <p v-if="openState != 'zavřeno'" class="text-lg mt-2 w-full">
      právě: {{ openState }}
    </p>

    <div class="flex flex-wrap lg:flex-no-wrap mx-4 sm:mx-0">
      <div class="lg:w-1/2 w-full lg:mr-10">
        <h3 class="text-xl mt-8 font-bold">
          Poliklinika I, Poštovní 2428, Jablonec nad Nisou
        </h3>
        <!-- <p class="mt-2 text-secondary-text">Poliklinika I, Poštovní 2428, Jablonec nad Nisou</p> -->
        <opening-hours-card
          label="Jablonec nad Nisou"
          :time="jablonec"
        ></opening-hours-card>
        <div class="flex mt-8 items-start">
          <img
            class="w-12 mr-4"
            src="../../public/img/icons/test-tube.svg"
            alt
          />
          <div>
            <p class="font-semibold text-xl">Odběry krve Jablonec n. N.</p>
            <p class="mt-1 text-secondary-text">
              Úterý, středa, čtvrtek 7-9 hod.
              <br />Odběrova místnost - Immunoflow 4. patro poliklinika.
            </p>
          </div>
        </div>
      </div>

      <div class="lg:w-1/2 w-full lg:ml-10">
        <h3 class="text-xl mt-8 font-bold">Janov Nad Nisou 514</h3>
        <!-- <p class="mt-2 text-secondary-text">Janov Nad Nisou 514</p> -->
        <opening-hours-card
          label="Janov nad Nisou"
          :time="janov"
        ></opening-hours-card>
        <div class="flex items-start mt-8">
          <img
            class="w-12 mr-4"
            src="../../public/img/icons/test-tube.svg"
            alt
          />
          <div>
            <p class="font-semibold text-xl">Odběry krve Janov n. N.</p>
            <p class="mt-1 text-secondary-text">Čtvrtek 7:30-9 hod.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OpeningHoursCard from "./common/OpeningHoursCard";
import { setInterval } from "timers";
export default {
  components: { OpeningHoursCard },
  data() {
    //0 - Sunday
    return {
      timeNow: "",
      openState: "",
      openingHours: {
        0: {
          open: "06:00",
          close: "06:00",
        },
        1: {
          open: "09:00",
          close: "13:00",
        },
        2: {
          open: "12:00",
          close: "17:00",
        },
        3: {
          open: "09:00",
          close: "13:00",
        },
        4: {
          open: "07:00",
          close: "12:00",
        },
        5: {
          open: "09:00",
          close: "13:00",
        },
        6: {
          open: "06:00",
          close: "06:00",
        },
      },
      jablonec: [
        {
          name: "Pondělí",
          hours: "9-10 pro akutní, 10-15 pro zvané",
        },
        {
          name: "Úterý",
          hours: "Ordinace Janov n/Nisou",
        },
        {
          name: "Středa",
          hours: "9-10 pro akutní, 10-15 pro zvané",
        },
        {
          name: "Čtvrtek",
          hours: "Ordinace Janov n/Nisou",
        },
        {
          name: "Pátek",
          hours: "9-10 pro akutní, 10-15 pro zvané",
        },
      ],
      janov: [
        {
          name: "Pondělí",
          hours: "Ordinace Jablonec n/Nisou",
        },
        {
          name: "Úterý",
          hours: "12-13 pro akutní, 13-18 pro zvané",
        },
        {
          name: "Středa",
          hours: "Ordinace Jablonec n/Nisou",
        },
        {
          name: "Čtvrtek",
          hours: "9-10 pro akutní, 10-14 pro zvané",
        },
        {
          name: "Pátek",
          hours: "Ordinace Jablonec n/Nisou",
        },
      ],
    };
  },
  methods: {
    openAtTheMoment() {
      setInterval(() => {
        if (
          this.timeNow > this.openingHours[this.dayNow].open &&
          this.timeNow < this.openingHours[this.dayNow].close
        ) {
          this.openState = "otevřeno";
        } else {
          this.openState = "zavřeno";
        }
      }, 1000);
    },
    now() {
      setInterval(() => {
        var today = new Date();
        var hours = ("0" + today.getHours()).slice(-2);
        var minutes = ("0" + today.getMinutes()).slice(-2);
        var time = hours + ":" + minutes;
        this.timeNow = time;
      }, 1000);
    },
  },
  computed: {
    dayNow() {
      var d = new Date();
      var n = d.getDay();
      return n;
    },
  },
  mounted() {
    this.now();
    this.openAtTheMoment();
  },
};
</script>

<style lang="scss" scoped></style>
