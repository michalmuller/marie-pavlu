<template>
  <div class="flex w-1/2 pt-8" :class="city.padding">
    <img class="mr-4 md:mr-8 icon-city" :class="city.icon" :src="city.iconPath" alt />
    <div>
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
        window.location = "mailto:marie.augustinova@seznam.cz";
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
.icon-city {
  width: 154px;
}
.icon-label {
  width: 27px;
}

.negative-margin {
  margin-left: -32px;
}

.icon-janov {
  width: 114px;
}

@media screen and (max-width: 768px) {
  .negative-margin {
    margin-left: 0px;
  }
  .icon-city {
    width: 96px;
  }
}
</style>
