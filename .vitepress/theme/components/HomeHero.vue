<template>
  <header v-if="showHero" class="home-hero flex">
    <div class="mx-auto grid lg:grid-cols-12] gap-4">
      <div class="my-auto pb-40 <md:pb-20">
        <h1>{{ $site.title }}</h1>
        <div class="description">{{ $site.description }}</div>

        <NavLink
          v-if="hasAction"
          :item="{ link: data.actionLink, text: data.actionText }"
          class="action mx-2"
          rounded="tr-4xl tl-2xl br-2xl bl-3xl"
        />

        <NavLink
          v-if="hasAltAction"
          :item="{ link: data.altActionLink, text: data.altActionText }"
          class="action alt mx-2"
          rounded="tr-2xl tl-3xl br-4xl bl-4xl"
        />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useFrontmatter } from 'vitepress'
import { isDark } from '../composables/dark'
import NavLink from './NavLink.vue'

const data = useFrontmatter()

const hasHeroText = computed(() => data.value.heroText !== null)
const hasTagline = computed(() => data.value.tagline !== null)

const hasAction = computed(() => data.value.actionLink && data.value.actionText)
const hasAltAction = computed(
  () => data.value.altActionLink && data.value.altActionText
)

const showHero = computed(() => {
  return (
    data.value.heroImage ||
    hasHeroText.value ||
    hasTagline.value ||
    hasAction.value
  )
})
</script>

<style scoped lang="postcss">
.home-hero {
  margin: 0rem 0 2.75rem;
  padding: 3rem 1.5rem;
  text-align: center;
  flex: 1 1 auto;
}

@media (min-width: 420px) {
  .home-hero {
    margin: 0;
  }
}

@media (min-width: 720px) {
  .home-hero {
    margin: 0 3rem;
  }
}

.figure {
  padding: 0 1.5rem;
}

.title {
  margin-top: 1.5rem;
  font-size: 2rem;
}

@media (min-width: 420px) {
  .title {
    font-size: 3rem;
  }
}

@media (min-width: 720px) {
  .title {
    margin-top: 2rem;
  }
}

.description {
  margin-top: 0.2rem;
  line-height: 1.3;
  font-size: 1.2rem;
  color: var(--c-text-light);
}

.action {
  margin-top: 1.5rem;
  display: inline-block;
}

@media (min-width: 420px) {
  .action {
    margin-top: 1rem;
    display: inline-block;
  }
}

.action {
  display: inline-block;
  padding: 10px 18px;
  line-height: 40px;
  border: 0;
  color: #ffffff;
  transition: background-color 0.1s ease;
  @apply bg-primary cursor-pointer;
}

.action :deep(.item) {
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  text-decoration: none;
  border-bottom: 0;
}

.action:hover :deep(.item) {
  text-decoration: none;
  color: #ffffff;
}

.action:hover {
  @apply bg-primary-deep;
}

.action.alt {
  background-color: #476582;
}

.action.alt:hover {
  background-color: #304a64;
}
</style>
