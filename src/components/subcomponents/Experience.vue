<script setup lang="ts">

import {CheckCircle2} from "lucide-vue-next";
import {type Experience} from "@/data/portfolio.ts";

const {job} = defineProps<{
  job: Experience,
}>()

</script>

<template>
  <div class="absolute -left-[2.55rem] top-1 w-4 h-4 rounded-full bg-primary ring-8 ring-background"/>
  <div
      class="bg-secondary/50 border border-secondary hover:border-primary/50 transition-colors duration-300 rounded-lg shadow-md"
  >
    <div class="p-6">
      <div class="flex justify-between items-start">
        <div>
          <h3 class="text-xl">{{ job.role }}</h3>
          <p class="text-base mt-1 text-muted-foreground">{{ job.company }}</p>
        </div>
        <div class="text-sm text-muted-foreground whitespace-nowrap">{{ job.duration }}</div>
      </div>
    </div>
    <div class="p-6 pt-0">
      <p class="mb-4 text-muted-foreground">{{ job.summary }}</p>
      <ul class="space-y-2">
        <li v-for="(achievement, i) in job.achievements" :key="i" class="flex items-start gap-2">
          <CheckCircle2 class="h-4 w-4 mt-1 text-primary flex-shrink-0"/>
          <span v-html="achievement"></span></li>
      </ul>
    </div>
  </div>
</template>

<style>
</style>