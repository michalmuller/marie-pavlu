<template>
  <div
    :class="classes"
    class="card w-1/3 rounded-lg p-8 pt-6 mb-16 shadow-lg"
    :style="{background: `linear-gradient(to right, ${colorFrom}, ${colorTo})`}"
  >
    <h3 class="text-white font-bold text-2xl mb-2">{{title}}</h3>
    <p class="text-white w-2/3">{{text}}</p>
    <img class="card-icon" :src="iconPath" alt />
  </div>
</template>

<script>
export default {
  props: ["colorFrom", "colorTo", "title", "text", "iconPath", "classes"]
};
</script>

<style lang="scss" scoped>
.card {
  margin-top: -32px !important;
  position: relative;
  overflow: hidden;
  .card-icon {
    height: 84px;
    opacity: 0.08;
    position: absolute;
    top: 2rem;
    right: -16px;
  }
}
</style>
