<template>
  <div id="equipment" class="container flex flex-wrap justify-between flex-row py-16">
    <div class="hidden sm:block w-1/2 pr-10">
      <img src="../../public/img/marie.png" alt />
    </div>
    <div class="sm:w-1/2 w-full sm:pl-10 pl-4 pr-4 sm:pr-0">
      <h1 class="font-bold text-3xl pb-12">Vybaveni a Sluzby</h1>

      <equipment title="Ockovani" :iconPath="require('../../public/img/icons/syringe.svg')">
        <template v-slot:text>
          <p class="text-secondary-text">
            Nabizime ruzne druhy ockovani jako je
            <b>PSH13,</b>
            Tetanus, FSME, Chripka, dle domluvy dalsi.
          </p>
        </template>
      </equipment>

      <equipment title="Odbery krve" :iconPath="require('../../public/img/icons/test-tube.svg')">
        <template v-slot:text>
          <p class="text-secondary-text">
            Nabizime ruzne druhy ockovani jako je
            <b>PSH13,</b>
            Tetanus, FSME, Chripka, dle domluvy dalsi.
          </p>
        </template>
      </equipment>

      <equipment title="Pristroje a Zarizeni" :iconPath="require('../../public/img/icons/cpr.svg')">
        <template v-slot:text>
          <p class="text-secondary-text">
            Nabizime ruzne druhy ockovani jako je
            <b>PSH13,</b>
            Tetanus, FSME, Chripka, dle domluvy dalsi.
          </p>
        </template>
      </equipment>

      <equipment title="Dalsi Sluzby" :iconPath="require('../../public/img/icons/nurse.svg')">
        <template v-slot:text>
          <p class="text-secondary-text">
            Nabizime ruzne druhy ockovani jako je
            <b>PSH13,</b>
            Tetanus, FSME, Chripka, dle domluvy dalsi.
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
