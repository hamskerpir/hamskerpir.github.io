<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { CONFIG } from '../data/portfolio';
import Experience from "@/components/subcomponents/Experience.vue";

const config = CONFIG;

const isVisible = ref<boolean[]>(config.experience.map(() => false));
const jobRefs = ref<Array<HTMLElement | null>>([]);
let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = jobRefs.value.findIndex(el => el === entry.target);
            if (index !== -1) {
              isVisible.value[index] = true;
              if (observer) {
                observer.unobserve(entry.target);
              }
            }
          }
        });
      },
      { threshold: 0.1 }
  );

  jobRefs.value.forEach(el => {
    if (el) {
      observer!.observe(el);
    }
  });
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});


</script>

<template>
  <section class="space-y-8">
    <div class="text-center">
      <h2 class="font-headline text-3xl md:text-4xl font-bold">Work Experience</h2>
      <p class="mt-2 text-lg text-muted-foreground">My professional journey.</p>
    </div>
    <div class="relative border-l-2 border-highlight/30 ml-3 pl-8 py-4 space-y-12">
      <div
          v-for="(job, index) in config.experience"
          :key="index"
          class="relative transition-wrapper"
          :ref="(el) => { if (el) jobRefs[index] = el as HTMLElement }"
          :class="[{ 'is-visible': isVisible[index] }, `some-${index}`]"
          :style="{ '--animation-delay': `${index * 150}ms` }"
      >
        <Experience :job="job"></Experience>
      </div>
    </div>
  </section>
</template>

<style>

.percent-highlight {
  .some {
    color: #FF5733;
  }
}
</style>

<style scoped>

.transition-wrapper {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.transition-wrapper.is-visible {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.3s;
}
</style>