<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue'
import SkillsSection from '../components/SkillsSection.vue'
import ExperienceSection from '../components/ExperienceSection.vue'
import BlogPreviewSection from '../components/BlogPreviewSection.vue'
import FooterSection from '../components/FooterSection.vue'
</script>


<template>
  <div class="space-y-20 md:space-y-28 lg:space-y-26 py-20 md:py-28 lg:py-36">
    <HeroSection/>
    <SkillsSection/>
    <ExperienceSection/>
    <BlogPreviewSection/>
  </div>
  <FooterSection/>
</template>
