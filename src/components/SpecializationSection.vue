<template>
  <div class="bg-light-blue">
    <div
      class="container flex flex-wrap justify-between flex-row pt-16 pb-24 sm:pb-16"
    >
      <div class="flex w-full .flex-col-reverse flex-wrap justify-between">
        <div class="w-full sm:w-1/2 pr-12 mx-4 sm:mx-0 hidden sm:block">
          <img src="../../public/img/doctor-assistant.svg" alt />
        </div>
        <div class="sm:w-1/2 w-full sm:pl-12 sm:pt-0 sm:pr-0 pt-2 pl-4 pr-4">
          <h1 class="text-3xl font-bold">O nás</h1>
          <p class="text-secondary-text pt-4">
            <b>MUDr. Marie Pavlů</b> ukončila studium lékařské fakulty
            Univerzity Karlovy v Praze roku 2003. Později pracovala na interním
            oddělení nemocnice Tanvald a v diabetologickém centru krajské
            nemocnice Liberec.
          </p>
          <p class="text-secondary-text pt-4">
            Od roku 2012 pracovala v ordinaci praktického lékaře Tanvald a roku
            2014 složila atestaci v oboru praktického lékaře.
          </p>
          <p class="text-secondary-text pt-4">
            V březnu 2019 převzala
            <b> pacienty od MUDr. Milana Kvasničky. </b>
          </p>
          <p class="text-secondary-text pt-8">
            <b>As. Gabriela Koštejnová</b> vystudovala obor asistentka lékaře a
            sekretariát medicíny v r. 2007 na universitě v Madridě.
          </p>
        </div>
        <div class="w-full mt-8 sm:w-1/2 pr-12 mx-4 sm:mx-0 block sm:hidden">
          <img src="../../public/img/doctor-assistant.svg" alt />
        </div>
      </div>
      <div class="flex w-full flex-wrap mx-4 sm:mx-0 pt-20">
        <div class="w-full sm:w-1/2">
          <h1 class="text-3xl font-bold">Specializace na diabetiky</h1>
          <p class="text-secondary-text pt-4">
            Specializujeme se na pravidelnou péči o diabetiky 2. typu na PAD
            (bez inzulínu). Zajišťujeme jejich pravidelné prohlídky a vedení
            léčby.
          </p>
          <p class="text-secondary-text pt-4">
            U těchto pacientů není nutná dispenzarizace diabetologem.
          </p>

          <h1 class="text-3xl mt-10 font-bold">Alternativni forma mediciny</h1>
          <p class="text-secondary-text pt-4">
            Jsme příznivci celostní a psychosomatické medicíny. Poskytujeme v
            těchto oborech konzultace a následnou péči u prověřených specialistů
            na čínskou a alternativní medicínu.
          </p>
          <p class="text-secondary-text pt-4">
            Nadstandartně, v případě zájmu, v ordinaci aplikujeme
            <b>infúze s vysokými dávkami vitamínu C</b> , které jsou vhodným
            doplňkem pro posílení imunity a prevencí proti infekčním
            onemocněním, alergiím a pro celkovou regeneraci organismu. Pro více
            informací
            <a
              class="text-primary-text font-bold border-black border-b-2 py-1"
              target="_blank"
              href="./files/vitamin_C.pdf"
              >klikněte zde.</a
            >
            <br />
            <br />
            Nově nabízíme <b>Access Bars</b> a také
            <b>Access Bars tělesné procesy.</b>
          </p>
          <p class="text-secondary-text pt-4">
            Další službou je také <b>psychologické poradenství</b> formou
            coachingu transformační psychologie.
          </p>
          <p class="text-secondary-text pt-4">
            Provádíme <b>test Omega 3 mastných kyselin</b>.
          </p>
          <div class="mt-12">
            <a
              class="bg-pink hover:bg-dark-pink py-2 pb-3 px-10 rounded font-bold text-white"
              v-smooth-scroll="{ duration: 1200, offset: -68 }"
              href="#contact"
              >Kontakt</a
            >
          </div>
        </div>

        <div
          class="sm:pl-10 pl-0 sm:w-1/2 pt-12 sm:pt-0 w-full hidden sm:block"
        >
          <img
            class="object-cover w-full p-8"
            src="../../public/img/alternative.svg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
