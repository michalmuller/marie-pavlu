<template>
  <div id="equipment" class="container flex flex-wrap justify-between flex-row py-16">
    <div class="hidden sm:block w-2/5 pr-10">
      <img src="../../public/img/marie.png" alt />
    </div>
    <div class="sm:w-3/5 w-full sm:pl-10 pl-4 pr-4 sm:pr-0">
      <h1 class="font-bold text-3xl pb-12">Vybaveni a Sluzby</h1>

      <equipment title="Ockovani" :iconPath="require('../../public/img/icons/syringe.svg')">
        <template v-slot:text>
          <p class="text-secondary-text">
            <b>FSME -</b> proti klíšťové encephalitidě.
            <br />
            <b>Prevenar 13</b> očkování proti pneumokokovému zápalu plic.
            <br />
            <b>Tetanus, Hepatitida A, B,</b>
            dle dohody i jiné očkování.
          </p>
        </template>
      </equipment>

      <equipment title="Pojistovny" :iconPath="require('../../public/img/icons/contract.svg')">
        <template v-slot:text>
          <p class="text-secondary-text">
            máme smlouvu s
            <b>VZP, MVČR - ministervstva vnitra.</b>
            Ostatní pojištovny po domluve možné. Pracujeme na smlouvách i s ostatními pojišťovnami.
          </p>
        </template>
      </equipment>

      <equipment title="Pristroje a Zarizeni" :iconPath="require('../../public/img/icons/cpr.svg')">
        <template v-slot:text>
          <p class="text-secondary-text">
            <b>CRP -</b>
            test na zjištění infekce,
            <b>INR -</b> test na ředění krve
            <br />
            <b>Strept A -</b>přítomnost Steptokoka
            <br />
            <b>GHb -</b> zjištění dlouhodobé hladiny cukru v krvi při monitorování léčby cukrovky,
            <b>Glykémie -</b> zjištění aktuální hladiny cukru v krvi.
            <br />Zjištění Okultního krvácení ve stolici
            <br />
            <b>EKG</b> v ordinaci v Jablonci Nad Nisou.
          </p>
        </template>
      </equipment>

      <equipment title="Osobni pristup" :iconPath="require('../../public/img/icons/nurse.svg')">
        <template v-slot:text>
          <p class="text-secondary-text">
            preferujeme pozitivní osobní a rodinný přístup
            kombinace klasické i alternativní mediciny.
            Naším cílem je zdravý člověk.
          </p>
        </template>
      </equipment>
    </div>
  </div>
</template>

<script>
import Equipment from "./common/Equipment";
export default {
  components: { Equipment }
};
</script>

<style lang="scss" scoped>
b {
  color: #242424;
  font-weight: 600;
}
</style>
