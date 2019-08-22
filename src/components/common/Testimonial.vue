<template>
  <div class="md:w-1/3 w-full py-4 md:py-0">
    <div class="rounded-lg bg-white shadow-md px-8 py-10" :class="person.cardMargin">
      <div class="w-full flex justify-center">
        <img class="w-20 h-20 rounded-full" :src="person.img" alt="Sunset in the mountains" />
      </div>
      <p class="w-full flex justify-center pt-4 font-bold text-xl mb-6">{{person.name}}</p>
      <div>
        <img
          class="icon-quote w-10 pt-1 mr-4 float-left"
          src="../../../public/img/icons/right-quote-sign.svg"
          alt
        />
        <p class="leading-normal text-secondary-text">{{person.quote}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["person"]
};
</script>

<style lang="scss" scoped>
</style>
