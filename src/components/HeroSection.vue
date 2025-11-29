<script setup lang="ts">
import { CONFIG } from '../data/portfolio'
const config = CONFIG
</script>

<template>
  <section class="text-center flex flex-col items-center">
    <h1 class="font-headline text-5xl md:text-7xl lg:text-8xl font-bold">
      {{ config.name }}
    </h1>
    <h2 class="mt-4 text-xl md:text-2xl text-foreground font-medium">
      {{ config.title }}
    </h2>
    <p class="mt-4 max-w-2xl text-lg text-foreground/80">
      {{ config.headline }}
    </p>
    <div class="mt-8 flex gap-4">
      <a
        v-for="social in config.socials"
        :key="social.icon"
        :href="social.url"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="social.icon"
        class="bg-transparent border border-border hover:bg-secondary hover:border-primary/50 transition-colors duration-300 p-2 rounded-md"
        @click="$posthog.capture('social_link_clicked', { social_icon: social.icon })"
      >
        <i :class="`text-2xl ${social.icon}`"></i>
      </a>
    </div>
  </section>
</template>

<style scoped>
/* Add any specific styles for HeroSection here if needed */
</style>
