<template>
  <div class="main-container">
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
        <rich-text-section
          v-if="pageSection._type === 'richTextSection'"
          :page-section="pageSection"
        />
        <latest-articles-section
          v-if="pageSection._type === 'latestArticlesSection'"
          :page-section="pageSection"
        />
      </div>
    </main>
    <div v-else>No existe</div>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
import HeroSection from '~/components/HeroSection.vue'
import LatestArticlesSection from '~/components/LatestArticlesSection.vue'
import RichTextSection from '~/components/RichTextSection.vue'
import dynamicHeadTags from '~/utils/dynamicHeadTags.js'

export default {
  name: 'IndexPage',
  components: {
    AppHeader,
    AppFooter,
    RichTextSection,
    HeroSection,
    LatestArticlesSection,
  },
  props: {
    pageContent: {
      type: Array,
      default: null,
    },
  },
  head() {
    const generalData = {
      title: this.page ? this.page.title : 'No encontrada',
    }
    const specificData = this.page ? this.page.pageMetaData : {}
    return {
      ...dynamicHeadTags(this, generalData, specificData),
    }
  },
  computed: {
    page() {
      const page = this.$store.state.pages.pages.filter((page) => {
        return page.slug === 'frontpage'
      })
      return page[0] || null
    },
  },
}
</script>

<style lang="postcss">
.main-container {
  @apply relative
  w-screen
  h-screen
  flex
  items-center
  flex-col;

  & footer {
    @apply mt-auto;
  }
}
</style>
