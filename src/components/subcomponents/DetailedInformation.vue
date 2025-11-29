<script setup lang="ts">
import {ref, onUpdated, onMounted} from 'vue'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {Button} from "@/components/ui/button";
import {XIcon} from 'lucide-vue-next'
import type {Skill} from "@/data/portfolio.ts";
import {marked} from 'marked';

const props = defineProps<{
  skill: Skill,
  close: () => void,
}>()

const renderedContent = ref<string>("");

let hook = async () => {
  if (!props.skill.description) {
    renderedContent.value = "Hmm... nothing there. Someone stole it!";
    return;
  }
  const filePath = `${props.skill.description}`;

  if (filePath) {
    const response = await fetch(`/${filePath}`);

    if (response.ok) {
      const markdownText = await response.text();
      renderedContent.value = await marked.parse(markdownText);
    } else {
      console.error(`Failed to fetch Markdown file: ${filePath}`, response.statusText);
      renderedContent.value = `Error loading content: ${response.status} ${response.statusText}`;
    }
  } else {
    renderedContent.value = "Hmm... nothing there. Someone stole it!";
  }
};
onUpdated(hook);
onMounted(hook);
</script>

<template>
  <Card class="w-full">
    <CardHeader class="flex justify-between items-center">
      <Transition name="fade" animation>
        <CardTitle class="font-headline text-orange-400 text-3xl">{{ props.skill.name }}</CardTitle>
      </Transition>
      <Button variant="outline" size="icon" aria-label="Submit" @click="props.close">
        <XIcon/>
      </Button>
    </CardHeader>
    <CardContent class="max-h-screen-70 overflow-y-auto">
      <CardDescription v-if="!renderedContent">
        Loading...
      </CardDescription>
      <div v-else v-html="renderedContent" class="font-headline markdown-content">
      </div>
    </CardContent>
  </Card>
</template>

<style>
.markdown-content b {
  color: var(--color-orange-400)
}

.markdown-content i {
  color: var(--color-lime-300)
}

.markdown-content hr {
  border-color: var(--color-white);
  padding-bottom: 5px;
}
</style>

<style scoped>
.max-h-screen-70 {
  max-height: 70vh;
}

/* Existing animation styles */

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-out;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateX(0);
}

/* Optional: Basic styling for the rendered Markdown */
.markdown-content :deep(p) {
  margin-bottom: 1rem;
}

.markdown-content :deep(ul) {
  list-style: disc;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}

.markdown-content :deep(h1),
.markdown-content :deep(h2),
.markdown-content :deep(h3) {
  font-weight: bold;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}
</style>