<template>
  <div v-if="article">
    <app-header />
    <main>
      <article-detail :article="article" />
    </main>
    <app-footer />
  </div>
  <ErrorScreen v-else />
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
import ArticleDetail from '~/components/ArticleDetail.vue'
import dynamicHeadTags from '~/utils/dynamicHeadTags.js'
export default {
  name: 'PagePrensaSlug',
  components: {
    ArticleDetail,
    AppHeader,
    AppFooter,
  },
  head() {
    const generalData = {
      title: this.article ? this.article.title : 'Page Not Found',
      description: this.article ? this.article.excerpt : '',
      shareImage: this.article ? this.article.featuredImage : '',
    }
    const specificData = this.article ? this.article.articleMetaData : {}
    return {
      ...dynamicHeadTags(this, generalData, specificData),
    }
  },
  computed: {
    article() {
      const article = this.$store.state.articles.articles.filter((article) => {
        return article.slug === this.$route.params.slug
      })
      return article[0] || null
    },
  },
}
</script>
