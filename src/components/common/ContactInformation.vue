<template>
  <div>
    <p class="flex w-full pt-8 pb-2 font-bold text-2xl">{{city.name}}</p>
    <div class="w-full flex md:hidden mb-4">
      <img class="object-cover rounded shadow" :src="city.photo" />
    </div>
    <div class="flex items-center">
      <div class="hidden h-52 md:flex md:w-4/12 mr-6">
        <img class="object-cover rounded shadow" :src="city.photo" />
      </div>
      <div class="w-full md:w-6/12">
        <div
          v-for="(info, index) in city.information"
          :key="index"
          class="flex items-center pb-4 labels"
        >
          <img
            class="icon-label mr-2 md:mr-3"
            :src="info.iconPath"
            @click="openMail(info.label); gMap(info.gMap)"
          />
          <p @click="gMap(info.gMap)">{{info.text}}</p>
        </div>
      </div>
      <div class="hidden md:flex items-end w-2/12">
        <img class="md:pr-2 lg:pr-0" :src="city.iconPath" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["city"],
  methods: {
    gMap(g) {
      if (typeof g !== "undefined") {
        window.open(g);
      }
    },
    openMail(e) {
      if (e == "mail") {
        window.location = "mailto:ordinace.medikva@gmail.com";
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.labels {
  &:first-child {
    img {
      cursor: pointer;
    }
  }
  &:last-child {
    cursor: pointer;
  }
}

.icon-label {
  width: 27px;
}

.h-52 {
  height: 13rem !important;
}
</style>
