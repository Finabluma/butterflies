<template>
  <div v-if="category" class="bitacora">
    <app-header />
    <main>
      <section>
        <header class="cat">
          <div class="title">
            <h1>'{{ category.title }}'</h1>
          </div>
          <SVGDivider />
        </header>
        <div class="articulos">
          <div v-if="category.articles.length">
            <article-preview
              v-for="article in category.articles"
              :key="article.slug"
              :article="article"
            />
          </div>
        </div>
      </section>
    </main>
    <app-footer />
  </div>
  <ErrorScreen v-else />
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
import SVGDivider from '~/components/SVGDivider.vue'
import ArticlePreview from '~/components/ArticlePreview.vue'
import dynamicHeadTags from '~/utils/dynamicHeadTags.js'
export default {
  name: 'SlugCategory',
  components: {
    AppHeader,
    ArticlePreview,
    SVGDivider,
    AppFooter,
  },
  head() {
    const generalData = {
      title: this.category
        ? `'${this.category.title}' Articles`
        : 'Page Not Found',
      description: this.category ? this.category.description : '',
    }
    return {
      ...dynamicHeadTags(this, generalData),
    }
  },
  computed: {
    category() {
      const category = this.$store.state.articles.categories.filter(
        (category) => {
          return category.slug === this.$route.params.slug
        }
      )
      return category[0] || null
    },
  },
}
</script>

<style lang="postcss">
.bitacora {
  @apply w-screen
  min-h-screen
  flex
  flex-col;

  & .cat {
    @apply w-screen
    min-h-[40vh]
    sm:min-h-[50vh]
    md:min-h-[50vh]
    lg:min-h-[50vh]
    xl:min-h-[40vh]
    overflow-hidden
    bg-gray-300
    dark:bg-gray-600
    flex
    justify-end
    flex-col;

    & .title {
      @apply w-screen
      flex
      justify-center;

      & h1 {
        @apply text-3xl
        font-niti;
        &:after {
          @apply content-none;
        }
      }
    }
  }

  & .articulos {
    @apply w-full
    mx-auto
    mb-12
    pt-10
    sm:w-11/12
    md:w-9/12
    lg:w-8/12
    xl:w-7/12
    xl:mb-12
    2xl:w-6/12;
  }
}
</style>
