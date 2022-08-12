<template>
  <div v-if="category" class="page">
    <app-header />
    <main>
      <section>
        <header class="cat">
          <div class="title">
            <h1>'{{ category.title }}'</h1>
          </div>
        </header>
        <div class="articulos">
          <h1 class="sr-only">Escritos publicados</h1>
          <div class="listArticles">
            <div v-if="category.articles.length">
              <article-preview
                v-for="article in category.articles"
                :key="article.slug"
                :article="article"
              />
            </div>
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
import ArticlePreview from '~/components/ArticlePreview.vue'
import dynamicHeadTags from '~/utils/dynamicHeadTags.js'
export default {
  name: 'SlugCategory',
  components: {
    AppHeader,
    ArticlePreview,
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
.page {
  @apply w-screen
  min-h-screen
  overflow-x-hidden
  flex
  flex-col
  bg-gradient-to-b
  from-gray-300
  via-gray-300
  to-gray-400
  dark:from-gray-600
  dark:via-gray-600
  dark:to-gray-700;

  & .cat {
    @apply bg-gray-300
    dark:bg-gray-600
    flex
    justify-center
    items-end
    h-36
    lg:h-48;
    
    & .title {
      @apply w-10/12
      md:w-9/12
      lg:w-8/12
      xl:w-7/12
      2xl:w-6/12
      mx-auto;

      & h1 {
        @apply font-cameo
        tracking-wider
        mb-2
        text-xl;

        &:after {
          @apply content-none;
        }
      }
    }
  }

  & main .articulos {
    @apply bg-gradient-to-b
    from-gray-300
    via-gray-300/90
    to-transparent
    dark:from-gray-600;

    & .listArticles {
      @apply w-full
      mx-auto
      sm:w-11/12
      md:w-9/12
      lg:w-8/12
      xl:w-7/12
      2xl:w-6/12
      px-2
      py-5
      xl:py-8;

      & .noarticles {
        @apply py-10
        border-t
        border-current
        text-center
        font-niti;
      }
    }
  }
}
</style>
