<template>
  <div ref="hero" class="hero-post">
    <div ref="inner" class="inner-hero">
      <div class="info-hero">
        <h1 ref="headline" itemprop="headline">{{ article.title }}</h1>
        <article-date-and-author :article="article" />
      </div>
    </div>
    <div v-if="article.featuredImage">
      <img-item
        :src="article.featuredImage.asset._ref"
        :alt="article.featuredImage.alternativeText"
        :modifiers="modifiers"
        fit="cover"
      />
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import ArticleDateAndAuthor from './ArticleDateAndAuthor.vue'
import ImgItem from '~/components/ImgItem.vue'

export default {
  name: 'ArticleDetailHeader',
  components: { ArticleDateAndAuthor, ImgItem },
  props: {
    article: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      heroScroll: null,
      modifiers: {
        blur: 5,
      },
    }
  },
  beforeDestroy() {
    this.heroScroll.pause(0).kill(true)
    ScrollTrigger.getById('stHeroSlug')
  },
  mounted() {
    this.heroScroll = gsap.timeline({ paused: true })
    const { hero, inner, headline } = this.$refs
    this.heroScroll
      .to(headline, {
        y: '+=30',
        autoAlpha: 0,
      })
      .to(
        '.meta-info',
        {
          autoAlpha: 0,
          y: '+=60',
        },
        '-=0.5'
      )
    ScrollTrigger.create({
      id: 'stHeroSlug',
      trigger: hero,
      animation: this.heroScroll,
      start: 'top top',
      pin: inner,
      pinSpacing: false,
      scrub: 1,
    })
  },
}
</script>

<style lang="postcss">
.hero-post {
  @apply relative
  w-screen
  h-[32vh]
  content-before
  overflow-hidden
  sm:h-[45vh]
  md:h-[25vh]
  lg:h-[33vh]
  xl:h-[32vh];

  &:before {
    @apply absolute
    w-full
    h-full
    z-10
    top-0
    bg-gradient-to-b
    from-black/50
    to-gray-600
    dark:from-black/50
    dark:to-gray-800
    md:backdrop-blur-[1px];
  }

  & picture {
    @apply absolute
      inset-0;
  }

  & .inner-hero {
    @apply absolute
    w-screen
    bottom-2
    left-0
    z-10
    flex
    justify-center
    items-center
    sm:py-2
    md:py-3
    lg:pb-4;

    & .info-hero {
      @apply w-11/12
      mx-auto
      flex
      flex-col
      items-start
      justify-center
      md:w-10/12
      lg:w-8/12
      xl:w-7/12
      2xl:w-6/12;

      & h1 {
        @apply font-darkmode
        text-3xl
        text-gray-300
        dark:text-gray-400
        content-after
        sm:mb-1
        sm:text-4xl
        md:text-4xl
        xl:text-4xl;

        &:after {
          @apply mt-1;
        }
      }

      & .meta-info {
        @apply py-2
        sm:py-1
        lg:pt-1;

        & ul {
          @apply flex
          text-xs
          font-niti
          text-gray-300
          dark:text-gray-400;

          & li {
            @apply flex items-center;

            &:after {
              @apply bg-gray-300
            dark:bg-gray-400;
            }
          }

          & li:first-child {
            @apply content-after;
          }
        }
      }
    }
  }
}
</style>
