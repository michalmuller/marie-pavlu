<template>
  <div class="bg-light-blue">
    <div class="container flex flex-wrap justify-between flex-row pt-16 pb-24 sm:pb-16">
      <div class="flex w-full flex-wrap justify-between">
        <div class="w-full sm:w-1/2 pr-12 mx-4 sm:mx-0">
          <img class="rounded shadow" src="../../public/img/waiting-room.jpg" alt />
        </div>
        <div class="sm:w-1/2 w;full sm:pl-12 sm:pt-0 sm:pr-0 pt-8 pl-4 pr-4">
          <h1 class="text-3xl font-bold">O nás</h1>
          <p class="text-secondary-text pt-4">
            <b>MUDr. Marie Pavlů</b> ukončila studium lékařské fakulty Univerzity Karlovy v Praze roku 2003.
            Později pracovala na interním oddělení nemocnice Tanvald a v diabetologickém centru krajské nemocnice Liberec.
          </p>
          <p
            class="text-secondary-text pt-4"
          >Od roku 2012 pracovala v ordinaci praktického lékaře Tanvald a roku 2014 složila atestaci v oboru praktického lékaře.</p>
          <p class="text-secondary-text pt-4">
            v březnu 2019 převzala
            <b>
              pacienty od
              MUDr. Milana Kvasničky.
            </b>
          </p>
          <p class="text-secondary-text pt-8">
            <b>as. Gabriela Koštejnová</b> vystudovala obor asistentka lékaře a sekretariát medicíny v r. 2007 na universitě v Madridě.
          </p>
        </div>
      </div>
      <div class="flex w-full flex-wrap mx-4 sm:mx-0 pt-20">
        <div class="w-full sm:w-1/2">
          <h1 class="text-3xl font-bold">Specializace na diabetiky</h1>
          <p class="text-secondary-text pt-4">
            Specializujeme se na pravidelnou péči o diabetiky 2. typu na PAD (bez inzulínu).
            Zajišťujeme jejich pravidelné prohlídky a vedení léčby.
          </p>
          <p
            class="text-secondary-text pt-4"
          >U těchto pacientů není nutná dispenzarizace diabetologem.</p>

          <h1 class="text-3xl mt-10 font-bold">Alternativni forma mediciny</h1>
          <p
            class="text-secondary-text pt-4"
          >Jsme příznivci celostní a psychosomatické medicíny. Poskytujeme v těchto oborech konzultace a následnou péči u prověřených specialistů na čínskou a alternativní medicínu.</p>
          <p class="text-secondary-text pt-4">
            Nadstandartně, v případě zájmu, v ordinaci aplikujeme
            <b>infúze s vysokými dávkami vitaminu C</b> , které jsou vhodným doplňkem
            pro posílení imunity a prevencí proti infekčním onemocněním, alergiím a pro celkovou regeneraci organismu.
          </p>
          <div class="mt-12">
            <a
              class="bg-pink hover:bg-dark-pink py-2 px-10 rounded font-bold text-white"
              v-smooth-scroll="{ duration: 1200,  offset: -68 }"
              href="#contact"
            >Kontakt</a>
          </div>
        </div>

        <div class="image-section sm:pl-10 pl-0 sm:w-1/2 pt-12 sm:pt-0 w-full">
          <img
            class="img-1 object-cover h-56 relative w-full shadow"
            src="../../public/img/diabetes.jpg"
          />
          <div class="relative w-full flex mt-4">
            <div class="mr-2 w-2/5">
              <img
                class="img-2 object-cover relative h-48 shadow"
                src="../../public/img/c-infusion.jpg"
              />
            </div>
            <div class="ml-2 w-3/5">
              <img
                class="img-2 object-cover relative h-48 shadow"
                src="../../public/img/alternative.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      names: ["mike", "john", "jill", "hank"]
    };
  }
};
</script>

<style lang="scss" scoped>
.image-section {
  position: relative;
  .img-1 {
    border-radius: 0.25rem;
  }
  .img-2 {
    position: absolute;
    border-radius: 0.25rem;
    right: 0;
  }
}
</style>

