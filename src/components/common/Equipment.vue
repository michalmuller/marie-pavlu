<template>
  <div class="flex mb-12">
    <img class="eq-icon mr-4 mt-2" :src="iconPath" alt />
    <div>
      <h3 class="font-bold text-xl">{{title}}</h3>
      <p class="text-secondary-text">{{text}}</p>
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "text", "iconPath"]
};
</script>


<style lang="scss" scoped>
.eq-icon {
  width: 54px;
}
</style>