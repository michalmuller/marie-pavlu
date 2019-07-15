<template>
  <div class="bg-light-blue">
    <div class="container flex flex-wrap justify-between flex-row pt-16 pb-24 sm:pb-16">
      <div class="flex w-full flex-wrap justify-between">
        <div class="w-full sm:w-1/2 pr-12 mx-4 sm:mx-0">
          <img class="rounded" src="../../public/img/waiting-room.jpg" alt />
        </div>
        <div class="sm:w-1/2 w;full sm:pl-12 sm:pt-0 sm:pr-0 pt-8 pl-4 pr-4">
          <h1 class="text-3xl font-bold">O nas</h1>
          <p class="text-secondary-text pt-4">
            MUDr. Marie Pavlů: studium na 3. lékařské fakultě UK Praha ukončila v r. 2003
            pracovala na interním oddělení nemocnice Tanvald
            pracovala v diabetologickém centru Krajské nemocnice Liberec
            od r. 2012 v ordinaci praktického lékaře Tanvald
            V. r. 2014 astestace v oboru praktického lékaře
          </p>
          <p
            class="text-secondary-text pt-4"
          >Gabriela Koštejnová: vystudovala obor asistentka lékaře v Madridě</p>
        </div>
      </div>
      <div class="flex w-full flex-wrap mx-4 sm:mx-0 pt-20">
        <div class="w-full sm:w-1/2">
          <h1 class="text-3xl font-bold">
            Specializujeme se v tomhle
            a proto jsme jednicka
          </h1>
          <p
            class="text-secondary-text pt-4"
          >Consectetur adipiscing elit. Duis congue nisl elit, ac aliquam augue commodo vel. Quisque porttitor, felis id posuere efficitur.</p>
          <p
            class="text-secondary-text pt-4"
          >Consectetur adipiscing elit. Duis congue nisl elit, ac aliquam augue commodo vel. Quisque porttitor, felis id posuere efficitur.</p>
          <div class="mt-12">
            <a
              class="bg-pink hover:bg-dark-pink py-2 px-10 rounded font-bold text-white"
              v-smooth-scroll="{ duration: 1200,  offset: -68 }"
              href="#contact"
            >Kontakt</a>
          </div>
        </div>

        <div class="image-section sm:pl-10 pl-0 sm:w-1/2 pt-12 sm:pt-0 w-full">
          <img class="img-1 object-cover h-64 relative" src="../../public/img/appointment.png" alt />
          <img class="img-2 object-cover relative sm:absolute" src="../../public/img/nurse.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.image-section {
  position: relative;
  .img-1 {
    border-radius: 0.25rem;
    height: 74%;
  }
  .img-2 {
    position: absolute;
    border-radius: 0.25rem;
    bottom: -20px;
    right: 0;
    height: 60%;
  }
}
</style>

