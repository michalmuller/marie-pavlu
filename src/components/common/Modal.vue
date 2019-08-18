<template>
  <Transition name="fade">
    <div
      v-if="showing"
      class="fixed inset-0 w-full h-screen flex items-center justify-center bg-semi-75"
      @click.self="close"
    >
      <div class="relative w-full max-w-4xl bg-white shadow-lg rounded-lg mt-16">
        <div class="flex justify-between items-center rounded-t-lg bg-gray-200 px-8 py-3">
          <h2 class="text-2xl font-bold">Ceník</h2>
          <button
            aria-label="close"
            class="text-3xl text-gray-500 outline-none p-2"
            @click.prevent="close"
          >×</button>
        </div>
        <slot />
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  props: {
    showing: {
      required: true,
      type: Boolean
    }
  },
  watch: {
    showing(value) {
      if (value) {
        return document.querySelector("body").classList.add("overflow-hidden");
      }

      document.querySelector("body").classList.remove("overflow-hidden");
    }
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
