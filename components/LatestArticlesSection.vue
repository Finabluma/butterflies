<template>
  <section v-if="pageSection.disabled !== true">
    <header>
      <h1 v-if="pageSection.heading">{{ pageSection.heading }}</h1>
      <span v-if="pageSection.subheading">{{ pageSection.subheading }}</span>
    </header>
    <div class="list-articles">
      <ArticlePreview
        v-for="article in articles"
        :key="article.slug"
        :article="article"
        layout="aside"
      />
    </div>
    <div class="link">
      <link-button path="/bitacora" variant="secondary" size="normal"
        >Más Desvaríos</link-button
      >
    </div>
  </section>
</template>

<script>
import LinkButton from './LinkButton.vue'
import ArticlePreview from '~/components/ArticlePreview.vue'
export default {
  name: 'LatestArticles',
  components: {
    LinkButton,
    ArticlePreview,
  },
  props: {
    pageSection: {
      type: Object,
      default: null,
    },
  },
  computed: {
    articles() {
      const articles = this.$store.state.articles.articles
      const numberOfArticles = 2
      return articles.slice(0, numberOfArticles)
    },
  },
}
</script>

<style lang="postcss" scoped>
section {
  @apply min-h-screen
  flex
  justify-center
  flex-col
  pt-10
  pb-14;

  & header {
    @apply w-10/12
    mx-auto
    px-1
    leading-tight
    mb-10
    lg:mb-14
    lg:w-8/12
    xl:w-7/12
    2xl:w-6/12;

    & h1 {
      @apply font-niti text-2xl mb-1;
    }

    & span {
      @apply text-xs
      font-darkmode;
    }
  }

  & .list-articles {
    @apply mb-11
    px-1
    sm:w-11/12
    md:flex
    md:justify-center
    md:w-11/12
    md:mx-auto
    md:mb-14
    lg:w-10/12
    xl:w-10/12
    2xl:w-7/12;

    & article {
      @apply md:mr-6
      md:w-6/12
      xl:mb-3;

      &:last-child {
        @apply md:mr-0;
      }
    }
  }

  & .link {
    @apply w-11/12
    flex
    justify-center
    mx-auto
    lg:w-8/12;
  }
}
</style>
