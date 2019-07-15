<template>
  <div class="flex w-1/2 pt-8" :class="city.padding">
    <img class="mr-8 icon-city" :class="city.icon" :src="city.iconPath" alt />
    <div>
      <div v-for="(info, index) in city.information" :key="index" class="flex items-center pb-4">
        <img class="icon-label mr-3" :src="info.iconPath" alt />
        <p>
          <b>{{info.label}}:</b>
          {{info.text}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["city"]
};
</script>


<style lang="scss" scoped>
.icon-city {
  width: 154px;
}
.icon-label {
  width: 24px;
}

.negative-margin {
  margin-left: -32px;
}

.icon-janov {
  width: 114px;
}

@media screen and (max-width: 768px) {
  .negative-margin {
    margin-left: -24px;
  }
}
</style>
