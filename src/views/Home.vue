<template>
  <div class="mb-12">
    <hero-section></hero-section>
    <opening-hours-section></opening-hours-section>
    <specialization-section></specialization-section>
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection";
import OpeningHoursSection from "@/components/OpeningHoursSection";
import SpecializationSection from "@/components/SpecializationSection";
export default {
  name: "home",
  components: { HeroSection, OpeningHoursSection, SpecializationSection },

  data() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>
<style lang="scss" scoped>
</style>
