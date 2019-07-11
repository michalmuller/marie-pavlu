<template>
  <div class="flex w-full bg-light-blue py-4 flex justify-center text-footer-color-text">
    &copy; {{year}},&nbsp;
    <a href="https://michalmuller.tech/
  ">Michal Muller</a>, All rights reserved
  </div>
</template>

<script>
export default {
  computed: {
    year() {
      let dt = new Date();
      return dt.getFullYear();
    }
  }
};
</script>

<style>
</style>
