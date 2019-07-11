<template>
  <div>
    <hero-section></hero-section>
    <opening-hours-section></opening-hours-section>
    <specialization-section></specialization-section>
    <equipment-section></equipment-section>
    <contact-section></contact-section>
    <testimonials-section></testimonials-section>
    <another-footer></another-footer>
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection";
import OpeningHoursSection from "@/components/OpeningHoursSection";
import SpecializationSection from "@/components/SpecializationSection";
import EquipmentSection from "@/components/EquipmentSection";
import ContactSection from "@/components/ContactSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AnotherFooter from "@/components/common/AnotherFooter";
export default {
  name: "home",
  components: {
    HeroSection,
    OpeningHoursSection,
    SpecializationSection,
    EquipmentSection,
    ContactSection,
    TestimonialsSection,
    AnotherFooter
  },

  data() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>
<style lang="scss" scoped>
</style>
