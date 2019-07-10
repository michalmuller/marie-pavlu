<template>
  <div class="bg-white shadow fixed w-full z-10 top-0">
    <div class="container">
      <nav class="flex items-center justify-between flex-wrap pt-5 pb-5">
        <router-link to="#home" v-smooth-scroll="{ duration: 1200,  offset: -92 }">
          <div class="flex items-center flex-shrink-0 mr-6">
            <img class="mr-3 w-5" src="../../public/img/icons/surgeon.svg" alt />
            <span class="font-bold text-xl">Marie Pavlu</span>
          </div>
        </router-link>
        <div class="block lg:hidden" @click="toggle = !toggle">
          <button
            class="flex items-center px-3 py-2 border rounded text-dark-blue border-dark-blue"
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          class="w-full block lg:flex lg:flex-end lg:items-center lg:w-auto"
          :class="{'hidden': toggle}"
        >
          <a
            href="#opening-hours"
            v-smooth-scroll="{ duration: 1200,  offset: -92 }"
            class="cursor-pointer block mt-4 lg:inline-block lg:mt-0 lg:ml-6 lg:pl-4 font-semibold text-secondary-text"
          >Ordinační hodiny</a>
          <p
            class="cursor-pointer block mt-4 lg:inline-block lg:mt-0 lg:ml-6 lg:pl-4 font-semibold text-secondary-text"
          >Služby</p>
          <p
            class="cursor-pointer block mt-4 lg:inline-block lg:mt-0 lg:ml-6 lg:pl-4 font-semibold text-secondary-text"
          >Kontakt</p>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      toggle: true
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>
