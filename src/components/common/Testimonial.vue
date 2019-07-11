<template>
  <div class="w-1/3">
    <div class="rounded bg-white shadow-md px-10 py-10" :class="person.cardMargin">
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
        <p
          class="leading-normal text-secondary-text"
        >Lorem ipsum dolor sit amet, velit. Donec varius vehicula magna sit amet auctor. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.</p>
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
.icon-quote {
}
</style>
