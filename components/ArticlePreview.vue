<template>
  <article :class="teaserClass">
    <NuxtLink :to="article.slug | articleUrl">
      <header>
        <!-- <div class="img">
          <div v-if="article.featuredImage" class="has-img">
            <img-item
              :src="article.featuredImage.asset._ref"
              :modifiers="{
                crop: article.featuredImage.crop,
                hotspot: article.featuredImage.hotspot,
                q: 80,
              }"
              fit="cover"
              sizes="xs:130px"
              height="130px"
            />
          </div>
          <div v-else class="has-not-img"><span></span></div>
        </div> -->

        <div class="content">
          <h2 v-if="article.title">
            {{ article.title }}
          </h2>
          <article-date-and-author :article="article" />
        </div>
      </header>
      <!-- <p v-if="article.excerpt">{{ article.excerpt }}</p> -->
    </NuxtLink>
  </article>
</template>

<script>
import ArticleDateAndAuthor from '~/components/ArticleDateAndAuthor.vue'
// import ImgItem from '~/components/ImgItem.vue'

export default {
  name: 'ArticlePreview',
  components: {
    ArticleDateAndAuthor,
    // ImgItem,
  },
  props: {
    article: {
      type: Object,
      default: null,
    },
    layout: {
      type: String,
      default: null,
    },
  },
  computed: {
    teaserClass() {
      return {
        latestarticles: this.layout === 'aside',
      }
    },
  },
}
</script>
<style lang="postcss" scoped>
article {
  @apply py-1
  px-3
  sm:mb-2
  md:mb-1
  md:px-0
  xl:py-1;

  & a {
    @apply block;
  }

  & header {
    @apply flex
    justify-center
    items-center
    dark-hover:opacity-80
    transition-opacity;
  }

  /* & .img {
    @apply w-16
    h-16
    overflow-hidden
    mr-2
    sm:mr-6
    sm:w-20
    sm:h-20
    md:mr-4
    lg:mr-3
    xl:mr-6;

    & .has-img,
    & .has-not-img {
      @apply w-full
      h-full
      overflow-hidden
      flex
      justify-center
      rounded-full
      border-4
      bg-gray-600
      border-gray-300/30
      dark:bg-gray-900/50;
    }
    & .has-img {
      @apply relative
      w-full
      h-full
      content-before;

      &:before {
        @apply block
        absolute
        w-full
        h-full
        bg-white
        mix-blend-color;
      }

      & picture {
        @apply rounded-full overflow-hidden h-full;
      }
    }
  } */

  & .content {
    /* @apply w-8/12
    sm:w-10/12
    md:w-[85%]; */
    @apply w-11/12
    mx-auto
    md:w-full;

    & h2 {
      @apply border-b
      border-black/30
      text-xl
      font-darkmode
      font-medium
      sm:text-xl
      pb-1
      mb-1
      dark:border-white/30
      lg:text-4xl;
    }
  }

  &.latestarticles {
    @apply md:flex-row
    md:items-center
    md:justify-center
    md:mb-0
    md:py-3
    md:border-0
    md:bg-white/20
    lg:justify-center
    dark:md:bg-gray-800
    dark:md:bg-opacity-30;

    & .content {
      @apply md:mb-0
      md:pb-0
      md:w-2/3;

      & h2 {
        @apply text-2xl md:mx-0
        md:text-2xl
        md:leading-tight
        md:pb-0.5
        md:border-opacity-70;
      }

      & ul {
        @apply mt-0
        md:mt-0.5;

        & li {
          @apply mr-0 w-auto

          md:mb-0;
        }
      }
    }
  }
}
</style>
