<template>
  <div class="bg-light-blue">
    <div class="container flex flex-wrap justify-between flex-row py-16">
      <div class="w-2/5">
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
        <button
          class="bg-pink hover:bg-dark-pink text-white font-bold mt-12 py-2 px-10 rounded"
        >Kontakt</button>
      </div>

      <div class="image-section pl-10 w-1/2">
        <img class="img-1" src="../../public/img/appointment.png" alt />
        <img class="img-2" src="../../public/img/nurse.png" alt />
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
    position: absolute;
  }
  .img-2 {
    position: absolute;
    border-radius: 0.25rem;
    bottom: 0;
    right: 0;
    height: 60%;
  }
}
</style>

