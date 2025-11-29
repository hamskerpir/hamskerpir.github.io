<script setup lang="ts">
import { CONFIG } from '../data/portfolio';
import { computed } from 'vue';
import { ArrowRight } from 'lucide-vue-next';

const config = CONFIG;
const recentPosts = computed(() => config.blogPosts.slice(0, 3));
</script>

<template>
  <section class="space-y-8">
    <div class="text-center">
      <h2 class="font-headline text-3xl md:text-4xl font-bold">From the Blog</h2>
      <p class="mt-2 text-lg text-muted-foreground">My latest thoughts and findings.</p>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <a
        v-for="(post, index) in recentPosts"
        :key="index"
        :href="post.url"
        target="_blank"
        rel="noopener noreferrer"
        class="group block"
        @click="$posthog.capture('blog_post_clicked', { blog_title: post.title })"
      >
        <div class="h-full bg-card/50 border border-border/50 transition-all duration-300 group-hover:border-primary/80 group-hover:shadow-lg group-hover:shadow-primary/10 flex flex-col rounded-lg shadow-md">
          <div class="p-6">
            <h3 class="text-xl group-hover:text-primary transition-colors">{{ post.title }}</h3>
            <p class="text-muted-foreground">{{ post.date }}</p>
          </div>
          <div class="flex-grow" />
          <div class="p-6">
            <span class="text-sm text-primary flex items-center gap-1 font-medium">
              Read more
              <ArrowRight class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </a>
    </div>
  </section>
</template>

<style scoped>
/* Add any specific styles for BlogPreviewSection here if needed */
</style>
