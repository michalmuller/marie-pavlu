<template>
  <div id="equipment" class="container flex flex-wrap justify-between flex-row py-16">
    <div class="hidden sm:block w-2/5 pr-10">
      <img src="../../public/img/marie.png" alt />
    </div>
    <div class="sm:w-3/5 w-full sm:pl-10 pl-4 pr-4 sm:pr-0">
      <h1 class="font-bold text-3xl mb-8">Vybavení a Služby</h1>

      <equipment title="Očkování" :iconPath="require('../../public/img/icons/syringe.svg')">
        <template v-slot:text>
          <p class="text-secondary-text">
            <b>Tetanus</b> - očkování proti infekčnímu onemocnění
            <br />
            <b>Hepatitida A, B</b> - očkování proti žloutence
            <br />
            <b>FSME -</b> vakcína proti klíšťové encephalitidě
            <br />
            <b>Prevenar 13</b> - očkování proti pneumokokovému zápalu plic
          </p>
        </template>
      </equipment>

      <equipment title="Pojistovny" :iconPath="require('../../public/img/icons/contract.svg')">
        <template v-slot:text>
          <p class="text-secondary-text">
            <b>VZP</b> - všeobecná zdravotní pojišťovna
            <br />
            <b>MVČR</b> - pojišťovna ministervstva vnitra
            <br />Ostatní pojišťovny jsou po domluvě také možné
          </p>
        </template>
      </equipment>

      <equipment title="Pristroje a Zarizeni" :iconPath="require('../../public/img/icons/cpr.svg')">
        <template v-slot:text>
          <p class="text-secondary-text">
            <b>CRP -</b>
            test na zjištění infekce,
            <br />
            <b>INR -</b> test na ředění krve
            <br />
            <b>Strept A -</b> zjištění přítomnosti Steptokoka
            <br />
            <b>GHb -</b> zjištění dlouhodobé hladiny cukru v krvi
            <br />
            <b>Glykémie -</b> zjištění aktuální hladiny cukru v krvi
            <br />Zjištění Okultního krvácení ve stolici
            <br />
            <b>EKG</b> v ordinaci v Jablonec Nad Nisou.
          </p>
        </template>
      </equipment>
      <button
        @click="pricesModalShowing=true"
        class="bg-pink hover:bg-dark-pink py-2 px-10 rounded font-bold text-white outline-none"
        style="margin-left:70px"
      >Zobrazit Cenik</button>
    </div>

    <modal :showing="pricesModalShowing" @close="pricesModalShowing = false">
      <h2 class="text-2xl pb-2 font-bold">Cenik</h2>
      <p class="mb-8">cenik bude doplnen</p>
      <p></p>
      <button
        class="text-white px-4 py-2 text-sm uppercase tracking-wide font-bold rounded btn-gradient"
        @click="pricesModalShowing = false"
      >Zavrit</button>
    </modal>
  </div>
</template>


<script>
// click event on template itself:
// v-on:click.native="pricesModalShowing= !pricesModalShowing"
import Equipment from "./common/Equipment";
import Modal from "./common/Modal";
export default {
  components: { Equipment, Modal },
  data() {
    return {
      pricesModalShowing: false,
      priceList: {
        insurance: "Pojistovny"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
b {
  color: #242424;
  font-weight: 600;
}

.btn-gradient {
  background: linear-gradient(to right, #47c8e2, #6ebff8);
}
</style>
