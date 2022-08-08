<template>
  <div class="main">
    <div class="articledetailmain">
      <article-breadcrumbs :article="article" />
      <p v-if="article.excerpt" class="excerpt">{{ article.excerpt }}</p>
      <div v-if="article.categories">
        <article-categories :article="article" />
      </div>
      <rich-text
        v-if="article.mainContent.length"
        :content="article.mainContent"
      />
      <div v-if="article.categories">
        <article-categories :article="article" class="my-10" />
      </div>
    </div>
    <article-detail-pagination
      v-if="article.previousArticleSlug || article.nextArticleSlug"
      :article="article"
    />
  </div>
</template>

<script>
import RichText from '~/components/RichText.vue'
import ArticleCategories from '~/components/ArticleCategories.vue'
import ArticleBreadcrumbs from '~/components/ArticleBreadcrumbs.vue'

export default {
  name: 'ArticleDetailMain',
  components: { RichText, ArticleCategories, ArticleBreadcrumbs },
  props: {
    article: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="postcss" scoped>
.main {
  @apply relative
  z-10
  pb-2
  bg-gray-300
  dark:bg-gray-600;
}

.articledetailmain {
  @apply w-11/12
    mx-auto
    md:w-10/12
    lg:w-8/12
    xl:w-7/12
    2xl:w-6/12;
}
.excerpt {
  @apply mb-9
  font-niti
  leading-normal
  content-after
  text-lg;

  &:after {
    @apply block
    h-0.5
    w-1/6
    bg-current
    opacity-30;
  }

  &:after {
    @apply mt-9;
  }
}
</style>
