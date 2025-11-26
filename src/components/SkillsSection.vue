<script setup lang="ts">
import {CONFIG} from '../data/portfolio';
import type {Skill} from '../data/portfolio';
import {ref} from "vue";
import DetailedInformation from "@/components/subcomponents/DetailedInformation.vue";

const config = CONFIG;

const iconClass = (skill: Skill) => {
  return skill.icon ?? `devicon-${skill.name.toLowerCase()}-plain`;
}

const selected = ref<Skill | null>(null);
const clearSelection = () => {
  selected.value = null;
}


</script>

<template>
  <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"/>

  <section class="space-y-8">
    <div class="text-center">
      <h2 class="font-headline text-3xl md:text-4xl font-bold">Skills & Expertise</h2>
      <p class="mt-2 text-lg text-muted-foreground">My technical toolkit.</p>
    </div>
    <div :class="{'grid-cols-2 grid gap-8': selected}">
      <div :class="[selected ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2']" class="grid gap-4">
        <div
            v-for="category in Object.values(config.skills)"
            :key="category.name"
            class="bg-card/70 border border-border/50 rounded-lg p-6 shadow-md"
        >
          <h3 class="text-xl text-primary font-semibold mb-4">{{ category.name }}</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div
                v-for="skill in category.items"
                :key="skill.name"
                class="flex items-center gap-3 rounded-lg border border-border p-3 transition-all hover:border-primary/50 hover:bg-secondary duration-200"
                @click="() => {
                selected = skill;
              }"
            >
              <i :class="iconClass(skill)" class="h-5 w-5 text-primary min-w-3"></i>
              <span class="font-medium">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
      <div v-if="selected">
        <Transition name="fade" appear>
          <div class="sticky top-20">
            <DetailedInformation :skill=selected :close=clearSelection />
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

/* Active state for both enter and leave */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease-out; /* The duration and timing function */
}

/* Ending state for enter and starting state for leave (optional) */
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
