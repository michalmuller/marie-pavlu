<template>
  <div class="opening-hours-container rounded-lg mt-8">
    <p class="opening-hour-label font-bold p-2">{{label}}</p>
    <div class="flex flex-wrap p-6">
      <div v-for="(day, index) in time" :key="index" class="flex w-full justify-between pt-1">
        <p class="text-secondary-text">{{day.name}}</p>
        <p class="text-secondary-text">{{day.hours}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["time", "label"]
};
</script>

<style lang="scss" scoped>
.opening-hours-container {
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  box-sizing: border-box;
  $border: 3px;
  background: #fff;
  background-clip: padding-box; /* !importanté */
  border: solid $border transparent; /* !importanté */

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -$border; /* !importanté */
    border-radius: inherit; /* !importanté */
    background: linear-gradient(-45deg, #8e9afd, #6ebff8);
  }

  .opening-hour-label {
    position: absolute;
    top: -16px;
    left: -8px;
    background-color: white;
  }
}
</style>
