<script setup lang="ts">
import { CONFIG } from '../data/portfolio';
import { Mail } from 'lucide-vue-next';

const config = CONFIG;
</script>

<template>
  <footer class="border-t border-border/50 py-8">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
      <div class="flex flex-col items-center gap-4">
        <a
          :href="`mailto:${config.contact.email}`"
          class="inline-flex items-center gap-2 text-lg font-semibold text-foreground hover:text-primary transition-colors"
        >
          <Mail class="h-5 w-5" />
          <span>{{ config.contact.email }}</span>
        </a>
        <p class="text-sm">
          &copy; {{ new Date().getFullYear() }} {{ config.name }}. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Add any specific styles for FooterSection here if needed */
</style>
