<template>
  <div v-if="article.categories">
    <span class="sr-only">Categorías:</span>
    <IconHashtag class="mr-1" />
    <span v-for="(category, index) in article.categories" :key="category.slug">
      <NuxtLink :to="category.slug | articleCategoryUrl">
        {{ category.title }}
      </NuxtLink>
      <span v-if="index !== article.categories.length - 1"></span>
    </span>
  </div>
</template>

<script>
import IconHashtag from '~/assets/icons/hashtag.svg?inline'
export default {
  name: 'ArticleDateAndCategories',
  components: {
    IconHashtag,
  },
  props: {
    article: {
      type: Object,
      default: null,
    },
  },
}
</script>
<style lang="postcss" scoped>
div {
  @apply flex
  items-center
  flex-wrap
  mb-5;

  & span {
    @apply flex
    items-center
    flex-wrap
    mr-1
    mb-1;
  }

  & a {
    @apply text-base
    font-niti
    capitalize
    leading-7
    px-0.5
    border-current
    border;
  }
}
</style>
