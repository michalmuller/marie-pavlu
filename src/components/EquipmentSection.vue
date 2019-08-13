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
            <b>Tetanus -</b> povinné očkování proti tetanu
            <br />
            <b>Hepatitida A, B -</b> očkování proti žloutence typu A, B
            <br />
            <b>FSME -</b> vakcína proti klíšťové encephalitidě
            <br />
            <b>Prevenar 13 -</b> očkování proti pneumokokovému zápalu plic
            <br />
            <b>Boostrix -</b> nadstandartní očkování za poplatek proti tetanu, černému kašli a záškrtu
          </p>
        </template>
      </equipment>

      <equipment title="Pojišťovny" :iconPath="require('../../public/img/icons/contract.svg')">
        <template v-slot:text>
          <p class="text-secondary-text">
            <b>VZP -</b> všeobecná zdravotní pojišťovna
            <br />
            <b>MVČR -</b> pojišťovna ministervstva vnitra
            <br />Ostatní pojišťovny jsou po domluvě také možné
          </p>
        </template>
      </equipment>

      <equipment title="Přístroje a Zařízení" :iconPath="require('../../public/img/icons/cpr.svg')">
        <template v-slot:text>
          <p class="text-secondary-text">
            <b>CRP -</b>
            test na přítomnost bakteriální infekce a vhodnosti nasazení antibiotik
            <br />
            <b>INR -</b> test při léčbě warfarinem
            <br />
            <b>Strept A -</b> test na zjištění přítomnosti Streptokoka v krku
            <br />
            <b>GHb -</b> zjištění dlouhodobé hladiny cukru v krvi
            <br />
            <b>Glykémie -</b> zjištění aktuální hladiny cukru v krvi
            <br />
            <b>test na OK -</b> přístrojový test na zjištění krve ve stolici prováděný v ordinaci
            <br />
            <b>EKG</b> v ordinaci v Jablonec Nad Nisou
          </p>
        </template>
      </equipment>
      <button
        @click="pricesModalShowing=true"
        class="bg-pink hover:bg-dark-pink py-2 px-10 rounded font-bold text-white outline-none"
        style="margin-left:70px"
      >Zobrazit Ceník</button>
    </div>

    <modal :showing="pricesModalShowing" @close="pricesModalShowing = false">
      <h2 class="text-2xl pb-2 font-bold">Ceník</h2>
      <div class="border rounded">
        <div
          v-for="(item, index) in priceList.column1"
          :key="index"
          class="flex w-full justify-between py-3 font-semibold price-list-item lowercase"
        >
          <span class="px-4">{{item.name}}</span>
          <span class="px-4">{{item.price}}</span>
        </div>
      </div>
      <!-- <div class="flex w-full">
        <div class="w-1/2">s</div>
        <div class="w-1/2">sa</div>
      </div>-->
      <button
        class="text-white mt-6 px-4 py-2 text-sm uppercase tracking-wide font-bold rounded btn-gradient"
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
      pricesModalShowing: true,
      priceList: {
        column1: [
          {
            name: "VSTUPNÍ PROHLÍDKA PRO ZAMĚSTNAVATELE",
            price: "300,-"
          },
          {
            name:
              "PREVENTIVNÍ PROHLÍDKY PRO KURZY (SVÁŘEČ, VZV, ELEKTRIKÁŘ, ATD.)",
            price: "200,-"
          },
          {
            name: "POSUDEK O ZDRAV.ZPŮSOB.PRO ÚŘAD PRÁCE",
            price: "200,-"
          },
          {
            name: "ŽÁDOSTI O UMÍSTĚNÍ DO USP, DŮM PRO SENIORY, DOMOV DŮCHODCŮ",
            price: "300,-"
          },
          {
            name: "SAMOŽÁDOSTI (LÁZNĚ,VÝPISY PRO PRÁVNICKÉ OSOBY, ATD.)",
            price: "300,-"
          }
        ]
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

.price-list-item:nth-child(odd) {
  background-color: #ecf6fb;
}
</style>
