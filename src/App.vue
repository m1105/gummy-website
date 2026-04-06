<template>
  <div class="app">
    <NavBar />
    <HeroSection />
    <WhySection />
    <FeaturesSection />
    <FooterDisclaimer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useUiStore } from './stores/ui.js'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import WhySection from './components/WhySection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import FooterDisclaimer from './components/FooterDisclaimer.vue'

const ui = useUiStore()
onMounted(() => ui.loadConfig())
</script>
