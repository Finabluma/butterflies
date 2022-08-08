<template>
  <div id="prensarticle">
    <h1 class="sr-only">{{ article.title }}</h1>
    <article>
      <article-detail-header :article="article" />
      <article-detail-main :article="article" />
    </article>
  </div>
</template>

<script>
import ArticleDetailHeader from './ArticleDetailHeader.vue'
import ArticleDetailMain from '~/components/ArticleDetailMain.vue'

export default {
  name: 'ArticleDetail',
  components: {
    ArticleDetailHeader,
    ArticleDetailMain,
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
#prensarticle {
  @apply flex
  flex-col
  min-h-screen;
}
</style>
