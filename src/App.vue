<template>
  <div id="simsalabim-app">
    <NavBar />
    <HeroSection />
    <StatsBar />
    <ServicesSection />
    <WhyUsSection />
    <InfrastructureSection />
    <PortfolioSection />
    <TeamSection />
    <FooterSection />
    <WhatsAppButton />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import StatsBar from './components/StatsBar.vue'
import ServicesSection from './components/ServicesSection.vue'
import WhyUsSection from './components/WhyUsSection.vue'
import InfrastructureSection from './components/InfrastructureSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import TeamSection from './components/TeamSection.vue'
import FooterSection from './components/FooterSection.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    HeroSection,
    StatsBar,
    ServicesSection,
    WhyUsSection,
    InfrastructureSection,
    PortfolioSection,
    TeamSection,
    FooterSection,
    WhatsAppButton
  }
}
</script>

<style>
#simsalabim-app {
  min-height: 100vh;
}
</style>
