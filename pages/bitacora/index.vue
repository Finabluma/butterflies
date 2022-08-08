<template>
  <div class="bitacora">
    <app-header />
    <main v-if="page">
      <div
        v-for="(pageSection, index) in page.pageSections"
        :key="`${index}-${pageSection._type}`"
      >
        <hero-section
          v-if="pageSection._type === 'heroSection'"
          :page-section="pageSection"
        />
        <note-section
          v-if="pageSection._type === 'noteSection'"
          :page-section="pageSection"
        />
      </div>
      <section class="articulos">
        <h1 class="sr-only">Escritos publicados</h1>
        <div class="listArticles">
          <div v-if="articles.length > 0">
            <article-preview
              v-for="article in articles"
              :key="article.slug"
              :article="article"
            />
          </div>
          <p v-else class="noarticles">Todavía no hay articulos publicados.</p>
        </div>
      </section>
    </main>
    <app-footer />
  </div>
</template>
<script>
import AppHeader from '~/components/AppHeader.vue'
import HeroSection from '~/components/HeroSection.vue'
import NoteSection from '~/components/NoteSection.vue'
import AppFooter from '~/components/AppFooter.vue'
import ArticlePreview from '~/components/ArticlePreview.vue'
import dynamicHeadTags from '~/utils/dynamicHeadTags.js'
export default {
  name: 'IndexPrensa',
  components: {
    ArticlePreview,
    AppHeader,
    HeroSection,
    NoteSection,
    AppFooter,
  },
  props: {
    pageContent: {
      type: Array,
      default: null,
    },
  },
  head() {
    const generalData = {
      title: 'Articles',
    }
    return {
      ...dynamicHeadTags(this, generalData),
    }
  },
  computed: {
    page() {
      const page = this.$store.state.pages.pages.filter((page) => {
        return page.slug === 'bitacora'
      })
      return page[0] || null
    },
    articles() {
      return this.$store.state.articles.articles
    },
  },
}
</script>
<style lang="postcss">
.bitacora {
  @apply w-screen
  min-h-screen
  overflow-x-hidden
  flex
  flex-col;

  & main .articulos {
    @apply w-full
    mx-auto
    mb-12
    pt-10
    sm:w-11/12
    md:w-9/12
    md:mb-20
    lg:w-8/12
    lg:mb-24
    xl:w-7/12
    xl:mb-12
    2xl:w-6/12;

    & .noarticles {
      @apply py-10
      border-t
      border-current
      text-center
      font-niti;
    }
  }
}
</style>
